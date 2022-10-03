export const testRegexNegative =
  (pattern: RegExp): ((value?: string) => boolean) =>
  (value?: string) =>
    value ? !pattern.test(value) : false;
