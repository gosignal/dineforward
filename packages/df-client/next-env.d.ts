/// <reference types="next" />
/// <reference types="next/types/global" />

declare module '*.graphql' {
  const content: any;
  export = content;
}
