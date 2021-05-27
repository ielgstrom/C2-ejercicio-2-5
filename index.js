function esItaliano(apellido){
if (apellido.charAt(apellido.length-1)==="i"){
return "Este apellido tiene muchas probabilidades de ser italiano";
}
else{
    return "Este apellido podría ser de cualquier país";

}
}
const Apellido1="Rigobertti";
const Apellido2="Gonzalo";
console.log(`${Apellido1}: ${esItaliano(Apellido1)}`)
console.log(`${Apellido2}: ${esItaliano(Apellido2)}`)
