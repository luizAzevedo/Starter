const usuario = {
  nome: 'Luiz',
  idade: 55,
  endereco: {
    cidade: 'São Paulo',
    estado: 'SP',
  },
};


// REST: pede para pegar o resto das propriedades.

const { nome, ...resto } = usuario;

console.log(nome);
console.log(resto);

const arr1 = [1, 2, 3, 4, 5];

const [a, b, ...c] = arr1;

console.log(a);
console.log(b);
console.log(c);

function Sum(a, b, ...params) {
  const result = params.reduce((total, next) => total + next);
  return a + b + result;
}

console.log(Sum(1, 3, 4, 6, 7, 8, 4, 9, 9, 9));


// SPREAD:
// faz o papel de propagar, repassar as informações de algum objeto
// ou array para outra estrutura de dados.


const arrA = [1, 3, 4, 5];
const arrB = [6, 7, 8, 9];

const arrC = [...arrA, ...arrB];

console.log(arrC);

const usuario2 = { ...usuario, nome: 'Luiz Azevedo' };

console.log(usuario2);

console.log(`Meu nome é ${usuario2.nome}, minha idade é ${usuario2.idade}`);

// const {
//   nome,
//   idade,
//   endereco: { cidade },
// } = usuario;

// console.log(nome);
// console.log(idade);
// console.log(cidade);

// function mostraNome({ nome, idade }) {
//   console.log(nome, idade);
// }

// mostraNome(usuario);

const arr = [1, 3, 4, 5, 8, 10];

const newArr = arr.map((item, index) => {
  return item + index;
});

console.log(newArr);

const sum = arr.reduce((total, next) => {
  return total + next;
});

console.log(sum);

const filter = arr.filter((item) => item % 2 === 0);

console.log(filter);

const find = arr.find((item) => {
  return item === 4;
});

console.log(find);

const teste = () => ({ nome: 'Luiz' });

console.log(teste());

function soma(a = 3, b = 6) {
  return a + b;
}

console.log(soma(1));
console.log(soma());

const soma1 = (a = 3, b = 6) => a + b;

console.log(soma1(1));
console.log(soma1());

class Matematica {
  static soma(a, b) {
    return a + b;
  }
}

console.log(Matematica.soma(1, 4));

class List {
  constructor() {
    this.data = [];
  }

  add(data) {
    this.data.push(data);
    console.log(data);
  }
}

class TodoList extends List {
  constructor() {
    super();

    this.usuario = 'Teste';
  }

  mostraUsuario() {
    console.log(this.usuario);
  }
}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function () {
  MinhaLista.add('Novo todo');
};

MinhaLista.mostraUsuario();
