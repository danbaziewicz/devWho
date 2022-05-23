class Validacao {
    constructor() {
        this.email = '';
        this.senha = '';
        this.confirmaSenha = '';
    }

    validaEmail() {
        const emailReq = /^.+@.+\..{2,}$/;
        const proibidoUso = /[\(\)\<\>\,\;\:\\\/\"\[\]]/;
        this.getEmail();
        if (!(emailReq.test(this.email)) || this.email.match(proibidoUso)) {
            const reqImprime = new ControllerCadastro();
            reqImprime.imprimeStatusInvalido();

        } else {
            const reqImprime = new ControllerCadastro();
            reqImprime.imprimeStatusOk();
        }
    }

    validaSenha() {
        this.getSenha();
        if (this.senha == "") {
            const reqErro = new ControllerCadastro();
            reqErro.imprimeSenhaErrada();
        } else {
            const numeral = /([0-9])/;
            const letras = /([a-zA-Z])/;
            const simbolos = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/;
            if (this.senha.length < 8) {
                const reqErro = new ControllerCadastro();
                reqErro.imprimeSenhaErrada();
            } else if (this.senha.match(numeral) && this.senha.match(letras) && this.senha.match(simbolos)) {
                const reqSenhaOk = new ControllerCadastro();
                reqSenhaOk.imprimeSenhaOk();
            } else {
                const reqErro = new ControllerCadastro();
                reqErro.imprimeSenhaErrada();
            }
        }
    }

    comparaSenhas() {
        this.getSenha();
        this.getConfirmacaoSenha();
        if (this.senha == this.confirmaSenha) {
            const reqOk = new ControllerCadastro();
            reqOk.imprimeConfirmOk();
        } else {
            const reqDiv = new ControllerCadastro();
            reqDiv.imrpimeConfirmDiv();
        }
    }

    getEmail() {
        this.email = $('#inputEmail4').val();
    }

    getSenha() {
        this.senha = $('#inputPassword4').val();
    }

    getConfirmacaoSenha() {
        this.confirmaSenha = $('#inputConfirmPassword4').val();
    }
}