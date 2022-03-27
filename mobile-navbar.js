class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);      //ul busca
      this.navLinks = document.querySelectorAll(navLinks); //todos os li
      this.activeClass = "active"; 
      this.handleClick = this.handleClick.bind(this); 
      /*Quando chamava a callback, this.handleClick, na hora de chamar this.navList.classList.toggle(this.activeClass); o this
      perdia a referencia de MobileNavbar e apontava para o botão. Agora eu eu to prendendo a referencia do obj (MobileNavBar) usando bind */

    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
       /* O operador ternário é o seguinte: O link ta com animação, ou seja, exatamente quado se quer fechar o menu (recolher) ? Então retira (recebe ""), caso contrário dar a animação e ainda com delayzinho. */
      //  index / 7 + 0.3 será um pequeno delay na exibição dos links

      this.mobileMenu.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });


    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass); //ul
      this.mobileMenu.classList.toggle(this.activeClass); // samduicche
      this.animateLinks();  //Toda vez que alguém clicar, os links serão animados
      
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
      //O método addEventListener adiciona um evento que dispara quando o usuário clica no botão.
    }
  
    init() {   // Método que inicia a função addClickEvent se mobileMenu existir na tela.
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;  //faz nada, só pra retornar algo.
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".busca",
    ".busca li",
  );
  mobileNavbar.init();