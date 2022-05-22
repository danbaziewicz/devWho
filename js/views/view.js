class ViewFormulario{
    limpaForm() {
        $('#inputCEP').val("");
        $('#inputEndereco').val("");
        $('#inputBairro').val("");
        $('#inputCidade').val("");
        $('#inputEstado').val("");
    }

    imprime(objCep){
        $('#inputEndereco').val(objCep.logradouro);
        $('#inputBairro').val(objCep.bairro);
        $('#inputCidade').val(objCep.localidade);
        $('#inputEstado').val(objCep.uf);
    }
}