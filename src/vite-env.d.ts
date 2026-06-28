/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CONTACT_ENDPOINT?: string
  readonly VITE_GOOGLE_MAPS_EMBED_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
