class ModelViaCep {
    constructor() {
        this.cep = '';
        this.rua = '';
        this.bairro = '';
        this.localidade = '';
    }

    requisicaoApi(){
        const cepUser = $('#inputCEP').val();
        if (this.validaCep() == true) {
            const request = new XMLHttpRequest()
            request.addEventListener('load',() => {
                if(request.status == 200) {
                    const objCep = this.processaResponse(request.responseText);
                    this.filtraDados(objCep);
                    //retirar esse console log quando pronto
                    console.log(objCep)
                    //request.status é 200 mesmo quando é inválido.
                    //testar com cep 84500000
                    //retorna erro no console.
                    //como tratar?
                    console.log(request.status)
                    //criar comunicação com a controller para imprimir(?)
                } else{
                    console.log(request.status + "erro")
                    alert('CEP incorreto!')
                }
            })
            request.open('GET', `https://viacep.com.br/ws/${cepUser}/json/`, false);
            request.send();
        } else {
            //cep é inválido.
            //retirar alert -> view
            //alert("Formato de CEP inválido.");
            const erro = new ControllerCadastro();
            erro.imprimeErro();
        }
    }

    processaResponse(responseString){
        const objCep = JSON.parse(responseString)
        return objCep;
    }

    /*
    imprime(objCep){
        $('#inputEndereco').val(objCep.logradouro);
        $('#inputBairro').val(objCep.bairro);
        $('#inputCidade').val(objCep.localidade);
        $('#inputEstado').val(objCep.uf);
    }*/

    validaCep() {
        const cepUser = $('#inputCEP').val();
        if(cepUser != '') {
            const validaCep = /^[0-9]{8}$/;
            if(validaCep.test(cepUser)) {
                return true;
            }
        } else {
            //retirar alert -> view
            //alert("Formato de CEP vazio.");
        }
        
    }

    /*
    limpaForm() {
        $('#inputCEP').val("");
        $('#inputEndereco').val("");
        $('#inputBairro').val("");
        $('#inputCidade').val("");
        $('#inputEstado').val("");
    }*/

    filtraDados(request) {
        this.cep = request.cep;
        this.rua = request.logradouro;
        this.bairro = request.bairro;
        this.localidade = request.localidade;
        this.uf = request.uf;
    }

    getCep() {
        return this.cep
    }
    
    getEstado() {
        return this.uf
    }
    
    getCidade() {
        return this.localidade
    }
    
    getBairro() {
        return this.bairro
    }
    
    getRua() {
        return this.rua
    }
}
