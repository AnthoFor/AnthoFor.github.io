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
window.onscroll = function () {
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
    // if (document.documentElement.scrollTop > a && document.documentElement.scrollTop < z) {
    // document.getElementById("aboutContent").style.left = "0";
    // document.getElementById("aboutNavBtn").style.color ="#000000";
    // } else {
    // document.getElementById("aboutNavBtn").style.color ="#FFFFFF";
    // }
    // else if (getWidth < 600) {
    //     document.getElementById("aboutContent").style.left = "0";
    // } else {
    //     document.getElementById("aboutContent").style.left = "-200%";
    // }
    // if (document.documentElement.scrollTop > z + 100) {
    //     document.getElementById("frontBackEndSkills").style.left = "0";
    // } else if (getWidth < 600) {
    //     document.getElementById("frontBackEndSkills").style.left = "0";
    // } else {
    //     document.getElementById("frontBackEndSkills").style.left = "-200%";
    // }
    // if (document.documentElement.scrollTop > y + 100) {
    //     document.getElementById("cmsWebDesignSkills").style.right = "0";
    // } else if (getWidth < 600) {
    //     document.getElementById("cmsWebDesignSkills").style.right = "0";
    // } else {
    //     document.getElementById("cmsWebDesignSkills").style.right = "-200%";
    // }
    // if (document.documentElement.scrollTop > x + 100) {
    //     document.getElementById("workFlowSkills").style.left = "0";
    // } else if (getWidth < 600) {
    //     document.getElementById("workFlowSkills").style.left = "0";
    // } else {
    //     document.getElementById("workFlowSkills").style.left = "-200%";