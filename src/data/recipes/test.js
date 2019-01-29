export default {
  summary: '2 cups, 19g coffee, 300g water',
  coffee: 19,
  water: 300,
  grind: 'medium coarse',
  time: '3-4 minutes',
  preparation: [
    {
      type: 'wet',
    },
    {
      type: 'pour-out',
    },
    {
      type: 'add-coffee',
    },
    {
      type: 'start-timer',
    },
  ],
  instructions: [
    {
      type: 'bloom',
      length: 5,
      amount: 50,
    },
    {
      type: 'add-water',
      length: 5,
      amount: 50,
    },
    {
      type: 'add-water',
      length: 5,
      amount: 50,
    },
    {
      type: 'add-water',
      length: 5,
      amount: 75,
    },
    {
      type: 'add-water',
      amount: 75,
    },
  ],
};
