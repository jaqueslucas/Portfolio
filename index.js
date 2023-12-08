let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', () => {
    menu.classList.add('active')
})

menu.addEventListener('click', () => {
    menu.classList.remove('active')
})

overlay.addEventListener('click', () => {    
    menu.classList.remove('active')
})

class FormSubmit {
    constructor(settings) {
        this.settings = settings
        this.form = document.querySelector(settings.form)
        this.btnSubmit = document.querySelector(settings.btnSubmit)
        if (this.form) {
            this.url = this.form.getAttribute('action')
        }
    }

    dislaySucess() {
       this.form.innerHTML = this.settings.success;
    }
    displayError() {
        this.form.innerHTML = this.settings.error;
    }

    init() {
        if (this.form) this.formButton.addEventListener('click', () => this.dislaySucess())
        return this;
    }
}

const formSubmit = new FormSubmit({
    form: "[data-form]",
    btnSubmit: "[data-button]",
    success: "<h1>Message Send Sucessfully</h1>",
    error: "<h1>Message Send Error</h1>"
});