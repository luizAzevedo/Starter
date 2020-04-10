class Usuario {
  constructor(email, senha) {
    this.email = email;
    this.senha = senha;
  }
  isAdmin() {
    return this.admin === true;
  }
}

class Admin extends Usuario {
  constructor(email, senha) {
    super(email, senha);
    this.admin = true;
  }    
}

const user1 = new Usuario('email@teste', 'senha123');
const admin1 = new Admin('email@teste', 'senha123');

console.log(user1.isAdmin());
console.log(admin1.isAdmin());

