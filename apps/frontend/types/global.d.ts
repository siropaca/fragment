/// <reference types="node" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NEXT_PUBLIC_SITE_NAME: string;
    readonly NEXT_PUBLIC_SITE_ORIGIN: string;
    readonly NEXT_PUBLIC_API_ENDPOINT: string;
    readonly NEXT_PUBLIC_API_TOKEN: string;
    readonly NEXT_PUBLIC_EMAIL: string;
    readonly NEXT_PUBLIC_GITHUB: string;
    readonly NEXT_PUBLIC_TWITTER: string;
    readonly NEXT_PUBLIC_INSTAGRAM: string;
  }
}
