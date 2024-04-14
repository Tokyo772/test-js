const names = ['alice', 'kate', 'emma'];

const keys = {
  names: 'Array of names',
};
localStorage.setItem(keys.names, JSON.stringify(names));

console.log(JSON.parse(localStorage.getItem(keys.names)));
