$('#inputCEP').keydown((event) => {
    if (event.which == 9) {
        const valoresCep = new ModelViaCep()
        valoresCep.requisicaoApi();
    }
})

$('#inputCEP').blur((event) => {
    if (event.which == 9) {
        const valoresCep = new ModelViaCep()
        valoresCep.requisicaoApi();
    }
})

