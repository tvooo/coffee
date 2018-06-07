const methodDisplayNames = {
  coldbrew: "Cold Brew (MIZUDASHI)",
  v60: "V60",
  kalita: "Kalita Wave",
  chemex: "Chemex",
  aeropress: "Aeropress"
};

const getMethodName = k => methodDisplayNames[k];

export { getMethodName };
