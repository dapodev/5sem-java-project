export interface IHeaderTitleContext {
  title: string;
  setTitle: (value: string) => void;
  backLinkPath?: string;
  setBackLinkPath: (value: string) => void;
}
