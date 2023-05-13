function TestCNH () {
    let idade_1 = document.formulario.elements["idade"].value;
            if(idade_1 < 18) {
                alert("Você não pode tirar CNH!");
        }  
            else if(idade_1 >= 18 && idade_1 < 95){
                alert("Você pode tirar CNH!");
        }
            else if(idade_1 > 94){
                alert("Você não pode tirar CNH!");
        }
};