const titreSpans = document.querySelectorAll('h1 span');
const medias = document.querySelectorAll('.bulle');
const getPixTopBar = document.getElementById("topbar");
const getPixAbout = document.getElementById("about");
const getPixSkill1 = document.getElementById("frontBackEndSkills");
const getPixSkill2 = document.getElementById("cmsWebDesignSkills");
const getWidth = screen.width;
const getHeight = screen.height;
var a = getPixTopBar.scrollHeight;
var z = a + getPixAbout.scrollHeight;
var y = z + getPixSkill1.scrollHeight;
var x = y + getPixSkill2.scrollHeight;

window.addEventListener('load', () => {

    const TL = gsap.timeline({
        paused: true
    });

    TL
        .staggerFrom(titreSpans, 1, {
            top: -250,
            opacity: 0,
            ease: "power2.out"
        }, 0.2)
        .staggerFrom(medias, 1, {
            left: -400,
            ease: "power2.out"
        }, 0.2, '-=1');
    TL.play();
})

function responsiveNavBar() {
    var navTop = document.getElementById("navbar-right");
    let hNavBar = document.getElementById("navbar").style.height;
    console.log("hauteur navbar1 : " + hNavBar);
    if (navTop.className === "topnav") {
        navTop.className += " responsive";
    } else {
        navTop.className = "topnav";
    }

    if (hNavBar == "14vh") {
        document.getElementById("navbar").style.height = "9vh";
        console.log("hauteur navbar2 : " + hNavBar);
    } else if (hNavBar = "9vh") {
        document.getElementById("navbar").style.height = "14vh";
        console.log("hauteur navbar3 : " + hNavBar);
        return;
    }
}

function whereScrollFromTop() { //Où l'utilisateur se trouve?
    let bloc1Height = document.getElementById("topbar").scrollHeight;
    let bloc2Height = document.getElementById("about").scrollHeight;
    let bloc3Height = document.getElementById("skills").scrollHeight;
    let bloc4Height = document.getElementById("exp").scrollHeight;
    let bloc5Height = document.getElementById("portfolio").scrollHeight;
    let bloc6Height = document.getElementById("contact").scrollHeight;
    fullHeight = bloc1Height + bloc2Height + bloc3Height + bloc4Height + bloc5Height + bloc6Height;
    averagePosition = document.documentElement.scrollTop;
    if (averagePosition > 0 && averagePosition <= bloc1Height) {
    } else if (averagePosition > bloc1Height && averagePosition <= bloc1Height + bloc2Height) {
        document.getElementById("progressNav2").style.opacity = "1";
        document.getElementById("progressNav2").style.left = "44.6%";
    } else if (averagePosition > bloc1Height + bloc2Height  && averagePosition <= bloc1Height + bloc2Height + bloc3Height) {
        document.getElementById("progressNav2").style.left = "50.7%";
    } else if (averagePosition > bloc1Height + bloc2Height +bloc3Height && averagePosition <= bloc1Height + bloc2Height + bloc3Height + bloc4Height) {

        document.getElementById("progressNav2").style.left = "56.9%";
    } else if (averagePosition > bloc1Height+bloc2Height+bloc3Height+bloc4Height && averagePosition <= bloc1Height + bloc2Height + bloc3Height + bloc4Height + bloc5Height) {
        document.getElementById("progressNav2").style.left = "62%";
    } else if (averagePosition > bloc1Height+bloc2Height+bloc3Height+bloc4Height+bloc5Height) {
        document.getElementById("progressNav2").style.left = "66.9%";
    } else {
        document.getElementById("progressNav2").style.opacity = "0";
    }   
}

//Des le scroll, recalcul de la hauteur (calcFullHeight) en cas de 
//redimensionnement de l'écran par le user.
window.onscroll = function () {
    whereScrollFromTop();
    hNavBar = document.getElementById("navbar").style.height;
    if (document.documentElement.scrollTop > 50 & getWidth < 600) {
        document.getElementById("navbar").style.backgroundColor = "#422664";
    } else if (document.documentElement.scrollTop > 50 & getWidth > 600) {
        document.getElementById("navbar").style.backgroundColor = "#422664";
        document.getElementById("navbar").style.color = "white";
        document.getElementById("dsi").style.opacity = "0";
        document.getElementById("dsi").style.visibility = "hidden";
    } else {
        document.getElementById("navbar").style.backgroundColor = "#000000";
        document.getElementById("navbar").style.color = "white";
        document.getElementById("dsi").style.opacity = "100";
        document.getElementById("dsi").style.visibility = "visible";
    }
    if (document.documentElement.scrollTop > 250) {
        document.getElementById("socialLogo").style.opacity = "0";
        document.getElementById("socialLogo").style.visibility = "hidden";
    } else {
        document.getElementById("socialLogo").style.opacity = "1";
        document.getElementById("socialLogo").style.visibility = "visible";
    }
}