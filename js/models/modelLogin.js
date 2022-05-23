class ModelLogin {
    constructor() {
        this.email = '';
        this.senha = '';
    }

    getEmail() {
        this.email = $('#InputEmailLogin').val();
    }

    getSenha() {
        this.senha = $('#InputPassword').val();
    }
}