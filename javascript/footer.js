function loadFooter(){
    document.getElementsByTagName("footer")[0].innerHTML = ` 

    <ul class="menu">
      <img src="./assets/github.png" href="https://github.com/mattgwin29">
      <li class="menu__item"><a class="menu__link" href="https://github.com/mattgwin29">GitHub</a></li>

      <img src="./assets/linkedin.png" href="https://linkedin.com/in/mattgwin1">
      <li class="menu__item"><a class="menu__link" href="https://linkedin.com/in/mattgwin1">LinkedIn</a></li>
    
      <img src="./assets/gmail.png">
      <li class="menu__item"><a class="menu__link" href="/Contact">Email</a></li>
      
    </ul>
    `;

}

loadFooter();