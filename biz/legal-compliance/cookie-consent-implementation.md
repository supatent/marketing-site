# Cookie Consent Implementation Guide

**Document Type:** Technical Specification
**Target:** Frontend Team
**Deadline:** October 14, 2025
**GDPR Requirement:** Critical - Launch Blocker

---

## 1. Cookie Consent Architecture

### 1.1 Cookie Categories for VMS

| Category | Examples | Consent Required | Block Until Consent |
|----------|----------|------------------|---------------------|
| **Strictly Necessary** | Supabase auth session, CSRF tokens | No | Never blocked |
| **Functional** | Language preference, theme setting | Recommended | Yes |
| **Analytics** | Plausible Analytics (anonymous) | No* | No (if truly anonymous) |
| **Analytics** | Google Analytics | Yes | Yes |
| **Performance** | Sentry session replay, error tracking | Yes | Yes |

\* Plausible Analytics can run without consent if configured for truly anonymous tracking (no IP logging, no user identification)

---

## 2. First Layer - Cookie Banner

### 2.1 Cookie Banner Component

**File Location:** `frontend/src/components/legal/CookieBanner.vue`

```html
<template>
  <div v-if="showBanner" class="cookie-banner">
    <div class="cookie-content">
      <h3>We use cookies</h3>
      <p>
        We use cookies to enhance your experience, analyze site usage, and provide
        personalized content. You can manage your preferences below.
      </p>

      <div class="cookie-buttons">
        <button @click="acceptAll" class="btn-primary">
          Accept All
        </button>
        <button @click="rejectAll" class="btn-secondary">
          Reject All
        </button>
        <button @click="openPreferences" class="btn-link">
          Manage Preferences
        </button>
      </div>

      <div class="privacy-links">
        <a href="/cookies-policy" target="_blank">Cookie Policy</a>
        <a href="/privacy-policy" target="_blank">Privacy Policy</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useCookieConsent } from '@/composables/useCookieConsent'

const { showBanner, acceptAll, rejectAll, openPreferences } = useCookieConsent()

onMounted(() => {
  // Check if user has already made a choice
  const savedConsent = localStorage.getItem('cookie-consent')
  if (!savedConsent) {
    showBanner.value = true
  }
})
</script>

<style scoped>
.cookie-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  border-top: 2px solid var(--primary-color);
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  z-index: 9999;
  animation: slideUp 0.3s ease-out;
}

@keyframes slideUp {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}

.cookie-content {
  max-width: 1200px;
  margin: 0 auto;
}

.cookie-content h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.25rem;
}

.cookie-content p {
  margin: 0 0 1rem 0;
  color: var(--text-secondary);
}

.cookie-buttons {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.btn-primary {
  background: var(--primary-color);
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
}

.btn-secondary {
  background: var(--gray-200);
  color: var(--text-primary);
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.btn-link {
  background: none;
  border: none;
  color: var(--primary-color);
  text-decoration: underline;
  cursor: pointer;
  padding: 0.75rem 1.5rem;
}

.privacy-links {
  display: flex;
  gap: 1.5rem;
  font-size: 0.9rem;
}

.privacy-links a {
  color: var(--text-secondary);
  text-decoration: none;
}

.privacy-links a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .cookie-buttons {
    flex-direction: column;
  }

  .privacy-links {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>
```

---

## 3. Second Layer - Cookie Preferences Modal

### 3.1 Cookie Preferences Component

**File Location:** `frontend/src/components/legal/CookiePreferences.vue`

```html
<template>
  <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <div class="modal-header">
        <h2>Cookie Preferences</h2>
        <button @click="closeModal" class="close-btn">&times;</button>
      </div>

      <div class="modal-body">
        <!-- Strictly Necessary (Always On) -->
        <div class="cookie-category">
          <div class="category-header">
            <h3>Strictly Necessary Cookies</h3>
            <div class="toggle-container">
              <input type="checkbox" checked disabled class="toggle-disabled" />
              <span class="always-active">Always Active</span>
            </div>
          </div>
          <p class="category-description">
            Required for authentication and basic site functionality. These cookies
            cannot be disabled as they are essential for the service to work.
          </p>
          <div class="cookie-details">
            <strong>Examples:</strong>
            <ul>
              <li>supabase-auth-token (authentication session)</li>
              <li>csrf-token (security protection)</li>
            </ul>
          </div>
        </div>

        <!-- Functional Cookies -->
        <div class="cookie-category">
          <div class="category-header">
            <h3>Functional Cookies</h3>
            <label class="toggle-switch">
              <input
                type="checkbox"
                v-model="preferences.functional"
                @change="updatePreview"
              />
              <span class="slider"></span>
            </label>
          </div>
          <p class="category-description">
            Remember your preferences such as language selection and theme settings.
          </p>
          <div class="cookie-details">
            <strong>Examples:</strong>
            <ul>
              <li>user-language (EN, DE, ES, IT)</li>
              <li>user-theme (light/dark mode)</li>
            </ul>
          </div>
        </div>

        <!-- Analytics Cookies -->
        <div class="cookie-category">
          <div class="category-header">
            <h3>Analytics Cookies</h3>
            <label class="toggle-switch">
              <input
                type="checkbox"
                v-model="preferences.analytics"
                @change="updatePreview"
              />
              <span class="slider"></span>
            </label>
          </div>
          <p class="category-description">
            Help us understand how you use our site through privacy-friendly analytics
            (Plausible Analytics - no personal data collected).
          </p>
          <div class="cookie-details">
            <strong>Examples:</strong>
            <ul>
              <li>plausible-analytics (anonymous usage tracking)</li>
            </ul>
          </div>
        </div>

        <!-- Performance Cookies -->
        <div class="cookie-category">
          <div class="category-header">
            <h3>Performance Cookies</h3>
            <label class="toggle-switch">
              <input
                type="checkbox"
                v-model="preferences.performance"
                @change="updatePreview"
              />
              <span class="slider"></span>
            </label>
          </div>
          <p class="category-description">
            Error tracking and performance monitoring to improve service reliability
            (Sentry session replay).
          </p>
          <div class="cookie-details">
            <strong>Examples:</strong>
            <ul>
              <li>sentry-session (error tracking and replay)</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="modal-footer">
        <button @click="savePreferences" class="btn-primary">
          Save Preferences
        </button>
        <button @click="closeModal" class="btn-secondary">
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useCookieConsent } from '@/composables/useCookieConsent'

const { showModal, preferences, savePreferences, closeModal } = useCookieConsent()

const updatePreview = () => {
  // Update preview of what will be enabled/disabled
  console.log('Updated preferences:', preferences.value)
}

onMounted(() => {
  // Load saved preferences
  const saved = localStorage.getItem('cookie-consent')
  if (saved) {
    preferences.value = JSON.parse(saved)
  }
})
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  animation: fadeIn 0.2s;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.modal-content {
  background: white;
  border-radius: 12px;
  max-width: 700px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid var(--border-color);
}

.modal-header h2 {
  margin: 0;
  font-size: 1.5rem;
}

.close-btn {
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: var(--text-secondary);
  line-height: 1;
  padding: 0;
  width: 2rem;
  height: 2rem;
}

.modal-body {
  padding: 1.5rem;
}

.cookie-category {
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--border-light);
}

.cookie-category:last-child {
  border-bottom: none;
}

.category-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.category-header h3 {
  margin: 0;
  font-size: 1.1rem;
}

.category-description {
  color: var(--text-secondary);
  margin: 0 0 1rem 0;
  line-height: 1.5;
}

.cookie-details {
  background: var(--gray-50);
  padding: 1rem;
  border-radius: 6px;
  font-size: 0.9rem;
}

.cookie-details ul {
  margin: 0.5rem 0 0 0;
  padding-left: 1.5rem;
}

.cookie-details li {
  margin: 0.25rem 0;
}

/* Toggle Switch */
.toggle-switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
}

.toggle-switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--gray-300);
  transition: 0.3s;
  border-radius: 24px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 18px;
  width: 18px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  transition: 0.3s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: var(--primary-color);
}

input:checked + .slider:before {
  transform: translateX(26px);
}

/* Always Active Badge */
.toggle-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.toggle-disabled {
  width: 50px;
  height: 24px;
  background: var(--gray-200);
  border-radius: 24px;
  position: relative;
}

.always-active {
  font-size: 0.85rem;
  color: var(--text-secondary);
  font-weight: 500;
}

.modal-footer {
  display: flex;
  gap: 1rem;
  padding: 1.5rem;
  border-top: 1px solid var(--border-color);
  justify-content: flex-end;
}

.btn-primary {
  background: var(--primary-color);
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
}

.btn-secondary {
  background: var(--gray-200);
  color: var(--text-primary);
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
</style>
```

---

## 4. Cookie Consent Composable

### 4.1 Cookie Logic Implementation

**File Location:** `frontend/src/composables/useCookieConsent.ts`

```typescript
import { ref } from 'vue'

interface CookiePreferences {
  strictly_necessary: boolean // Always true
  functional: boolean
  analytics: boolean
  performance: boolean
}

const showBanner = ref(false)
const showModal = ref(false)

const preferences = ref<CookiePreferences>({
  strictly_necessary: true,
  functional: false,
  analytics: false,
  performance: false
})

export function useCookieConsent() {
  const acceptAll = () => {
    preferences.value = {
      strictly_necessary: true,
      functional: true,
      analytics: true,
      performance: true
    }
    saveConsent()
    applyConsent()
    showBanner.value = false
  }

  const rejectAll = () => {
    preferences.value = {
      strictly_necessary: true,
      functional: false,
      analytics: false,
      performance: false
    }
    saveConsent()
    applyConsent()
    showBanner.value = false
  }

  const savePreferences = () => {
    saveConsent()
    applyConsent()
    showModal.value = false
    showBanner.value = false
  }

  const openPreferences = () => {
    showBanner.value = false
    showModal.value = true
  }

  const openSettings = () => {
    showModal.value = true
  }

  const closeModal = () => {
    showModal.value = false
  }

  const saveConsent = () => {
    const consentData = {
      preferences: preferences.value,
      timestamp: new Date().toISOString(),
      version: 'v1.0'
    }
    localStorage.setItem('cookie-consent', JSON.stringify(consentData))

    // Also save to backend for compliance tracking
    fetch('/api/user/cookie-consent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(consentData)
    }).catch(err => console.error('Failed to save consent:', err))
  }

  const applyConsent = () => {
    // Block/unblock cookies based on consent

    // Functional cookies
    if (!preferences.value.functional) {
      // Clear functional cookies
      document.cookie = 'user-language=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
      document.cookie = 'user-theme=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
    }

    // Analytics
    if (preferences.value.analytics) {
      // Initialize analytics (e.g., Plausible)
      initializePlausible()
    } else {
      // Remove analytics scripts
      removePlausible()
    }

    // Performance monitoring
    if (preferences.value.performance) {
      // Initialize Sentry
      initializeSentry()
    } else {
      // Disable Sentry
      disableSentry()
    }
  }

  const initializePlausible = () => {
    // Load Plausible Analytics script
    const script = document.createElement('script')
    script.defer = true
    script.setAttribute('data-domain', 'vanua.ai')
    script.src = 'https://plausible.io/js/script.js'
    document.head.appendChild(script)
  }

  const removePlausible = () => {
    // Remove Plausible script if exists
    const scripts = document.querySelectorAll('script[src*="plausible"]')
    scripts.forEach(script => script.remove())
  }

  const initializeSentry = () => {
    // Initialize Sentry (already imported in main.ts, just enable)
    if (window.Sentry) {
      window.Sentry.init({ enabled: true })
    }
  }

  const disableSentry = () => {
    // Disable Sentry session replay
    if (window.Sentry) {
      window.Sentry.init({ enabled: false })
    }
  }

  return {
    showBanner,
    showModal,
    preferences,
    acceptAll,
    rejectAll,
    savePreferences,
    openPreferences,
    openSettings,
    closeModal
  }
}
```

---

## 5. Cookie Policy Page

### 5.1 Cookie Policy Content

**File Location:** `frontend/src/views/CookiePolicy.vue`

```html
<template>
  <div class="cookie-policy-page">
    <div class="container">
      <h1>Cookie Policy</h1>
      <p class="last-updated">Last Updated: October 4, 2025</p>

      <section>
        <h2>What Are Cookies</h2>
        <p>
          Cookies are small text files stored on your device when you visit a website.
          They help us provide you with a better experience by remembering your
          preferences and understanding how you use our service.
        </p>
      </section>

      <section>
        <h2>How We Use Cookies</h2>
        <p>We use the following categories of cookies:</p>

        <div class="cookie-category-info">
          <h3>1. Strictly Necessary Cookies</h3>
          <p><strong>Purpose:</strong> Essential for the website to function</p>
          <p><strong>Consent Required:</strong> No (always active)</p>
          <p><strong>Examples:</strong></p>
          <ul>
            <li>supabase-auth-token - Authentication session</li>
            <li>csrf-token - Security protection</li>
          </ul>
        </div>

        <div class="cookie-category-info">
          <h3>2. Functional Cookies</h3>
          <p><strong>Purpose:</strong> Remember your preferences</p>
          <p><strong>Consent Required:</strong> Yes (optional)</p>
          <p><strong>Examples:</strong></p>
          <ul>
            <li>user-language - Language preference (EN, DE, ES, IT)</li>
            <li>user-theme - Dark/light mode preference</li>
          </ul>
        </div>

        <div class="cookie-category-info">
          <h3>3. Analytics Cookies</h3>
          <p><strong>Purpose:</strong> Understand how you use our site</p>
          <p><strong>Consent Required:</strong> Yes</p>
          <p><strong>Provider:</strong> Plausible Analytics (privacy-friendly, no personal data)</p>
        </div>

        <div class="cookie-category-info">
          <h3>4. Performance Cookies</h3>
          <p><strong>Purpose:</strong> Monitor errors and performance</p>
          <p><strong>Consent Required:</strong> Yes</p>
          <p><strong>Provider:</strong> Sentry (error tracking and session replay)</p>
        </div>
      </section>

      <section>
        <h2>Managing Your Cookie Preferences</h2>
        <p>
          You can manage your cookie preferences at any time by clicking the
          "Cookie Preferences" link in the footer of any page.
        </p>
        <button @click="openCookieSettings" class="btn-primary">
          Manage Cookie Preferences
        </button>
      </section>

      <section>
        <h2>Third-Party Cookies</h2>
        <p>
          We use carefully selected third-party services that may set cookies:
        </p>
        <ul>
          <li><strong>Plausible Analytics:</strong> Anonymous usage statistics (no personal data)</li>
          <li><strong>Sentry:</strong> Error monitoring and performance tracking</li>
        </ul>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>
          If you have questions about our use of cookies, please contact us at:
          <a href="mailto:privacy@vanua.ai">privacy@vanua.ai</a>
        </p>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCookieConsent } from '@/composables/useCookieConsent'

const { openSettings } = useCookieConsent()

const openCookieSettings = () => {
  openSettings()
}
</script>

<style scoped>
.cookie-policy-page {
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.last-updated {
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-bottom: 2rem;
}

section {
  margin-bottom: 3rem;
}

h1 {
  margin-bottom: 0.5rem;
}

h2 {
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: var(--primary-color);
}

h3 {
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
}

.cookie-category-info {
  background: var(--gray-50);
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1rem 0;
}

.cookie-category-info ul {
  margin: 0.5rem 0;
  padding-left: 1.5rem;
}

.btn-primary {
  background: var(--primary-color);
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  margin-top: 1rem;
}
</style>
```

---

## 6. Implementation Checklist

### Cookie Consent Tasks

**Components:**
- [ ] Create CookieBanner.vue (first layer)
- [ ] Create CookiePreferences.vue (second layer)
- [ ] Create useCookieConsent.ts composable
- [ ] Create CookiePolicy.vue page

**Functionality:**
- [ ] Accept All button saves all consents
- [ ] Reject All button saves only strictly necessary
- [ ] Manage Preferences opens modal
- [ ] Toggle switches update preferences
- [ ] Preferences persist in localStorage
- [ ] Preferences saved to backend for compliance tracking

**Cookie Blocking:**
- [ ] Block Plausible until analytics consent given
- [ ] Block Sentry until performance consent given
- [ ] Functional cookies only set if consent given
- [ ] Strictly necessary cookies always active

**Testing:**
- [ ] Banner shows on first visit
- [ ] Banner doesn't show if consent already given
- [ ] Cookie Preferences link in footer works
- [ ] Preferences modal saves correctly
- [ ] Scripts load/unload based on consent
- [ ] Mobile responsive design

---

**Document Status:** Implementation Ready
**Last Updated:** October 4, 2025
**Implementation Deadline:** October 14, 2025
