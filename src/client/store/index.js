// STORE

import flyd from 'flyd';
import _ from 'lodash'

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
  'bus', 
  'cab',
  'car',
  'fighter-jet',
  'motorcycle',
  'paper-plane',
  'plane',
  'rocket',
  'ship',
  'space-shuttle',
  'subway',
  'train',
  'truck',
  ];

const random = (size) => Math.floor(Math.random() * size); 

const fruitFactory = id => flyd.stream({ id, icon: 'ambulance', color: 'black' });

const getAllFruits = (nb) => _.times(nb, fruitFactory);

const fruits = getAllFruits(5);

const combinedFruits = flyd.combine(
  (...params) => _.map(params.slice(0, -2), fruit => fruit()),
  fruits
  );

const on = (func) => {
  flyd.on(func, combinedFruits);
};

const rollFruit = (fruit) => {
  console.log('rollFruit');
  setTimeout(
    () => {
      const color = colors[random(colors.length - 1)];
      const icon = icons[random(icons.length - 1)];
      const id = fruit().id;
      fruit({ color, icon, id });
      if (icon !== 'paper-plane')
        rollFruit(fruit);
      else
        fruit.end(true);
    },
    200
  );
};

const rollFruits = () => { 
  return _.forEach(fruits, rollFruit); 
};

// END 
const checkFruit = (fruit) => fruit.icon === 'paper-plane';

const endsStream = (fruit) => {
  console.log('END');
  fruit.end(checkFruit(fruit));
};

const endsAllStreams = flyd.combine(
  (...params) => _.map(params.slice(0, -2), fruit => endsStream(fruit)),
  combinedFruits
);

const onEnd = (func) => {
  flyd.on(func, endsAllStreams);
};

export default { on, rollFruits, onEnd };














