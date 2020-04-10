const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const idades = usuarios.map((usuario) => usuario.idade);
console.log(idades);

const filtro = usuarios.filter((usuario) => {
  return usuario.empresa === 'Rocketseat' && usuario.idade > 18;
});

console.log(filtro);

const found = usuarios.find((usuario) => {
  return usuario.empresa === 'Goggle';
});
console.log(found);

const max50 = usuarios
  .map((usuario) => ({ ...usuario, idade: usuario.idade * 2 }))
  .filter((usuario) => usuario.idade <= 50);
console.log(max50);
