// ================================
// Portfolio V2 Script
// ================================

// Typing Animation
const typingElement = document.getElementById("typing");

const professions = [
  "Full Stack Developer",
  "React Developer",
  "Python Developer",
  "Web Developer",
  "Open to Work 🚀"
];

let professionIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

  const currentWord = professions[professionIndex];

  if (!deleting) {
    typingElement.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentWord.length) {
      deleting = true;
      setTimeout(typeEffect, 1800);
      return;
    }

  } else {

    typingElement.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      deleting = false;
      professionIndex++;

      if (professionIndex >= professions.length)
        professionIndex = 0;
    }

  }

  setTimeout(typeEffect, deleting ? 50 : 100);

}

typeEffect();


// ================================
// Dark Mode
// ================================

const themeBtn = document.getElementById("themeToggle");

if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark");
    themeBtn.classList.remove("fa-moon");
    themeBtn.classList.add("fa-sun");
}

themeBtn.onclick = () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        themeBtn.classList.remove("fa-moon");
        themeBtn.classList.add("fa-sun");

        localStorage.setItem("theme","dark");

    }else{

        themeBtn.classList.remove("fa-sun");
        themeBtn.classList.add("fa-moon");

        localStorage.setItem("theme","light");

    }

};


// ================================
// Navbar Active Link
// ================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current = "";

sections.forEach(section=>{

const sectionTop = section.offsetTop - 120;

if(scrollY >= sectionTop){

current = section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href") == "#" + current){

link.classList.add("active");

}

});

});


// ================================
// Reveal Animation
// ================================

const revealElements = document.querySelectorAll(".card,.project");

window.addEventListener("scroll",()=>{

revealElements.forEach(element=>{

const top = element.getBoundingClientRect().top;

const visible = window.innerHeight - 100;

if(top < visible){

element.style.opacity="1";
element.style.transform="translateY(0px)";

}

});

});

revealElements.forEach(element=>{

element.style.opacity="0";
element.style.transform="translateY(40px)";
element.style.transition=".7s";

});


// ================================
// Smooth Button Hover Effect
// ================================

const buttons = document.querySelectorAll(".btn,.btn2");

buttons.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.05)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

});


// ================================
// Scroll To Top Button
// ================================

const scrollBtn = document.createElement("button");

scrollBtn.innerHTML = "↑";

scrollBtn.style.position="fixed";
scrollBtn.style.bottom="30px";
scrollBtn.style.right="30px";
scrollBtn.style.width="50px";
scrollBtn.style.height="50px";
scrollBtn.style.border="none";
scrollBtn.style.borderRadius="50%";
scrollBtn.style.background="#2563eb";
scrollBtn.style.color="white";
scrollBtn.style.fontSize="22px";
scrollBtn.style.cursor="pointer";
scrollBtn.style.display="none";
scrollBtn.style.boxShadow="0 10px 30px rgba(0,0,0,.25)";
scrollBtn.style.zIndex="999";

document.body.appendChild(scrollBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

scrollBtn.style.display="block";

}else{

scrollBtn.style.display="none";

}

});

scrollBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};


// ================================
// Console Greeting
// ================================

console.log("Welcome to Malini Balaji Portfolio 🚀");