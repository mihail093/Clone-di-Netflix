//Scrivo una funzione per gestire tutto il contenuto HTML all'interno di 'main'
//Su schermi con larghezza inferiore a 768px voglio visualizzare un singolo poster alla volta
function gestisciContenuto() {
    let larghezzaSchermo = window.innerWidth;
    if (larghezzaSchermo < 768) {
        document.querySelector('main').innerHTML = `
        <h4 class="mt-4">Trending Now</h4>
        <!--Primo carousel-->
        <div id="carouselExample" class="carousel slide">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="poster" src="assets/imgs/movies/1.png" alt="movie poster">
                </div>
                <div class="carousel-item">
                    <img class="poster" src="assets/imgs/movies/2.png" alt="movie poster">
                </div>
                <div class="carousel-item">
                    <img class="poster" src="assets/imgs/movies/3.png" alt="movie poster">
                </div>
                <div class="carousel-item">
                    <img class="poster" src="assets/imgs/movies/4.png" alt="movie poster">
                </div>
                <div class="carousel-item">
                    <img class="poster" src="assets/imgs/movies/5.png" alt="movie poster">
                </div>
                <div class="carousel-item">
                    <img class="poster" src="assets/imgs/movies/6.png" alt="movie poster">
                </div>
                <div class="carousel-item">
                    <img class="poster" src="assets/imgs/movies/18.png" alt="movie poster">
                </div>
                <div class="carousel-item">
                    <img class="poster" src="assets/imgs/movies/17.png" alt="movie poster">
                </div>
                <div class="carousel-item">
                    <img class="poster" src="assets/imgs/movies/16.png" alt="movie poster">
                </div>
                <div class="carousel-item">
                    <img class="poster" src="assets/imgs/movies/15.png" alt="movie poster">
                </div>
                <div class="carousel-item">
                    <img class="poster" src="assets/imgs/movies/14.png" alt="movie poster">
                </div>
                <div class="carousel-item">
                    <img class="poster" src="assets/imgs/movies/13.png" alt="movie poster">
                </div>
            </div>
            <button class="carousel-control-prev button-style" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next button-style" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
            </button>
        </div>
        <h4 class="mt-4">Watch It Again</h4>
        <!--Secondo carousel-->
        <div id="carouselExample2" class="carousel slide">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="poster" src="assets/imgs/movies/7.png" alt="movie poster">
                </div>
                <div class="carousel-item">
                    <img class="poster" src="assets/imgs/movies/8.png" alt="movie poster">
                </div>
                <div class="carousel-item">
                    <img class="poster" src="assets/imgs/movies/9.png" alt="movie poster">
                </div>
                <div class="carousel-item">
                    <img class="poster" src="assets/imgs/movies/10.png" alt="movie poster">
                </div>
                <div class="carousel-item">
                    <img class="poster" src="assets/imgs/movies/11.png" alt="movie poster">
                </div>
                <div class="carousel-item">
                    <img class="poster" src="assets/imgs/movies/12.png" alt="movie poster">
                </div>
                <div class="carousel-item">
                    <img class="poster" src="assets/imgs/movies/13.png" alt="movie poster">
                </div>
                <div class="carousel-item">
                    <img class="poster" src="assets/imgs/movies/14.png" alt="movie poster">
                </div>
                <div class="carousel-item">
                    <img class="poster" src="assets/imgs/movies/15.png" alt="movie poster">
                </div>
                <div class="carousel-item">
                    <img class="poster" src="assets/imgs/movies/16.png" alt="movie poster">
                </div>
                <div class="carousel-item">
                    <img class="poster" src="assets/imgs/movies/17.png" alt="movie poster">
                </div>
                <div class="carousel-item">
                    <img class="poster" src="assets/imgs/movies/18.png" alt="movie poster">
                </div>
            </div>
            <button class="carousel-control-prev button-style" type="button" data-bs-target="#carouselExample2" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next button-style" type="button" data-bs-target="#carouselExample2" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        <h4 class="mt-4">New Releases</h4>
        <!--Terzo carousel-->
        <div id="carouselExample3" class="carousel slide">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="poster" src="assets/imgs/movies/6.png" alt="movie poster">
                </div>
                <div class="carousel-item">
                    <img class="poster" src="assets/imgs/movies/5.png" alt="movie poster">
                </div>
                <div class="carousel-item">
                    <img class="poster" src="assets/imgs/movies/4.png" alt="movie poster">
                </div>
                <div class="carousel-item">
                    <img class="poster" src="assets/imgs/movies/3.png" alt="movie poster">
                </div>
                <div class="carousel-item">
                    <img class="poster" src="assets/imgs/movies/2.png" alt="movie poster">
                </div>
                <div class="carousel-item">
                    <img class="poster" src="assets/imgs/movies/1.png" alt="movie poster">
                </div>
                <div class="carousel-item">
                    <img class="poster" src="assets/imgs/movies/7.png" alt="movie poster">
                </div>
                <div class="carousel-item">
                    <img class="poster" src="assets/imgs/movies/8.png" alt="movie poster">
                </div>
                <div class="carousel-item">
                    <img class="poster" src="assets/imgs/movies/9.png" alt="movie poster">
                </div>
                <div class="carousel-item">
                    <img class="poster" src="assets/imgs/movies/10.png" alt="movie poster">
                </div>
                <div class="carousel-item">
                    <img class="poster" src="assets/imgs/movies/11.png" alt="movie poster">
                </div>
                <div class="carousel-item">
                    <img class="poster" src="assets/imgs/movies/12.png" alt="movie poster">
                </div>
            </div>
            <button class="carousel-control-prev button-style" type="button" data-bs-target="#carouselExample3" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next button-style" type="button" data-bs-target="#carouselExample3" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        `;
    } else {
        document.querySelector('main').innerHTML = `
        <h4 class="mt-4">Trending Now</h4>
        <!--Primo carousel-->
        <div id="carouselExample" class="carousel slide">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="d-flex gap-1">
                        <img class="poster" src="assets/imgs/movies/1.png" alt="movie poster">
                        <img class="poster" src="assets/imgs/movies/2.png" alt="movie poster">
                        <img class="poster" src="assets/imgs/movies/3.png" alt="movie poster">
                        <img class="poster" src="assets/imgs/movies/4.png" alt="movie poster">
                        <img class="poster" src="assets/imgs/movies/5.png" alt="movie poster">
                        <img class="poster" src="assets/imgs/movies/6.png" alt="movie poster">
                        <img class="poster" src="assets/imgs/movies/18.png" alt="movie poster">
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="d-flex gap-1">
                        <img class="poster" src="assets/imgs/movies/18.png" alt="movie poster">
                        <img class="poster" src="assets/imgs/movies/17.png" alt="movie poster">
                        <img class="poster" src="assets/imgs/movies/16.png" alt="movie poster">
                        <img class="poster" src="assets/imgs/movies/15.png" alt="movie poster">
                        <img class="poster" src="assets/imgs/movies/14.png" alt="movie poster">
                        <img class="poster" src="assets/imgs/movies/13.png" alt="movie poster">
                        <img class="poster" src="assets/imgs/movies/1.png" alt="movie poster">
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev button-style" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next button-style" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        <h4 class="mt-4">Watch It Again</h4>
        <!--Secondo carousel-->
        <div id="carouselExample2" class="carousel slide">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="d-flex gap-1">
                        <img class="poster" src="assets/imgs/movies/7.png" alt="movie poster">
                        <img class="poster" src="assets/imgs/movies/8.png" alt="movie poster">
                        <img class="poster" src="assets/imgs/movies/9.png" alt="movie poster">
                        <img class="poster" src="assets/imgs/movies/10.png" alt="movie poster">
                        <img class="poster" src="assets/imgs/movies/11.png" alt="movie poster">
                        <img class="poster" src="assets/imgs/movies/12.png" alt="movie poster">
                        <img class="poster" src="assets/imgs/movies/13.png" alt="movie poster">
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="d-flex gap-1">
                        <img class="poster" src="assets/imgs/movies/13.png" alt="movie poster">
                        <img class="poster" src="assets/imgs/movies/14.png" alt="movie poster">
                        <img class="poster" src="assets/imgs/movies/15.png" alt="movie poster">
                        <img class="poster" src="assets/imgs/movies/16.png" alt="movie poster">
                        <img class="poster" src="assets/imgs/movies/17.png" alt="movie poster">
                        <img class="poster" src="assets/imgs/movies/18.png" alt="movie poster">
                        <img class="poster" src="assets/imgs/movies/7.png" alt="movie poster">
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev button-style" type="button" data-bs-target="#carouselExample2" data-bs-slide="prev">
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next button-style" type="button" data-bs-target="#carouselExample2" data-bs-slide="next">
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        <h4 class="mt-4">New Releases</h4>
        <!--Terzo carousel-->
        <div id="carouselExample3" class="carousel slide">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="d-flex gap-1">
                        <img class="poster" src="assets/imgs/movies/6.png" alt="movie poster">
                        <img class="poster" src="assets/imgs/movies/5.png" alt="movie poster">
                        <img class="poster" src="assets/imgs/movies/4.png" alt="movie poster">
                        <img class="poster" src="assets/imgs/movies/3.png" alt="movie poster">
                        <img class="poster" src="assets/imgs/movies/2.png" alt="movie poster">
                        <img class="poster" src="assets/imgs/movies/1.png" alt="movie poster">
                        <img class="poster" src="assets/imgs/movies/7.png" alt="movie poster">
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="d-flex gap-1">
                        <img class="poster" src="assets/imgs/movies/7.png" alt="movie poster">
                        <img class="poster" src="assets/imgs/movies/8.png" alt="movie poster">
                        <img class="poster" src="assets/imgs/movies/9.png" alt="movie poster">
                        <img class="poster" src="assets/imgs/movies/10.png" alt="movie poster">
                        <img class="poster" src="assets/imgs/movies/11.png" alt="movie poster">
                        <img class="poster" src="assets/imgs/movies/12.png" alt="movie poster">
                        <img class="poster" src="assets/imgs/movies/6.png" alt="movie poster">
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev button-style" type="button" data-bs-target="#carouselExample3" data-bs-slide="prev">
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next button-style" type="button" data-bs-target="#carouselExample3" data-bs-slide="next">
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        `;
    }
}

// Esegui la funzione quando la pagina viene caricata e quando la dimensione della finestra viene modificata
window.addEventListener('load', gestisciContenuto);
window.addEventListener('resize', gestisciContenuto);
