function msg(){
    alert("Ola Mundo!");
}

function calcular(){
   let a = parseFloat(document.getElementById("valor1").value);
   let b = parseFloat(document.getElementById("valor2").value);

   document.getElementById("resultado").value = a+b

}