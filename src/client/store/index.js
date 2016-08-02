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
  (...params) => _.map(params_.slice(0, -2), fruit => fruit()),
  fruits
  );

const on = (func) => {
  flyd.on(func, combinedFruits);
};

const rollFruit = (fruit) => {
  setTimeout(
    () => {
      const color = colors[random(13)];
      const icon = icons[random(14)];
      const id = fruit().id;
      fruit({ color, icon, id });
      if (icon !== 'paper-plane')
        rollFruit(fruit);
    },
    200
  );
};

const rollFruits = () => { 
  return _.forEach(fruits, rollFruit); 
};

const checkIcon = (fruit) => { 
  return fruit === 'paper-plane' ? true : false;
};

const endsStream = (fruit) => {
  if (checkIcon(fruit))
    fruit.end(true);
}

const endsAllStreams = flyd.combine(
  (...params) => _.map(params_.slice(0, -2), fruit => endsStream(fruit)),
  fruits
);

const killer = flyd.stream();

const onEnd = () => {
  console.log('onEnd');
  flyd.endsOn(flyd.merge(endsStream.end, killer), endsStream);
}
export default { on, rollFruits, onEnd };














