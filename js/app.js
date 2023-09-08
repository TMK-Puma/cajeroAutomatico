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
            function verSaldo(e){
                e.preventDefault();
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
            function dineroNuevo(e){
                e.preventDefault();
                if( ingresarDineroNuevo2 >= 990 ){
                    console.log('no puede ingresar mas de 1000 pesos')
                    alert('No puede ingresar demasiado dinero')
                }else{
                    for( i = 0; i < cuentas.length; i++ ){
                            if( cuentas[i].nombre === nombre && cuentas[i].pass == password ){
                                const dineroActualizado = cuentas[i].saldo + ingresarDineroNuevo2;
                                //Mostrar en pantalla nuevo monto
                                const mostrarDineroActualizado = document.querySelector('.mostrar-NuevoMonto')
                                mostrarDineroActualizado.addEventListener('click', mostrarDineroActual)
                                function mostrarDineroActual(){
                                    console.log(dineroActualizado)
                                    const escribirDineroIngresado = document.querySelector('.consultar-NuevoSaldo');
                                    escribirDineroIngresado.innerHTML = `El dinero que retiro es de: ${dineroActualizado}`

                                // if( dineroActualizado >= 990 ){
                                //     console.log(' no puedes ingresar demasiado dinero')
                                // }else{

                                // }

                            }

                        }
                    } 
                }
            }
            
        }
    }
}









// Retirar Monto


const submintRetirar = document.querySelector('.enviar-retirar');
submintRetirar.addEventListener('click', RetirarMonto);
function RetirarMonto(e){
    e.preventDefault();

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
                        const cambioDeDinero = cuentas[i].saldo - verDineroRetirado;
                        if( cambioDeDinero <= 10 ){
                            console.log('no puedes tener menos de 10 pesos en tu cuenta')
                            alert('No puede tener poco dinero en su cuenta')
                        }else{
                            const nuevoDineroRetirado = document.querySelector('.mostrar-MontoRetirado')
                            nuevoDineroRetirado.addEventListener('click', dineroRetirado)
                            function dineroRetirado(){
                                console.log(cambioDeDinero)
                                const escribirDineroRetirado = document.querySelector('.consultar-MontoRetirado');
                                escribirDineroRetirado.innerHTML = `El dinero que retiro es de: ${cambioDeDinero}`
                            }
                            
                        }
                    }
                }
            }
        }
    }    
}


















