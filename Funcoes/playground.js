const alunos = [
    {
        nome:'Maria',
        nota: 5,
        turma: '18',
    },
    {
        nome:'Mirima',
        nota: 10,
        turma: '18',
    },
    {
        nome:'Malu',
        nota: 8,
        turma: '18',
    },
    {
        nome:'Maria',
        nota: 4,
        turma: '18',
    },
];


function alunosAprovados(arr, media){
    let aprovados = [];

    for(let i = 0; i < arr.length; i++){

        const {nota, nome} = arr[i];

        if(nota >= media){
            aprovados.push(nome);
        }
    }
    return aprovados;
}

console.log(alunosAprovados(alunos,5));
