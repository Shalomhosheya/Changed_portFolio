
function toggleMenu() {
    const m = document.querySelector(".menu-links");
    const i = document.querySelector(".hamburger-icon");
    m.classList.toggle("open");
    i.classList.toggle("open");
}
document.addEventListener("DOMContentLoaded", function() {
    const typed = new Typed('.typing', {
        strings: ["Software Engineer..", "Full Stack Developer..", "UI/UX Designer..", "Web Developer..","Professional Editor.."],
        typeSpeed: 60,
        backSpeed: 30,
        backDelay: 600,
        loop: true
    });
});

var projects = document.getElementById("viewPro")
var project1 = document.getElementById("d1")
var closeBtn = document.getElementById("closebutton")
var assignmet = document.getElementById("viewAssignment")
var projectview = document.getElementById("projects1")


project1.addEventListener("click",function (){
  projectview.style.display="flex"
})
closeBtn.addEventListener("click",function (){
  projectview.style.display="none"
})

var buttons = document.querySelectorAll('.i');

buttons.forEach(function(button) {

    var namePro = button.querySelector('.namePro');
    var viewPro = button.querySelector('.viewPro');
    var codePro = button.querySelector('.viewCode');
    
    button.addEventListener('mouseenter', function() {
        namePro.style.display = 'block'; 
        viewPro.style.display = 'block'; 
        codePro.style.display = 'block';  
        namePro.style.backgroundColor = 'green';  
        console.log("Hovering over the button");
    });
    
    button.addEventListener('mouseleave', function() {
        namePro.style.display = 'none';  
        viewPro.style.display = 'none';  
        codePro.style.display = 'none'; 
    });
});



var closeBtn =document.getElementById("closebutton2")
var assignemnt = document.getElementById("assignments")
var openBtn = document.getElementById("openBtn")
closeBtn.addEventListener("click",function (){
    assignemnt.style.display="none"
    closeBtn.style.display="none"
})
openBtn.addEventListener("click",function (){
    assignemnt.style.display="flex"
    closeBtn.style.display="block"
})
 // GitHub link to open
 // URLs for each project
const movieClone = "https://github.com/Shalomhosheya/MovieAppClone";
const greenShadow = "https://github.com/Shalomhosheya/CropMonitoringSystem";
const fitnessApp = "https://github.com/Shalomhosheya/FitnessAppMobile";
const cakeShop = "https://github.com/Shalomhosheya/cake-Shop";
const fitFun = "https://github.com/Shalomhosheya/FitFun";
const chatApp = "https://github.com/Shalomhosheya/ChatAppplication";
const cafe = "https://github.com/Shalomhosheya/CafemanagementSystem";
const lib = "https://github.com/Shalomhosheya/LibraryManagementSystem";

function openGithub(url) {
    window.open(url, "_blank"); // Opens the URL in a new tab
}

document.getElementById("pro1").addEventListener("click", () => openGithub(movieClone));
document.getElementById("pro2").addEventListener("click", () => openGithub(greenShadow));
document.getElementById("pro3").addEventListener("click", () => openGithub(fitnessApp));
document.getElementById("pro4").addEventListener("click", () => openGithub(cakeShop));
document.getElementById("pro5").addEventListener("click", () => openGithub(fitFun));
document.getElementById("pro6").addEventListener("click", () => openGithub(chatApp));
document.getElementById("pro7").addEventListener("click", () => openGithub(cafe));
document.getElementById("pro8").addEventListener("click", () => openGithub(lib));

document.getElementById("cvBtn").addEventListener("click", function(){
    window.open("./Assets/files/resumeComplete (1)com.pdf")
    console.log("hello")
});

