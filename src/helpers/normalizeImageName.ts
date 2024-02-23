export const normalizeImageName = (tradepackName: string) => {
  tradepackName = tradepackName.toLowerCase().replace("'", "");
  const tradepackParts = tradepackName.split(" ");
  const imageName = tradepackParts.join("_");

  return imageName;
};
