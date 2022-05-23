class Validacao {
    constructor() {
        this.email = '';
        this.senha = '';
        this.confirmaSenha = '';
    }

    validaEmail() {
        const emailReq= /^.+@.+\..{2,}$/;
		const proibidoUso = /[\(\)\<\>\,\;\:\\\/\"\[\]]/;
        this.getEmail();
        if(!(emailReq.test(this.email)) || this.email.match(proibidoUso)){
            const reqImprime = new ControllerCadastro();
            reqImprime.imprimeStatusInvalido();

        } else {
            const reqImprime = new ControllerCadastro();
            reqImprime.imprimeStatusOk();
        }
    }

    getEmail() {
        this.email = $('#inputEmail4').val();
    }

    getSenha() {
        this.senha = $('#inputPassword4').val();
    }

    getConfirmacaoSenha() {
        this.confirmaSenha = $('##inputConfirmPassword4')
    }

    //#inputPassword4 #inputConfirmPassword4
}