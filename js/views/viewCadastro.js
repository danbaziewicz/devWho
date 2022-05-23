class ViewFormulario {

    imprime(dadosModel) {
        $('#inputEndereco').val(dadosModel.getRua());
        $('#inputBairro').val(dadosModel.getBairro());
        $('#inputCidade').val(dadosModel.getCidade());
        $('#inputEstado').val(dadosModel.getEstado());
    }

    imprimeErro() {
        $('#campoErro').text('CEP inválido. Digite apenas números.').css('color', 'red');
    }

    limpaErro() {
        $('#campoErro').empty();
    }

    imprimeEmailValido() {
        $('#textVerificaEmail').text('Email válido.').css('color', 'green');
    }

    imprimeEmailInvalido() {
        $('#textVerificaEmail').text('Por favor, digite um Email válido.').css('color', 'red');
    }

    imprimeSenhaValida() {
        $('#textoSenha').text('Senha válida, repita a senha').css('color', 'green');
    }

    imprimeSenhaInvalida() {
        $('#textoSenha').text('A senha deve conter no mínimo 8 caracteres incluindo números, letras e caracteres especiais').css('color', 'red');
    }

    imprimeConfirmacaoOk() {
        $('#textoConfirma').text('Senhas conferem').css('color', 'green');
    }

    imprimeSenhasDivergentes() {
        $('#textoConfirma').text('As senhas não conferem, tente novamente').css('color', 'red');
    }

}