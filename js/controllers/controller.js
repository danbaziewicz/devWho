class ControllerCadastro {
    adicionaCep() {
        const dadosModel = new ModelViaCep();
        dadosModel.requisicaoApi();

        //TIRAR
        console.log(`entrei na controller ${dadosModel.getRua()}`)

        const view = new ViewFormulario();
        view.imprime(dadosModel);
    }

    erroLimpa() {
        const view = new ViewFormulario();
        view.limpaErro();
    }
        
    imprimeErro() {
        if($('#inputCEP').val() !== ''){
        const erro = new ViewFormulario();
        erro.imprimeErro();
        }
    }

    emailValida() {
        const valida = new Validacao();
        valida.validaEmail();
    }

    imprimeStatusOk(){
        const view = new ViewFormulario();
        view.imprimeEmailValido();
    }

    imprimeStatusInvalido() {
        const view = new ViewFormulario();
        view.imprimeEmailInvalido();
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