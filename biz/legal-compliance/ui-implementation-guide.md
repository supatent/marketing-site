# User Interface Implementation Guide - Legal Compliance

**Document Type:** Technical Specification
**Target:** Frontend Team
**Deadline:** October 16, 2025

---

## 1. Registration Flow Implementation

### 1.1 Registration Form Structure

**File Location:** `frontend/src/components/auth/RegisterForm.vue`

```html
<template>
  <form @submit.prevent="handleRegistration" class="registration-form">
    <!-- Basic User Information -->
    <div class="form-group">
      <label for="email">Email Address *</label>
      <input
        type="email"
        id="email"
        v-model="formData.email"
        required
        autocomplete="email"
      />
    </div>

    <div class="form-group">
      <label for="password">Password *</label>
      <input
        type="password"
        id="password"
        v-model="formData.password"
        required
        autocomplete="new-password"
      />
    </div>

    <div class="form-group">
      <label for="full_name">Full Name *</label>
      <input
        type="text"
        id="full_name"
        v-model="formData.fullName"
        required
        autocomplete="name"
      />
    </div>

    <!-- Age Verification (GDPR Compliance) -->
    <div class="form-group checkbox-group">
      <input
        type="checkbox"
        id="age-confirm"
        v-model="formData.ageConfirmed"
        required
      />
      <label for="age-confirm">
        I confirm that I am 16 years or older *
      </label>
    </div>

    <!-- Privacy Policy Agreement (Required) -->
    <div class="form-group checkbox-group">
      <input
        type="checkbox"
        id="privacy-agree"
        v-model="formData.privacyAccepted"
        required
      />
      <label for="privacy-agree">
        I have read and agree to the
        <a href="/privacy-policy" target="_blank" class="legal-link">
          Privacy Policy
        </a> *
      </label>
    </div>

    <!-- Terms of Service Agreement (Required) -->
    <div class="form-group checkbox-group">
      <input
        type="checkbox"
        id="terms-agree"
        v-model="formData.termsAccepted"
        required
      />
      <label for="terms-agree">
        I have read and agree to the
        <a href="/terms-of-service" target="_blank" class="legal-link">
          Terms of Service
        </a> *
      </label>
    </div>

    <!-- Marketing Consent (Optional) -->
    <div class="form-group checkbox-group">
      <input
        type="checkbox"
        id="marketing-agree"
        v-model="formData.marketingAccepted"
      />
      <label for="marketing-agree">
        I would like to receive product updates and marketing emails
      </label>
    </div>

    <button
      type="submit"
      :disabled="!isFormValid"
      class="btn-primary btn-submit"
    >
      Create Account
    </button>
  </form>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const formData = ref({
  email: '',
  password: '',
  fullName: '',
  ageConfirmed: false,
  privacyAccepted: false,
  termsAccepted: false,
  marketingAccepted: false
})

const isFormValid = computed(() => {
  return formData.value.email &&
         formData.value.password &&
         formData.value.fullName &&
         formData.value.ageConfirmed &&
         formData.value.privacyAccepted &&
         formData.value.termsAccepted
})

const handleRegistration = async () => {
  try {
    // Prepare consent data
    const consentData = {
      privacy_policy: {
        agreed: true,
        version: 'v1.0',
        timestamp: new Date().toISOString(),
        ip_address: await getUserIP() // Implement this helper
      },
      terms_of_service: {
        agreed: true,
        version: 'v1.0',
        timestamp: new Date().toISOString(),
        ip_address: await getUserIP()
      },
      marketing: {
        agreed: formData.value.marketingAccepted,
        timestamp: new Date().toISOString(),
        ip_address: await getUserIP()
      },
      age_verification: {
        confirmed: true,
        timestamp: new Date().toISOString()
      }
    }

    // Register user with consent tracking
    await authStore.register({
      email: formData.value.email,
      password: formData.value.password,
      full_name: formData.value.fullName,
      consents: consentData
    })

    router.push('/dashboard')
  } catch (error) {
    console.error('Registration failed:', error)
  }
}

// Helper to get user IP (for consent logging)
const getUserIP = async (): Promise<string> => {
  try {
    const response = await fetch('https://api.ipify.org?format=json')
    const data = await response.json()
    return data.ip
  } catch {
    return 'unknown'
  }
}
</script>

<style scoped>
.registration-form {
  max-width: 500px;
  margin: 0 auto;
  padding: 2rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.checkbox-group {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.checkbox-group input[type="checkbox"] {
  margin-top: 0.25rem;
}

.legal-link {
  color: var(--primary-color);
  text-decoration: underline;
}

.btn-submit:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
```

---

## 2. User Settings - Privacy Controls

### 2.1 Privacy Settings Component

**File Location:** `frontend/src/components/settings/PrivacySettings.vue`

```html
<template>
  <section class="privacy-settings">
    <h2>Privacy & Data Management</h2>

    <!-- Consent Management -->
    <div class="settings-section">
      <h3>Consent Preferences</h3>

      <div class="consent-item">
        <div class="consent-header">
          <label>Marketing Communications</label>
          <input
            type="checkbox"
            v-model="consents.marketing"
            @change="updateConsent('marketing')"
          />
        </div>
        <p class="consent-description">
          Receive product updates and promotional emails
        </p>
      </div>

      <div class="consent-item">
        <div class="consent-header">
          <label>Analytics & Performance</label>
          <input
            type="checkbox"
            v-model="consents.analytics"
            @change="updateConsent('analytics')"
          />
        </div>
        <p class="consent-description">
          Help improve our service through usage analytics
        </p>
      </div>
    </div>

    <!-- Data Export (GDPR Article 20) -->
    <div class="settings-section">
      <h3>Export Your Data</h3>
      <p>Download a copy of all your personal data in JSON format</p>

      <button
        @click="requestDataExport"
        :disabled="exportLoading"
        class="btn-primary"
      >
        {{ exportLoading ? 'Processing...' : 'Request Data Export' }}
      </button>

      <span class="help-text" v-if="exportRequested">
        ✓ Export requested. You'll receive an email with download link within 24 hours.
      </span>
    </div>

    <!-- Account Deletion (GDPR Article 17) -->
    <div class="settings-section danger-zone">
      <h3>Delete Account</h3>
      <p>Permanently delete your account and all associated data</p>

      <button
        @click="showDeleteConfirmation = true"
        class="btn-danger"
      >
        Delete My Account
      </button>

      <span class="warning-text">
        ⚠️ This action cannot be undone
      </span>
    </div>

    <!-- Delete Confirmation Modal -->
    <div v-if="showDeleteConfirmation" class="modal-overlay">
      <div class="modal-content">
        <h3>Confirm Account Deletion</h3>
        <p>
          Are you sure you want to delete your account? This will permanently remove:
        </p>
        <ul>
          <li>All your projects and content</li>
          <li>All uploaded files and images</li>
          <li>Your account settings and preferences</li>
          <li>All associated data</li>
        </ul>

        <div class="confirmation-input">
          <label>Type "DELETE" to confirm:</label>
          <input
            type="text"
            v-model="deleteConfirmText"
            placeholder="DELETE"
          />
        </div>

        <div class="modal-actions">
          <button
            @click="confirmAccountDeletion"
            :disabled="deleteConfirmText !== 'DELETE'"
            class="btn-danger"
          >
            Delete My Account
          </button>
          <button
            @click="showDeleteConfirmation = false"
            class="btn-secondary"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const consents = ref({
  marketing: false,
  analytics: false
})

const exportLoading = ref(false)
const exportRequested = ref(false)
const showDeleteConfirmation = ref(false)
const deleteConfirmText = ref('')

onMounted(async () => {
  // Load current consent settings
  const userConsents = await fetchUserConsents()
  consents.value = userConsents
})

const updateConsent = async (type: string) => {
  try {
    await fetch('/api/user/update-consent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authStore.token}`
      },
      body: JSON.stringify({
        consent_type: type,
        consent_given: consents.value[type],
        timestamp: new Date().toISOString()
      })
    })
  } catch (error) {
    console.error('Failed to update consent:', error)
  }
}

const requestDataExport = async () => {
  exportLoading.value = true
  try {
    await fetch('/api/user/export-data', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${authStore.token}`
      }
    })
    exportRequested.value = true
  } catch (error) {
    console.error('Data export failed:', error)
  } finally {
    exportLoading.value = false
  }
}

const confirmAccountDeletion = async () => {
  if (deleteConfirmText.value !== 'DELETE') return

  try {
    await fetch('/api/user/delete-account', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${authStore.token}`
      }
    })

    // Logout and redirect
    await authStore.logout()
    router.push('/account-deleted')
  } catch (error) {
    console.error('Account deletion failed:', error)
  }
}

const fetchUserConsents = async () => {
  // Implement API call to fetch user consents
  const response = await fetch('/api/user/consents', {
    headers: {
      'Authorization': `Bearer ${authStore.token}`
    }
  })
  return await response.json()
}
</script>

<style scoped>
.privacy-settings {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.settings-section {
  margin-bottom: 3rem;
  padding: 1.5rem;
  border: 1px solid var(--border-color);
  border-radius: 8px;
}

.consent-item {
  margin-bottom: 1.5rem;
}

.consent-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.consent-description {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.danger-zone {
  border-color: var(--danger-color);
}

.btn-danger {
  background-color: var(--danger-color);
  color: white;
}

.warning-text {
  display: block;
  margin-top: 0.5rem;
  color: var(--danger-color);
  font-size: 0.9rem;
}

.help-text {
  display: block;
  margin-top: 0.5rem;
  color: var(--success-color);
  font-size: 0.9rem;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 500px;
  width: 90%;
}

.confirmation-input {
  margin: 1.5rem 0;
}

.modal-actions {
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
}
</style>
```

---

## 3. Footer Implementation

### 3.1 Global Footer Component

**File Location:** `frontend/src/components/layout/AppFooter.vue`

```html
<template>
  <footer class="site-footer">
    <div class="footer-content">
      <!-- Legal Links (Required) -->
      <div class="legal-links">
        <router-link to="/privacy-policy">Privacy Policy</router-link>
        <router-link to="/terms-of-service">Terms of Service</router-link>
        <router-link to="/cookies-policy">Cookie Policy</router-link>
        <router-link to="/impressum" v-if="showImpressum">Impressum</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>

      <!-- Cookie Preference Link -->
      <div class="cookie-controls">
        <button @click="openCookieSettings" class="link-button">
          Cookie Preferences
        </button>
      </div>

      <!-- Compliance Statement -->
      <div class="compliance-info">
        <p>&copy; {{ currentYear }} Vanua CMS. GDPR Compliant.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useCookieConsent } from '@/composables/useCookieConsent'

const { openSettings } = useCookieConsent()
const currentYear = new Date().getFullYear()

// Show Impressum for German/Swiss users
const showImpressum = computed(() => {
  const userLocale = navigator.language.toLowerCase()
  return userLocale.startsWith('de') || userLocale.startsWith('ch')
})

const openCookieSettings = () => {
  openSettings()
}
</script>

<style scoped>
.site-footer {
  background: var(--footer-bg);
  border-top: 1px solid var(--border-color);
  padding: 2rem 1rem;
  margin-top: 4rem;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
}

.legal-links {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
}

.legal-links a {
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.2s;
}

.legal-links a:hover {
  color: var(--primary-color);
  text-decoration: underline;
}

.link-button {
  background: none;
  border: none;
  color: var(--primary-color);
  text-decoration: underline;
  cursor: pointer;
  font-size: 0.95rem;
}

.compliance-info {
  text-align: center;
  color: var(--text-secondary);
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .legal-links {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
}
</style>
```

---

## 4. Implementation Checklist

### Frontend Tasks

**Registration Flow:**
- [ ] Create RegisterForm.vue with all consent checkboxes
- [ ] Implement form validation (all required fields)
- [ ] Add IP address capture for consent logging
- [ ] Integrate with backend registration API
- [ ] Test consent data is properly saved

**User Settings:**
- [ ] Create PrivacySettings.vue component
- [ ] Implement consent management toggles
- [ ] Build data export request functionality
- [ ] Create account deletion flow with confirmation
- [ ] Add loading states and success messages

**Footer:**
- [ ] Create AppFooter.vue with legal links
- [ ] Add cookie preferences link
- [ ] Implement locale-based Impressum display
- [ ] Ensure footer on all pages
- [ ] Test mobile responsiveness

**Routes to Create:**
- [ ] `/privacy-policy` - Privacy Policy page
- [ ] `/terms-of-service` - Terms of Service page
- [ ] `/cookies-policy` - Cookie Policy page
- [ ] `/impressum` - Legal Notice (German/Swiss)
- [ ] `/account-deleted` - Post-deletion confirmation

---

## 5. API Integration Requirements

### Frontend API Calls Needed

```typescript
// User Consent API
POST /api/user/update-consent
{
  consent_type: 'marketing' | 'analytics',
  consent_given: boolean,
  timestamp: string
}

// Data Export API
POST /api/user/export-data
Headers: { Authorization: 'Bearer <token>' }

// Account Deletion API
POST /api/user/delete-account
Headers: { Authorization: 'Bearer <token>' }

// Fetch User Consents
GET /api/user/consents
Headers: { Authorization: 'Bearer <token>' }
Response: {
  marketing: boolean,
  analytics: boolean,
  privacy_policy_version: string,
  terms_version: string
}
```

---

## 6. Testing Requirements

### Manual Testing Checklist

**Registration Flow:**
- [ ] Cannot submit without age confirmation
- [ ] Cannot submit without privacy policy acceptance
- [ ] Cannot submit without terms acceptance
- [ ] Marketing consent is optional
- [ ] Consent data saved to database
- [ ] Legal links open in new tab

**User Settings:**
- [ ] Consent toggles update database
- [ ] Data export request sends email
- [ ] Account deletion requires "DELETE" confirmation
- [ ] Account deletion logs user out
- [ ] Success/error messages display correctly

**Footer:**
- [ ] All legal links accessible
- [ ] Cookie preferences opens modal
- [ ] Impressum shows for German/Swiss users only
- [ ] Footer displays on all pages
- [ ] Mobile responsive

---

**Document Status:** Implementation Ready
**Last Updated:** October 4, 2025
**Implementation Deadline:** October 16, 2025
