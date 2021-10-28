function CalculaIdade (anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${
        this.idade + anos
    } anos de idade.`;
};

const pessoal = {
    nome: "MAria",
    idade: 30,
};


const pessoa2 = {
    nome: "Julia",
    idade: 20,
};


const animal = {
    nome: "bob",
    idade: 2,
    raca: "Viralata", 
};

console.log(CalculaIdade(pessoal, 30));

