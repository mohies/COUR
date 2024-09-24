/*function absoluto(){
    var n = prompt("Introudce num");
    while(isNaN(n)){
         n = prompt("Introudce num valido");
    } 
    if(n>0 || n <0 ){
    alert(Math.abs(n));

   }
}

absoluto();


    function inverso(){
        var n = prompt("Introduce numero")

        if (n===0){
            alert("Error por el 0")
        }else{
            alert("El resultado del inverso es 1/"+n+" "+1/n);
        }

    }
    inverso()



    function tiempo(){
        var fech= new Date();
        var horas=fech.getHours();
        var minutos = fech.getMinutes();

        if((horas> 7 && minutos > 30) && (horas<14 )){
            alert("Buenos dias")
        }else if((horas> 14 && minutos > 1) && (horas<20 && minutos<30 )){
            alert("Buenos tardes")
        }else{
            alert("Buenas Noches")
        }

    
    }

    tiempo();


function bisiesto(){
    var ano = prompt("Introduce un año");

    if((ano % 400 === 0) || (ano % 4 == 0 && ano % 100 !==0)){
        alert("El año es bisiesto")
    }else{
        alert("no es bisiesto")
    }
}

bisiesto()



function determinarCuadrante() {
    var x = parseFloat(prompt("Introduce la coordenada X:"));
    var y = parseFloat(prompt("Introduce la coordenada Y:"));

   if (x === 0 && y === 0) {
        alert("El punto está en el origen.");
    } else if (x === 0) {
        alert("El punto está sobre el eje Y.");
    } else if (y === 0) {
        alert("El punto está sobre el eje X.");
    } else if (x > 0 && y > 0) {
        alert("El punto está en el primer cuadrante.");
    } else if (x < 0 && y > 0) {
        alert("El punto está en el segundo cuadrante.");
    } else if (x < 0 && y < 0) {
        alert("El punto está en el tercer cuadrante.");
    } else if (x > 0 && y < 0) {
        alert("El punto está en el cuarto cuadrante.");
    }
}


determinarCuadrante();



function cambio(){

    var precio = parseFloat(prompt("introduce precio del producto"));
    var cantidad= parseFloat(prompt("Introduce la cantidad que quieres dar para pagar"));
        var monedas=[0.01,0.05,0.10,0.20,0.5,1,2,5,10,20,50,100,200];
    while(cantidad < precio){
        var cantidad= prompt("No puedes pagar menos")
    }
    var resultado= parseFloat((cantidad - parseFloat(precio)));

    monedas.forEach(element => {
        if(resultado % element ===0){
            alert("La vuelta es " + element)
        }
        
    });
    
}

cambio()



function naturales(){
    var n = prompt("introduce un numero")
    var suma=0;
    for(i=0;i<=n;i++){
        var cuadrado = i**2;
        alert("El cuadrado del numero "+ i+ " es "+cuadrado);
        var cubo=i**3;
        alert("El cuadrado del numero "+ i + " es "+cubo);
        suma=suma+i;
        
            
        
    }
    alert("La suma de todos es " + suma);
}

naturales()
*/

function cambio2(){

   var dinero= parseFloat(prompt("Introduce el dinero euros que quieres cambiar"));
   var opcion= parseInt(prompt("Introduce que opcion quieres cambiar 1=dolares/2=Libras/3=Yenes/4=Franco Suizo/5=Corona Noruega"));

   switch(opcion){
    case 1:
        var dolares = dinero * 1.12;
        alert("AQUI TIENES EL CAMBIO A DOLARES " + parseFloat(dolares));
        break;
   
    case 2:
        var libras = dinero * 0.84;
        alert("AQUI TIENES EL CAMBIO A libras " + libras);
        break;
   
    case 3:
        var yenes = dinero * 160.71;
        alert("AQUI TIENES EL CAMBIO A YENES " + yenes);
        break;
   
    case 4:
        var franco = dinero * 0.95;
        alert("AQUI TIENES EL CAMBIO A franco suizo " + franco);
        break;
   5
    case 5:
        var corona = dinero * 11.71;
        alert("AQUI TIENES EL CAMBIO A DOLARES " + corona);
        break;
   
    default:
         alert("No esta disponible este tipo de cambio");
}
}

cambio2();