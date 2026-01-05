/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_NEWSLETTER_FORM_ACTION?: string;
  readonly VITE_NEWSLETTER_FORM_EMAIL_FIELD?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
