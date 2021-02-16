function testaIdade(){
    let idade;
    let genFem;
    let genMas;
    let mensagem;

    idade = document.getElementById("idIdade").value; 

    genFem = document.getElementById("idFem").checked; 
    genMas = document.getElementById("idMas").checked; 

    if (genFem) {
        if (idade >= 55) {
            mensagem = "Pode se Aposentar"
        }else{
            mensagem = "Não pode se Aposentar"
        }
    } else {
        if (idade >= 65) {
            mensagem = "Pode se Aposentar"
        }else{
            mensagem = "Não pode se Aposentar"
        }       
    }




    document.getElementById("idOut").value = mensagem; 


}