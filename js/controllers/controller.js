class ControllerCadastro {
    adicionaCep() {
        const dadosModel = new ModelViaCep();
        dadosModel.requisicaoApi();
        console.log(`entrei na controller ${dadosModel.getRua()}`)

        //isolar em outro método
        //pensar na comunicação com model.
        const view = new ViewFormulario();
        view.imprime(dadosModel);

    }
    
    imprimeErro() {
        const erro = new ViewFormulario();
        erro.imprimeErro();
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