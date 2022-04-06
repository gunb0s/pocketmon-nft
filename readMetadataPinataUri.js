const readMetadataPinataUri = async (index) => {
  const buffer = await fs.readFileSync(META_FILE);
  let tokenUri = "";

  let regexp = new RegExp("(\r?\n)?" + index + "=(.*)", "g");
  let result = buffer.toString().match(regexp);

  if (result != null) {
    tokenUri = result[0].slice(result[0].indexOf("=") + 1);
  }

  return tokenUri;
};
