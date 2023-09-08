let cunetas = [
    {nombre:'Carlos' ,saldo: 400, pass: 111},
    {nombre: 'Alberto' ,saldo: 500, pass: 222},
    {nombre: 'Maria' ,saldo: 300, pass: 333}
]

const userName = document.getElementById('userName')
const userSaldo = document.getElementById('userSaldo')
const btnShow = document.getElementById('btn')


function mostrarInfo(){
    for( i = 0; i < cunetas.length; i++){
        const elemnt = cunetas[i].nombre;
        if( cunetas[i].nombre == "Maria"){
            userName.innerHTML += elemnt
        }
    }
}

btnShow.addEventListener('click', mostrarInfo);