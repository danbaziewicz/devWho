class ControllerCadastro {
    adicionaCep() {
        const dadosModel = new ModelViaCep()
        dadosModel.requisicaoApi()
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