let pin = 7490
let password= "ahm"
let i = 0
let j = 0
let k = 0
let x = Math.ceil(Math.random()*100000);

alert("BIENVENIDO AL CODER-CAJERO" + "\n"  + "\n" + "¡REALICE SU CONSULTA DE SALDO!")

do {

    pinUser = parseInt(prompt("Ingrese su Pin"))

    if(pinUser != pin){

        i++

    }else{
        do {

            passwordUser = prompt("Ingrese su clave de 3 digitos")

        if(passwordUser != password){

            j++

        }else{
            alert("Bienvenido su monto disponible es de: " + " " + "$" + x)
            k++
            break
            
        }
        } while (j!=3);
    }
    
} while (i!=3 && j!=3 && k!=1);

if(i==3){
    alert("Operacion finalizada, Error al ingresar su Pin. CUENTA BLOQUEADA")
}

if(j==3){
    alert("Operacion finalizada, Error al ingresar su Contraseña. CUENTA BLOQUEADA")
}

if(i!=3 && j!=3){

    alert("Operacion Finalizada, VUELVA PRONTOS")

}