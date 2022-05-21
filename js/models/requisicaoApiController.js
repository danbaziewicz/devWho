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
            $.ajax({
                url: `https://viacep.com.br/ws/${cepUser}/json/?callback=callback_name`,
                success: function (objCep) {
                    filtraDados(objCep)
                    console.log(objCep)
                },
                error: function (erro) {
                    //CRIAR FUNÇÃO PARA TRATAR E DEVOLVER ERROS
                }
            })
        } else {
            //criar método para devolver mensagem de cep inválido
        }
    }

    validaCep() {
        return cepUser.length == 8 ? true : false;
    }
    
    filtraDados(objCep) {
        this.cep = objCep.cep;
        this.rua = objCep.logradouro;
        this.bairro = objCep.bairro;
        this.localidade = objCep.localidade;
        this.uf = objCep.uf;
    }

}