function toggleLanguage() {
    let switcher = document.getElementById("languageSwitch");
    
    const argElements = document.querySelectorAll('.lang-es');
    const usaElements = document.querySelectorAll('.lang-en');

    if (switcher.checked) {
      // Cambiar a inglés // 
      argElements.forEach(element => element.style.display = 'none');
      usaElements.forEach(element => element.style.display = 'block');
    } else {
      // Cambiar a español // 
      argElements.forEach(element => element.style.display = 'block');
      usaElements.forEach(element => element.style.display = 'none');
    }
  }

  window.onload = function() {
    toggleLanguage(); // Llamar a toggleLanguage al cargar la página para establecer el idioma inicial
  }