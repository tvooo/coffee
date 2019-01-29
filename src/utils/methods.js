const methodDisplayNames = {
  coldbrew: 'Mizudashi Cold Brew',
  v60: 'Hario V60',
  kalita: 'Kalita Wave',
  chemex: 'Chemex',
  aeropress: 'Aeropress',
};

const methodPreviewImages = {
  coldbrew: 'ujenujDrMjc',
  v60: 'Lvon9Yylb3I',
  kalita: '1fYkhZxh318',
  chemex: 'BKfsCuFQ5R8',
  aeropress: 'TD4DBagg2wE',
};

const getMethodName = k => methodDisplayNames[k];
const getMethodPreviewImage = imageCode =>
  `//source.unsplash.com/${imageCode}/300x160`;

export { getMethodName, getMethodPreviewImage };
