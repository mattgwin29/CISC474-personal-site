function loadNavBar() {

    document.getElementsByClassName("topnav")[0].innerHTML=
        `        
        <a href="#home" class="active">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <div class="dropdown">
          <button class="dropbtn">Dropdown
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
        <a href="#about">About</a>
        <a href="javascript:void(0);" class="icon" onclick="myFunction()">&#9776;</a>
        `;
}



loadNavBar();