function loadFooter(){
    document.getElementsByTagName("footer")[0].innerHTML = ` 
    <ul class="social-icon">
      <li class="social-icon__item"><a class="social-icon__link" href="#">
          <ion-icon name="logo-github"></ion-icon>
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="#">
          <ion-icon name="logo-linkedin"></ion-icon>
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="#">
          <ion-icon name="logo-email"></ion-icon>
        </a></li>
    </ul>
    <ul class="menu">
      <li class="menu__item"><a class="menu__link" href="https://github.com/mattgwin29">GitHub</a></li>
      <li class="menu__item"><a class="menu__link" href="https://linkedin.com/in/mattgwin1">LinkedIn</a></li>
      <li class="menu__item"><a class="menu__link" href="#">Email</a></li>
      
    </ul>
    `;

}

loadFooter();