const methodDisplayNames = {
  coldbrew: "Cold Brew (MIZUDASHI)",
  v60: "V60",
  kalita: "Kalita Wave",
  chemex: "Chemex",
  aeropress: "Aeropress"
};

const methodPreviewImages = {
  coldbrew: "ujenujDrMjc",
  v60: "Lvon9Yylb3I",
  kalita: "1fYkhZxh318",
  chemex: "BKfsCuFQ5R8",
  aeropress: "TD4DBagg2wE"
};

const getMethodName = k => methodDisplayNames[k];
const getMethodPreviewImage = k =>
  `//source.unsplash.com/${methodPreviewImages[k]}/1600x900`;

export { getMethodName, getMethodPreviewImage };
