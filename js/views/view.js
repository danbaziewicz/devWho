class ViewFormulario{
    //obj recebido da controller e passado para a view em 'dadosModel'
    //dadosModel acessa os getters para devolver esses valores na tela.

    imprime(dadosModel){
        $('#inputEndereco').val(dadosModel.getRua());
        $('#inputBairro').val(dadosModel.getBairro());
        $('#inputCidade').val(dadosModel.getCidade());
        $('#inputEstado').val(dadosModel.getEstado());
    }

    imprimeErro(){
        $('#campoErro').text('CEP inválido. Digite apenas números.')
    }

    limpaErro() {
        $('#campoErro').empty();
    }

    imprimeEmailValido() {
        $('#textVerificaEmail').text('Email válido.')
    }

    imprimeEmailInvalido () {
        $('#textVerificaEmail').text('Por favor, digite um Email válido.')
    }
}