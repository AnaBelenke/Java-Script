function validaArray(arr, num) {

    try {
        if (!arr && !num) throw new ReferenceError("Envie os parâmentros");

        if (typeof arr !== 'object') throw new TypeError("O Array precisa ser do tipo object");

        if (typeof num !== 'number') throw new TypeError("O num precisa ser do tipo numero");

        if (arr.length !== num) throw new RangeError("Tamanho inválido");
    }
    catch (e) {
        if (e instanceof ReferenceError) {
            console.log("Este erro é um referenceErrir!");
            console.log(e.message);
        } else if (e instanceof ReferenceError) {
            console.log("Este erro é um referenceErrir!");
            console.log(e.message);
        } else if (e instanceof ReferenceError) {
            console.log("Este erro é um referenceErrir!");
            console.log(e.message);
        } else {
            console.log ("Ocorreu tipo de erro não esperado:" + e);
        }
    }
}

console.log(validaArray());
