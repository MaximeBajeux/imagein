export const removeAccents = (str: string) => {
  const accents = "ÀÁÂÃÄÅàáâãäåÒÓÔÕÖØòóôõöøÈÉÊËèéêëÇçÌÍÎÏìíîïÙÚÛÜùúûüÿÑñ";
  const withoutAccents =
    "AAAAAAaaaaaaOOOOOOooooooEEEEeeeeCcIIIIiiiiUUUUuuuuyNn";
  const newStr = str
    .split("")
    .map((char) => {
      const index = accents.indexOf(char);
      return index !== -1 ? withoutAccents[index] : char;
    })
    .join("");
  return newStr;
};
