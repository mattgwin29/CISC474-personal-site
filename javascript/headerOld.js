function loadNavBar() {

    document.getElementsByClassName("navbar")[0].innerHTML=
        `        
        <ul>
        <li><a href="./">Home</a></li>

        <li><a href="./aboutMe.html">About Me</a></li>
        <li><a href="./resume.html">Resume</a></li>
        <li><a href="./contact.html">Contact</a></li>
        <li><a href="./projects.html">Projects</a></li>

        <li>
            <div class="dropdown">
                <a class="dropbtn">Class Links</a>
                <div class="dropdown-content">
                    <li><a href="https://mattm401.github.io/">CISC474 Website</a></li>
                    <li><a href="https://rgud0.github.io/">Previous Student</a></li>
                    <li><a href="https://hkaur02.github.io/">Next Student</a></li>
                </div>
            </div>
        </li>
        </ul>
        `;
}



loadNavBar();