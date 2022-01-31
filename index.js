
function Info(){
    return(
        <div>
            <img src="./Screenshot_20210823-163129.png" alt="card_image" className="card_image" />
            <header className="head">
            <h2>Adedokun Faith</h2>
            <h3>Software Engineer</h3>
            <p>Lorem Ipsum</p>
            </header>
            <div>
                <a href="#" className="mail"><i class="fas fa-envelope-square "></i> Email</a>
                <a href="#" className="ln"><i class="fab fa-linkedin"></i> LinkedIn</a>
            </div>
        </div>
    )
}

function About(){
    return(
        <div className="about">
            <h2>About</h2>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nam varius eros consequat auctor gravida. <br/>
            </p>
        </div>
    )
}

function Interest(){
    return(
        <div className="interest">
            <h2>Interest</h2>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nam varius eros consequat auctor gravida. <br/>                
            </p>
        </div>
    )
}

function Footer(){
    return(
        <div className="foot">
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-facebook-square"></i></a>
            <a href="#"><i class="fab fa-github-square"></i></a>
            <a href="#"><i class="fab fa-discord"></i></a>
        </div>
    )
}
function Card(){
    return(
        <div>
            <Info />
            <About />
            <Interest />
            <Footer />
        </div>
    )
}




ReactDOM.render(<Card />, document.getElementById("root"))