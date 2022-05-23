class UserLoginView {

    imprimeLoginOk() {
        $('#labelEmail').empty();
        $('#emailHelp').empty();
        $('#textLogin').empty();
        $('#inputEmailLogin').hide();
        $('#divSenha').empty();
        $('#mensagemErroLogin').empty();
        $('#esqueciSenha').empty();
        $('#btn-entrar').hide();
        $('#btn-fb').hide();
        $('#btn-google').hide();
        $('#login-success').text(`Login efetuado com sucesso!`);
    }

    imprimeSenhaInvalida() {
        $('#emailHelp').empty();
        $('#mensagemErroLogin').text('Senha incorreta, tente novamente.').css('color', 'red')
    }

    imrprimeEmailInvalido() {
        $('#emailHelp').text('Email inválido, tente novamente.').css('color', 'red');
    }

}