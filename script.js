const angka = document.querySelector(".angka");
const operasi = document.querySelector(".operasi");
const layar = document.querySelector(".layar");
const samaDengan = document.querySelector(".samadengan");

    let angka1, op , hasil;

angka.addEventListener("click",function(e){

    if(e.target.value == 1){
        layar.value = layar.value+e.target.value;
    }else if(e.target.value == 2){
        layar.value = layar.value+e.target.value;
    }else if(e.target.value == 3){
        layar.value = layar.value+e.target.value;
    }else if(e.target.value == 4){
        layar.value = layar.value+e.target.value;
    }else if(e.target.value == 5){
        layar.value = layar.value+e.target.value;
    }else if(e.target.value == 6){
        layar.value = layar.value+e.target.value;
    }else if(e.target.value == 7){
        layar.value = layar.value+e.target.value;
    }else if(e.target.value == 8){
        layar.value = layar.value+e.target.value;
    }else if(e.target.value == 9){
        layar.value = layar.value+e.target.value;
    }else if(e.target.value == 0){
        layar.value = layar.value+e.target.value;
    }else if(e.target.value == "."){
        layar.value = layar.value+e.target.value;
    }else if(e.target.value == "C"){
        layar.value = null  ;
    }
});
operasi.addEventListener("click",function(e){
    angka1 = layar.value;

    if(e.target.value == "+"){
        op = "+";
        layar.value ="";
    }else if(e.target.value == "x"){
        op = "*";
        layar.value ="";
    }else if(e.target.value == "/"){
        op = "/";
        layar.value ="";
    }else if(e.target.value == "-"){
        op = "-";
        layar.value ="";
    }
});
samaDengan.addEventListener("click",function(){

    if(op=="+"){
        layar.value = parseInt(angka1)+parseInt(layar.value);
    }else if(op=="*"){
        layar.value = angka1*layar.value;
    }else if(op=="/"){
        layar.value = angka1/layar.value; 
    }else if(op=="-"){
        layar.value = angka1-layar.value;
    }

});