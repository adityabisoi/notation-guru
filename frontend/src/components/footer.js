import React from 'react'

export default function footer() {
    return (
        <section class="footer" style={{backgroundImage:"linear-gradient(to top, #accbee 0%, #e7f0fd 100%)"}}>  
        <ul class="list">
            <li class="nav-links"><a href="#">Home</a></li>
            <li class="nav-links"><a href="#">About Us</a></li>
            <li class="nav-links"><a href="#">Contact Us</a></li>
        </ul>
        <div class="social">
            <a href="https://github.com/adityabisoi/notation-converter"><i class="fab fa-github"></i></a>
        </div>
        <p class="copyright">
            Copyright &copy; notation-converter @2021 . All rights reserved
        </p>
    </section>
    )
}
