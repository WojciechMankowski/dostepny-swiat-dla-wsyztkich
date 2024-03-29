/// <reference types="vite/client" />

interface ImportMetaEnv {
    // Definiuj konkretnie typy dla swoich zmiennych środowiskowych
    readonly VITE_API_KEY: string;
    // Dodaj inne zmienne środowiskowe, które używasz, z odpowiednimi typami
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  