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