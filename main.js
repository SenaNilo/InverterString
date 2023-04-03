var foo = prompt("Digite uma palavra para invertê-la: ");
var cutFoo = foo.split("");
var resp = "";
for (var i = (cutFoo.length-1); i >= 0; i--){
    // alert(cutFoo[i]);
    if(i == (cutFoo.length-1)){
        resp = cutFoo[i];
    }else{
        resp = resp + cutFoo[i];
    }
}
alert(resp);