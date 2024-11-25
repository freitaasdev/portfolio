function myMenuFunction() {
    var menuBth = document.getElementById("myNavMenu");
    menuBth.classList.toggle("responsive");
  }
  
  const body = document.querySelector("body"),
    toggleSwitch = document.getElementById("toggle-switch");
  
  toggleSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
  });

  function myMenuFunction() {
    const menu = document.getElementById("myNavMenu");
    menu.classList.toggle("responsive");
  }
  
  // Fechar o menu ao clicar em um link ou fora do menu
  document.addEventListener("click", (event) => {
    const menu = document.getElementById("myNavMenu");
    const menuBtn = document.querySelector(".nav-menu-btn i");
    const isClickInsideMenu = menu.contains(event.target);
    const isClickOnMenuBtn = menuBtn.contains(event.target);
  
    if (!isClickInsideMenu && !isClickOnMenuBtn) {
      menu.classList.remove("responsive");
    }
  });
  
  var typingEffect = new Typed(".typedText", {
    strings: ["Student", "Coder", "Developer"],
    loop: true,
    typeSpeed: 120,
    backSpeed: 80, 
    backDelay: 2000,
  });
  
  const srConfig = {
    distance: "80px",
    duration: 2000,
    reset: true,
  };
  
  ScrollReveal({ ...srConfig, origin: "top" }).reveal(".featured-name, .text-info, .text-btn, .social-icons, .featured-image, .project-box");
  ScrollReveal({ ...srConfig, origin: "left" }).reveal(".about-info, .contact-info");
  ScrollReveal({ ...srConfig, origin: "right" }).reveal(".skill, .skill-box");
  
  const sections = document.querySelectorAll(".section[id]");
  
  function scrollActive() {
    const scrollY = window.scrollY;
  
    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute("id");
  
      const link = document.querySelector(".nav-menu a[href*=" + sectionId + "]");
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        link?.classList.add("active-link");
      } else {
        link?.classList.remove("active-link");
      }
    });
  }
  
  let timeout;
  window.addEventListener("scroll", () => {
    clearTimeout(timeout);
    timeout = setTimeout(scrollActive, 100);
  });
  