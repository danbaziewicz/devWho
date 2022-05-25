class Validacao {
    constructor() {
        this.nome = '';
        this.email = '';
        this.senha = '';
        this.confirmaSenha = '';
        this.rg = '';
        this.cep = '';
        this.endereco = '';
        this.numero = '';
        this.bairro = '';
        this.cidade = '';
        this.estado = '';
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
        if ((this.senha == this.confirmaSenha) && (this.senha != "")) {
            const reqOk = new ControllerCadastro();
            reqOk.imprimeConfirmOk();
        } else {
            const reqDiv = new ControllerCadastro();
            reqDiv.imrpimeConfirmDiv();
        }
    }

    verificaRG() {
        this.getRG();
        return this.rg.length == 9 ? true : false;
    }

    getNome() {
        this.nome = $('#inputNome4').val();
    }
    getCep() {
        this.cep = $('#inputCEP').val();
    }
    getEndereco() {
        this.endereco = $('#inputEndereco').val();
    }
    getNumero() {
        this.numero = $('#inputNumber').val();
    }

    getBairro() {
        this.bairro = $('#inputBairro').val();
    }

    getCidade() {
        this.cidade = $('#inputCidade').val();
    }

    getEstado() {
        this.estado = $('#inputEstado').val();
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

    getRG() {
        this.rg = $('#inputRG').val();
    }


    confirmacao() {
        this.getNome()
        this.getEmail()
        this.getSenha()
        this.getConfirmacaoSenha()
        this.getRG()
        this.getCep()
        this.getEndereco()
        this.getNumero()
        this.getBairro()
        this.getBairro()
        this.getEstado()

        if ((this.nome && this.email !== '') && (this.senha && this.confirmaSenha !== '') && (this.rg && this.cep !== '') && (this.endereco && this.numero !== '') && (this.bairro && this.estado !== '')) {
            return true;
        } else {
            return false;
        }
    }
}