const lista = [
    {
        name: 'sabao em po',
        preco: 30,
    },
    {
        name: 'sabonete',
        preco: 5,
    },
    {
        name: 'toalha',
        preco: 40,
    },
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista) {
    return lista.reduce(function (prev, current) {
        console.log('Rodada ', index + 1);
        console.log({ prev });
        console.log({ current });
        return prev - current.preco;
    }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, lista));

