import starships from './starships.json';

export const Starships = {
  find: () => Promise.resolve(starships),
};
