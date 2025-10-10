<template>
  <footer class="footer-section">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <div class="brand-logo">
            <svg
              class="logo-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <span class="brand-name">Vibe CMS</span>
          </div>
          <p class="brand-description">
            {{ tLanding('footer.brand.description') }}
          </p>
        </div>

        <div class="footer-links">
          <div class="link-group">
            <h4 class="link-title">
              {{ tLanding('footer.product.title') }}
            </h4>
            <ul class="link-list">
              <li>
                <a
                  href="#"
                  class="link"
                >{{ tLanding('footer.product.features') }}</a>
              </li>
              <li>
                <a
                  href="#"
                  class="link"
                >{{ tLanding('footer.product.pricing') }}</a>
              </li>
              <li>
                <a
                  href="#"
                  class="link"
                >{{ tLanding('footer.product.documentation') }}</a>
              </li>
              <li>
                <a
                  href="https://www.npmjs.com/package/vibe-cms-sdk"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="link"
                >{{ tLanding('footer.product.npmPackage') }}</a>
              </li>
              <li>
                <a
                  href="#"
                  class="link"
                >{{ tLanding('footer.product.apiReference') }}</a>
              </li>
              <li>
                <a
                  href="#"
                  class="link"
                >{{ tLanding('footer.product.changelog') }}</a>
              </li>
            </ul>
          </div>

          <div class="link-group">
            <h4 class="link-title">
              {{ tLanding('footer.resources.title') }}
            </h4>
            <ul class="link-list">
              <li>
                <a
                  href="#"
                  class="link"
                >{{ tLanding('footer.resources.blog') }}</a>
              </li>
              <li>
                <a
                  href="#"
                  class="link"
                >{{ tLanding('footer.resources.guides') }}</a>
              </li>
              <li>
                <a
                  href="#"
                  class="link"
                >{{ tLanding('footer.resources.templates') }}</a>
              </li>
              <li>
                <a
                  href="#"
                  class="link"
                >{{ tLanding('footer.resources.community') }}</a>
              </li>
              <li>
                <a
                  href="#"
                  class="link"
                >{{ tLanding('footer.resources.support') }}</a>
              </li>
            </ul>
          </div>

          <div class="link-group">
            <h4 class="link-title">
              {{ tLanding('footer.company.title') }}
            </h4>
            <ul class="link-list">
              <li>
                <a
                  href="#"
                  class="link"
                >{{ tLanding('footer.company.about') }}</a>
              </li>
              <li>
                <a
                  href="#"
                  class="link"
                >{{ tLanding('footer.company.careers') }}</a>
              </li>
              <li>
                <a
                  href="#"
                  class="link"
                >{{ tLanding('footer.company.press') }}</a>
              </li>
              <li>
                <a
                  href="#"
                  class="link"
                >{{ tLanding('footer.company.contact') }}</a>
              </li>
              <li>
                <a
                  href="#"
                  class="link"
                >{{ tLanding('footer.company.partners') }}</a>
              </li>
            </ul>
          </div>

          <div class="link-group">
            <h4 class="link-title">
              {{ tLanding('footer.legal.title') }}
            </h4>
            <ul class="link-list">
              <li>
                <a
                  href="#"
                  class="link"
                >{{ tLanding('footer.legal.privacyPolicy') }}</a>
              </li>
              <li>
                <a
                  href="#"
                  class="link"
                >{{ tLanding('footer.legal.termsOfService') }}</a>
              </li>
              <li>
                <a
                  href="#"
                  class="link"
                >{{ tLanding('footer.legal.cookiePolicy') }}</a>
              </li>
              <li>
                <a
                  href="#"
                  class="link"
                >{{ tLanding('footer.legal.security') }}</a>
              </li>
              <li>
                <a
                  href="#"
                  class="link"
                >{{ tLanding('footer.legal.gdpr') }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="footer-bottom-left">
          <p class="copyright">
            {{ tLanding('footer.bottom.copyright') }}
          </p>
          <div class="footer-status">
            <span class="status-indicator" />
            <span class="status-text">{{ tLanding('footer.bottom.status') }}</span>
          </div>
        </div>

        <div class="footer-bottom-right">
          <div class="social-links">
            <a
              href="#"
              class="social-link"
              :aria-label="tLanding('footer.social.twitter')"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="#"
              class="social-link"
              :aria-label="tLanding('footer.social.github')"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="#"
              class="social-link"
              :aria-label="tLanding('footer.social.linkedin')"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="#"
              class="social-link"
              :aria-label="tLanding('footer.social.discord')"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0190 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9460 2.4189-2.1568 2.4189Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useTranslation } from '@/composables/useTranslation'

const { tLanding } = useTranslation()
</script>

<style scoped>
.footer-section {
  background: #0A0A0B;
  color: white;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
  padding: 4rem 0;
}

.footer-brand {
  max-width: 400px;
}

.brand-logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.logo-icon {
  width: 32px;
  height: 32px;
  color: #4A90E2;
}

.brand-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
}

.brand-description {
  color: #A0A0A8;
  line-height: 1.6;
  font-size: 0.95rem;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.link-group {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.link-title {
  font-size: 0.875rem;
  font-weight: 600;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0;
}

.link-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.link {
  color: #A0A0A8;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s ease;
}

.link:hover {
  color: white;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.footer-bottom-left {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.copyright {
  color: #A0A0A8;
  font-size: 0.875rem;
  margin: 0;
}

.footer-status {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.status-indicator {
  width: 8px;
  height: 8px;
  background: #50FA7B;
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

.status-text {
  color: #A0A0A8;
  font-size: 0.875rem;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.footer-bottom-right {
  display: flex;
  align-items: center;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  color: #A0A0A8;
  transition: all 0.2s ease;
  border-radius: 8px;
}

.social-link:hover {
  color: white;
  background: rgba(255, 255, 255, 0.05);
}

.social-link svg {
  width: 18px;
  height: 18px;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 3rem;
    padding: 3rem 0;
  }

  .footer-links {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
  }

  .footer-bottom-left {
    flex-direction: column;
    gap: 1rem;
  }
}

@media (max-width: 480px) {
  .footer-links {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>