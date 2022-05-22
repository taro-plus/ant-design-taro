export const loadMdFile = async (path: string) => {
  return (await import(`${path}.md?raw`)).default;
};
