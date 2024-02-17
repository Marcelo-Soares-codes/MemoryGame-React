const mock = [
  { id: 1, img: 'Angular.png', type: 'Angular', equal: false, flip: false },
  { id: 2, img: 'Angular.png', type: 'Angular', equal: false, flip: false },
  { id: 3, img: 'Nest.png', type: 'Nest', equal: false, flip: false },
  { id: 4, img: 'Nest.png', type: 'Nest', equal: false, flip: false },
  { id: 5, img: 'Vue.png', type: 'Vue', equal: false, flip: false },
  { id: 6, img: 'Vue.png', type: 'Vue', equal: false, flip: false },
  { id: 7, img: 'BootStrap.png', type: 'BootStrap', equal: false, flip: false },
  { id: 8, img: 'BootStrap.png', type: 'BootStrap', equal: false, flip: false },
  { id: 9, img: 'Laravel.png', type: 'Laravel', equal: false, flip: false },
  { id: 10, img: 'Laravel.png', type: 'Laravel', equal: false, flip: false },
  { id: 11, img: 'HTML.png', type: 'HTML', equal: false, flip: false },
  { id: 12, img: 'HTML.png', type: 'HTML', equal: false, flip: false },
  { id: 13, img: 'React.png', type: 'React', equal: false, flip: false },
  { id: 14, img: 'React.png', type: 'React', equal: false, flip: false },
  {
    id: 15,
    img: 'JavaScript.png',
    type: 'JavaScript',
    equal: false,
    flip: false,
  },
  {
    id: 16,
    img: 'JavaScript.png',
    type: 'JavaScript',
    equal: false,
    flip: false,
  },
];

export const Data = () => {
  for (let i = mock.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Escolhe um índice aleatório entre 0 e i
    [mock[i], mock[j]] = [mock[j], mock[i]]; // Troca os elementos de posição
  }
  return mock;
};
