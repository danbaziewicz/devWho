class UserLoginController {
    reqLoginOk() {
        const loginOk = new UserLoginView();
        loginOk.imprimeLoginOk();
    }

    reqLoginEmailInvalido() {
        const loginEmailInv = new UserLoginView();
        loginEmailInv.imrprimeEmailInvalido();
    }

    reqLoginSenhaInvalida() {
        const senhaInv = new UserLoginView();
        senhaInv.imprimeSenhaInvalida();
    }
}

$('#btn-entrar').click((e) => {
    e.preventDefault();
    const verifica = new UserLogin();
    verifica.verificaCampos();
})

$('#btn-fb').click((e) => {
    e.preventDefault();
    const logar = new UserLoginController();
    logar.reqLoginOk();
})

$('#btn-google').click((e) => {
    e.preventDefault();
    const logar = new UserLoginController();
    logar.reqLoginOk();
})