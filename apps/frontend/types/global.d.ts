/// <reference types="node" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NEXT_PUBLIC_API_ENDPOINT: string;
    readonly NEXT_PUBLIC_API_TOKEN: string;
  }
}
