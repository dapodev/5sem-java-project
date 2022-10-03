export const getIsWithoutWelcomeMessage = (pathname: string) => {
  const pathRegexes = [/reset/, /forgot/];

  const isWithoutWelcomeMessage = pathRegexes.some((regex) =>
    regex.test(pathname),
  );

  return isWithoutWelcomeMessage;
};
