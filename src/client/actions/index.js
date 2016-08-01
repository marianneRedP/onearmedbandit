export const GET_FRUITS = 'GET_FRUITS';

const colors = [
  '#F34235',
  '#E81D62',
  '#9B26AF',
  '#6639B6',
  '#3E50B4',
  '#2095F2',
  '#02A8F3',
  '#00BBD3',
  '#009587',
  '#FE5621',
  '#785447',
  '#9D9D9D',
  '#4BAE4F',
  '#5F7C8A',
  ];

const icons = [
  'ambulance',
  'automobile',
  'bicycle',
  'bus', 'cab',
  'car',
  'fighter-jet',
  'motorcycle',
  'plane',
  'rocket',
  'ship',
  'space-shuttle',
  'subway',
  'train',
  'truck',
  ];

const color = colors[Math.floor(Math.random() * colors.length)];
const icon = icons[Math.floor(Math.random() * icons.length)];

export const getFruits = () => ({
  type: GET_FRUITS,
  fruits
});

const loadFruit = (id) => {
  return new Promise(resolve => {
    const fruit = [
      id,
      icon,
      color,
      ];  
  });
};

export const loadFruits = () => {
  Promise.all([
    loadFruit(0),
    loadFruit(1),
    loadFruit(2),
    loadFruit(3),
    loadFruit(4)
    ])
  .then((fruit) => dispatch(getFruit(...fruit)));
};



