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
            const request = new XMLHttpRequest();
            request.addEventListener('load',() => {
                if(request.responseText != "{\n  \"erro\": \"true\"\n}") {
                    const objCep = this.processaResponse(request.responseText);
                    this.filtraDados(objCep);
                    const limpa = new ControllerCadastro();
                    limpa.erroLimpa();
                } else {
                    const erro = new ControllerCadastro();
                    erro.imprimeErro();
                }
            })
            request.open('GET', `https://viacep.com.br/ws/${cepUser}/json/`, false);
            request.send();
        } else {
            const erro = new ControllerCadastro();
            erro.imprimeErro();
        }
    }

    processaResponse(responseString){
        const objCep = JSON.parse(responseString)
        return objCep;
    }

    validaCep() {
        const cepUser = $('#inputCEP').val();
        if(cepUser != '') {
            const validaCep = /^[0-9]{8}$/;
            if(validaCep.test(cepUser)) {
                return true;
            }
        }
    }

    filtraDados(request) {
        this.cep = request.cep;
        this.rua = request.logradouro;
        this.bairro = request.bairro;
        this.localidade = request.localidade;
        this.uf = request.uf;
    }

    getCep() {
        return this.cep;
    }
    
    getEstado() {
        return this.uf;
    }
    
    getCidade() {
        return this.localidade;
    }
    
    getBairro() {
        return this.bairro;
    }
    
    getRua() {
        return this.rua;
    }
}
