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
    <div>
      <img src="./assets/github.png" href="https://github.com/mattgwin29">
      <li class="menu__item"><a class="menu__link" href="https://github.com/mattgwin29">GitHub</a></li>
    </div>

    <div>
      <img src="./assets/linkedin.png" href="https://linkedin.com/in/mattgwin1">
      <li class="menu__item"><a class="menu__link" href="https://linkedin.com/in/mattgwin1">LinkedIn</a></li>
    </div>
    
    <div>
      <img src="./assets/gmail.png">
      <li class="menu__item"><a class="menu__link" href="/Contact">Email</a></li>
    </div>
      
    </ul>
    `;

}

loadFooter();