var cuentas = [
    {nombre: 'Luis', saldo: 200, pass: 111},
    {nombre: 'Alberto', saldo: 400, pass: 222},
    {nombre: 'bruno', saldo: 300, pass: 333}
]

const submit = document.querySelector('.enviar'); 
submit.addEventListener('click', validar)

function validar(e){
    e.preventDefault()

    var nombre = document.querySelector('.nombre').value;
    var password = document.querySelector('.password').value;


    for( i = 0; i < cuentas.length; i++ ){
        if( cuentas[i].nombre === nombre && cuentas[i].pass == password ){
            console.log(`Bienvenido ${cuentas[i].nombre}`)

            const verSaldoActual = document.querySelector('.boton-Saldo');
            verSaldoActual.addEventListener('click', verSaldo);
            function verSaldo(){
                for( i = 0; i < cuentas.length; i++ ){
                    if( cuentas[i].nombre === nombre && cuentas[i].pass == password ){
                        console.log(`Tu saldo es de ${cuentas[i].saldo}`)
                    }
                }
            }
        }




    }    
}


// Ingresar Monto

const enviarDinero = document.querySelector('.enviar-dinero');
enviarDinero.addEventListener('click', sumarDineroEnviado);
function sumarDineroEnviado(e){
    e.preventDefault()
    var nombre = document.querySelector('.nombre').value;
    var password = document.querySelector('.password').value;

    for( i = 0; i < cuentas.length; i++ ){
        if( cuentas[i].nombre === nombre && cuentas[i].pass == password ){

            const ingresarDineroNuevo = document.querySelector('.ingresar-dinero');
            var ingresarDineroNuevo2 = Number(document.querySelector('.ingresar-dinero').value);
            ingresarDineroNuevo.addEventListener('blur', dineroNuevo)
            function dineroNuevo(){
                for( i = 0; i < cuentas.length; i++ ){
                    if( cuentas[i].nombre === nombre && cuentas[i].pass == password ){
                        const dineroActualizado = ingresarDineroNuevo2 + cuentas[i].saldo;
                        console.log(dineroActualizado)
                    }
                }

            }
            
        }
    }
}


// Retirar Monto


const submintRetirar = document.querySelector('.enviar-retirar');
submintRetirar.addEventListener('click', RetirarMonto);
function RetirarMonto(){
    var nombre = document.querySelector('.nombre').value;
    var password = document.querySelector('.password').value;
    for( i = 0; i < cuentas.length; i++ ){
        if( cuentas[i].nombre === nombre && cuentas[i].pass == password ){
            const retirarDinero = document.querySelector('.retirar-dinero');
            var verDineroRetirado = document.querySelector('.retirar-dinero').value;
            retirarDinero.addEventListener('blur', inputRetirar);
            function inputRetirar(){
                for( i = 0; i < cuentas.length; i++ ){
                    if( cuentas[i].nombre === nombre && cuentas[i].pass == password ){
                        const dineroRetirado = verDineroRetirado + cuentas[i].saldo;
                        console.log(dineroRetirado)
                    }
                }
            }
        }
    }    
}
















