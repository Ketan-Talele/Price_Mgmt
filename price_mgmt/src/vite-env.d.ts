/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_PATH: string
  // Add more environment variables here as needed
  // readonly VITE_API_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
