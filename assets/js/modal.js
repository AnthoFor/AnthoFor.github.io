//affichage de la modal
funcDisplayModal = () => {
    modal.style.display = "block";
}

//fermeture de la modal
funcCloseModal = () => {
    modal.style.display = "none";
}

//Ajoute du contenu dans la modal (#insideModal) en fonction de la classe  "bg-1" "bg-2" ... 
funcAddInnerHTML = (cardsNumber) => {
    if (cardsNumber == 'bg-1') {
        insideModal.innerHTML = `<h2>Cartes - La Manu - 2022</h2>
        <article>Exercice portant sur la conception de carte dont quelques une en gold</article>
        <img src="assets/img/imgCards1.PNG" alt="Screenshot de la page">
        <p>Projet réalisé après 4 jours de présence à La Manu, initié au CSS/HTML.</p>
        <p>Technologies utilisées : HTML et CSS</p>
        <a href="#" target="_blank" rel="noopener noreferrer">Lien</a>`;
    } else if (cardsNumber == 'bg-2') {
        insideModal.innerHTML = `<h2>ShiFuMi - La Manu - 2022</h2>
        <article>Exercice portant sur la conception d'un jeu de shifumi, réalisé sur le thème de mortal kombat</article>
        <img src="assets/img/imgCards2.PNG" alt="ScreenShot de la page">
        <p>Projet réalisé après 1 mois de présence à La Manu, initié au JS.</p>
        <p>Technologies utilisées : HTML/CSS/JS</p>
        <a href="https://anthofor.github.io/shifumi/" target="_blank" rel="noopener noreferrer">Lien</a>`;
    } else if (cardsNumber == 'bg-3') {
        insideModal.innerHTML = `<h2>The movie database - La Manu - 2022</h2>
        <article>Exercice portant sur la conception d'une database de films afin de pratiquer le fetch</article>
        <img src="assets/img/imgCards3.PNG" alt="ScreenShot de la page">
        <p>Projet réalisé au cours du module JS</p>
        <p>Technologies utilisées : HTML/CSS/JS</p>
        <a href="https://anthofor.github.io/theMovieDatabase/" target="_blank" rel="noopener noreferrer">Lien</a>`;
    } else if (cardsNumber == 'bg-4') {
        insideModal.innerHTML = `<h2>Pokékilo - La Manu - 2022</h2>
        <article>Exercice portant sur la conception d'un site de vente en ligne, avec gestion du panier</article>
        <img src="assets/img/imgCards4.PNG" alt="ScreenShot de la page">
        <p>Projet réalisé au cours du module JS en groupe de 3 personnes. Exercice lié au "local storage"</p>
        <p>Technologies utilisées : HTML/CSS/JS</p>
        <a href="https://anthofor.github.io/pokekilo/" target="_blank" rel="noopener noreferrer">Lien</a>`;
    }
    funcDisplayModal(); 
}

//eventListener
window.addEventListener('click', (e) => {
    if (e.target.parentNode.classList.contains('portfolioCards')) {
        funcAddInnerHTML(e.target.classList[1]);
    } 
    if (e.target.id == 'closeModal') {
        funcCloseModal();
    }
})