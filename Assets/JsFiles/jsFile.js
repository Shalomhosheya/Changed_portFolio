
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

// Get the elements by their IDs
// Select all the buttons with the class 'i'
var buttons = document.querySelectorAll('.i');

// Loop through each button
buttons.forEach(function(button) {
    // Get the 'namePro' element inside the current button
    var namePro = button.querySelector('.namePro');
    var viewPro = button.querySelector('.viewPro');
    var codePro = button.querySelector('.viewCode');
    
    // Add the 'mouseenter' event listener to show the 'namePro' when hovering
    button.addEventListener('mouseenter', function() {
        namePro.style.display = 'block';  // Show the 'namePro' element
        viewPro.style.display = 'block';  // Show the 'viewPro' element
        codePro.style.display = 'block';  // Show the 'viewCode' element
        namePro.style.backgroundColor = 'green';  // Change the background color
        console.log("Hovering over the button");
    });
    
    // Add the 'mouseleave' event listener to hide the 'namePro' when the mouse leaves
    button.addEventListener('mouseleave', function() {
        namePro.style.display = 'none';  // Hide the 'namePro' element
        viewPro.style.display = 'none';  // Hide the 'viewPro' element
        codePro.style.display = 'none';  // Hide the 'viewCode' element
    });
});


// var b1 = document.getElementById("b1")
// var b2 = document.getElementById("b2")
// var b3 = document.getElementById("b3")
// var b4 = document.getElementById("b4")
// var b5 = document.getElementById("b5")
// var b6 = document.getElementById("b6")

// b1.addEventListener("click",function (){
//     window.location.href = "https://github.com/Shalomhosheya/Assignment4Css";
// })
// b2.addEventListener("click",function (){
//     window.location.href = "https://github.com/Shalomhosheya/PortfolioHTMLframe";
// })
// b3.addEventListener("click",function (){
//     window.location.href = "https://github.com/Shalomhosheya/CSS-Assignment";
// })
// b4.addEventListener("click",function (){
//     window.location.href = "https://github.com/Shalomhosheya/Assignment4Css";
// })
// b5.addEventListener("click",function (){
//     window.location.href = "https://github.com/Shalomhosheya/Portfolio";
// })
// b6.addEventListener("click",function (){
//     window.location.href = "https://github.com/Shalomhosheya/Assignment_6_css";
// })
// b7.addEventListener("click",function (){
//     window.location.href = "https://github.com/Shalomhosheya/Pos_system";
// })
// b8.addEventListener("click",function (){
//     window.location.href = "https://github.com/Shalomhosheya/Assignment_8";
// })
// b9.addEventListener("click",function (){
//     window.location.href = "https://github.com/Shalomhosheya/Assignment_9";
// })
// b10.addEventListener("click",function (){
//     window.location.href = "https://github.com/Shalomhosheya/Assignment4Css";
// })

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

// Function to open GitHub link
function openGithub(url) {
    window.open(url, "_blank"); // Opens the URL in a new tab
}

// Add click event to each project button
document.getElementById("pro1").addEventListener("click", () => openGithub(movieClone));
document.getElementById("pro2").addEventListener("click", () => openGithub(greenShadow));
document.getElementById("pro3").addEventListener("click", () => openGithub(fitnessApp));
document.getElementById("pro4").addEventListener("click", () => openGithub(cakeShop));
document.getElementById("pro5").addEventListener("click", () => openGithub(fitFun));
document.getElementById("pro6").addEventListener("click", () => openGithub(chatApp));
document.getElementById("pro7").addEventListener("click", () => openGithub(cafe));
document.getElementById("pro8").addEventListener("click", () => openGithub(lib));

// Add click event to close button
document.getElementById("closebutton").addEventListener("click", function () {
    window.close(); // Closes the current window/tab
});