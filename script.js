function changeLanguage(languageCode) {
    const elements = document.querySelectorAll('[class^="lang-"]');
    
    elements.forEach(element => {
        const langClass = element.classList[0];
        
        const shouldBeVisible = langClass === `lang-${languageCode}`; // Verifica si la clase coincide con el idioma actual
        
        element.style.display = shouldBeVisible ? 'block' : 'none'; // Aplica el estilo si debe estar visible o no 
    });
}


window.onload = function() {
    changeLanguage('es');
}