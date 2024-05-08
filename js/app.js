class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
        })
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);

        this.navLinks.forEach((link) => {
            link.addEventListener("click", () => {
                this.navList.classList.remove(this.activeClass);
                this.mobileMenu.classList.remove(this.activeClass);
                this.navLinks.forEach((link) => {
                    link.style.animation = "";
                });
            });
        });
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".menu-list",
    ".menu-list li",
);

mobileNavbar.init()



// FORM EMAIL

document.querySelector('form').addEventListener('submit', function (event) {
    var confirmation = confirm('Você realmente deseja enviar o email?');
    if (!confirmation) {
        event.preventDefault();
    } else {
        alert('Seu email foi enviado com sucesso, entrarei em contato em breve.');
    }
});


// FIX DRAG BUTTONS

var buttons = document.querySelectorAll('button');
buttons.forEach(function(button) {
    button.addEventListener('mousedown', function(event) {
        event.preventDefault();
    });
});
