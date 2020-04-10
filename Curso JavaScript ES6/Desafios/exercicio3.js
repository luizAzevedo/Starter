export const idade = 23;

export default class Usuario {
  static info() {
    console.log('apenas teste');
  }
}


/**
 * Main.js
 * 
 * import ClasseUsuario,{ idade } from '../Desafios/exercicio3';
 * import Usuario, { idade as IdadeUsuario } from '../Desafios/exercicio3'; 
 * 
 * ClasseUsuario.info();
 * 
 * console.log(idade);
 * console.log(Usuario);
 * console.log(IdadeUsuario);
 */