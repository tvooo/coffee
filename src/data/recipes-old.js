import Chemex from '../svgs/chemex.svg';
import ChemexIcon from '../svgs/icons/chemex.svg';
import V60 from '../svgs/v60.svg';
import Mug from '../svgs/mug.svg';
import Filter from '../svgs/chemex-filter.svg';
import Aeropress from '../svgs/aeropress.svg';

import v60 from './recipes/v60';
import test from './recipes/test';

export default {
  chemex: {
    image: 'chemex.svg',
    Image: Chemex,
    Icon: ChemexIcon,
    method: 'Chemex',
    desc: `The Chemex is not only a great coffee maker, but also a gorgeous piece of design. Made from glass with a
    wooden handle, ...`,
    recipe: {
      summary: '42g',
      coffee: '42g',
      grind: 'medium coarse',
      water: '500g',
      time: 'ca 8 minutes',
      instructions: [
        'Bloom: add 50g of water',
        'Gradually fill up to 500g',
        'Bloom: add 50g of water',
        'Bloom: add 50g of water',
      ]
    },
  },
  v60: {
    image: 'v60.svg',
    Image: V60,
    Icon: ChemexIcon,
    method: 'V60',
    vendor: 'Hario',
    desc: 'A true classic, the Hario V60 is one of the most popular drippers on the market.',
    recipe: v60,
  },
  aeropress: {
    image: 'aeropress.svg',
    Image: Aeropress,
    Icon: ChemexIcon,
    method: 'Aeropress',
    desc: 'Bold and unconventional, the Aeropress has quickly gathered a passionate worldwide following.',
    recipe: test,
  },

  wave: {
    image: 'chemex-filter.svg',
    Image: Filter,
    Icon: ChemexIcon,
    method: 'Wave',
  },
}
