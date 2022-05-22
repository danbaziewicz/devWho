class ControllerCadastro {
    adicionaCep() {
        const dadosModel = new ModelViaCep();
        dadosModel.requisicaoApi();
        console.log(`entrei na controller ${dadosModel.getRua()}`)

        const view = new ViewFormulario();
        view.imprime(dadosModel);
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