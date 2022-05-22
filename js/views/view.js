class ViewFormulario{
    //tentar implemtnar essa funcionalidade com empty()
    limpaForm() {
        $('#inputCEP').val("");
        $('#inputEndereco').val("");
        $('#inputBairro').val("");
        $('#inputCidade').val("");
        $('#inputEstado').val("");
    }

    //obj recebido da controller e passado para a view em 'dadosModel'
    //dadosModel acessa os getters para devolver esses valores na tela.

    imprime(dadosModel){
        $('#inputEndereco').val(dadosModel.getRua());
        $('#inputBairro').val(dadosModel.getBairro());
        $('#inputCidade').val(dadosModel.getCidade());
        $('#inputEstado').val(dadosModel.getEstado());
    }
}