class ControllerCadastro {
    adicionaCep() {
        const dadosModel = new ModelViaCep();
        dadosModel.requisicaoApi();
        const view = new ViewFormulario();
        view.imprime(dadosModel);
    }

    erroLimpa() {
        const view = new ViewFormulario();
        view.limpaErro();
    }

    imprimeErro() {
        if ($('#inputCEP').val() !== '') {
            const erro = new ViewFormulario();
            erro.imprimeErro();
        }
    }

    emailValida() {
        const valida = new Validacao();
        valida.validaEmail();
    }

    imprimeStatusOk() {
        const view = new ViewFormulario();
        view.imprimeEmailValido();
    }

    imprimeStatusInvalido() {
        const view = new ViewFormulario();
        view.imprimeEmailInvalido();
    }

    senhaValida() {
        const validando = new Validacao();
        validando.validaSenha();
    }

    imprimeSenhaOk() {
        const senhaOk = new ViewFormulario();
        senhaOk.imprimeSenhaValida();
    }

    imprimeSenhaErrada() {
        const senhaErrada = new ViewFormulario();
        senhaErrada.imprimeSenhaInvalida();
    }

    validaConfirmacao() {
        const validacao = new Validacao();
        validacao.comparaSenhas();
    }

    imprimeConfirmOk() {
        const confirmacaoOk = new ViewFormulario();
        confirmacaoOk.imprimeConfirmacaoOk();
    }

    imrpimeConfirmDiv() {
        const confirmDiv = new ViewFormulario();
        confirmDiv.imprimeSenhasDivergentes();
    }
}

$('#inputCEP').keydown((event) => {
    if (event.which == 9) {
        const dados = new ControllerCadastro()
        dados.adicionaCep()
    }
})

$('#inputCEP').blur(() => {
    const dados = new ControllerCadastro()
    dados.adicionaCep()
})

$('#inputEmail4').blur(() => {
    const email = new ControllerCadastro()
    email.emailValida();
})

$('#inputEmail4').keydown((event) => {
    if (event.which == 9) {
        const email = new ControllerCadastro()
        email.emailValida();
    }
})

$('#inputPassword4').blur(() => {
    const valida = new ControllerCadastro()
    valida.senhaValida();
})

$('#inputPassword4').keydown((event) => {
    if (event.which == 9) {
        const valida = new ControllerCadastro()
        valida.senhaValida();
    }
})

$('#inputConfirmPassword4').blur(() => {
    const valida = new ControllerCadastro()
    valida.validaConfirmacao();
})

$('#inputConfirmPassword4').keydown((event) => {
    if (event.which == 9) {
        const valida = new ControllerCadastro()
        valida.validaConfirmacao();
    }
})