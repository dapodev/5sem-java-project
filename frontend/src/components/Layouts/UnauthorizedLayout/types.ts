export interface IUnauthorizedLayoutProps {
  isWithoutWelcomeMessage: boolean;
}

export type TLogoPanelProps = Pick<
  IUnauthorizedLayoutProps,
  'isWithoutWelcomeMessage'
>;

export type TLogoContentWrapperProps = TLogoPanelProps;
