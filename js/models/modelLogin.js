class UserLogin {
    constructor() {
        this.email = '';
        this.senha = '';
    }

    verificaCampos() {
        const checkEmail = this.verificaEmail();
        const checkSenha = this.verificaSenha();
        if (checkEmail == false) {
            const invalido = new UserLoginController();
            invalido.reqLoginEmailInvalido();
        } else if(checkSenha == false) {
            const senhaInvalida = new UserLoginController();
            senhaInvalida.reqLoginSenhaInvalida();
        } else if ((checkEmail) && (checkSenha)) {
            const valido = new UserLoginController();
            valido.reqLoginOk();
        }
    }


    verificaSenha() {
        this.getSenha();
        return this.senha.length >= 8 && this.senha !== '' ? true : false;
    }

    verificaEmail() {
        this.getEmail();
        const emailReq = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return this.email.match(emailReq) ? true : false;
    }

    getEmail() {
        this.email = $('#inputEmailLogin').val();
    }

    getSenha() {
        this.senha = $('#inputPassword').val();
    }
}