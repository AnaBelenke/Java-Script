function Getadmins(map){
    let admins = [];
    for([key, value] of map){
        if(value === 'admin') {
            admins,push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('luiz', 'admin');
usuarios.set('Jorge', 'admin');
usuarios.set('Ana', 'User');
usuarios.set('João', 'admin');

console.log(Getadmins(usuarios));
