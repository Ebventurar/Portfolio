const flagsElement = document.getElementById("flags");
const textsToChange = document.querySelectorAll("[data-section]");

const changeLanguage = async (language) => {
    // Guardar el idioma seleccionado en localStorage
    localStorage.setItem("language", language);

    const requestJson = await fetch(`./Components/languages/${language}.json`);
    const texts = await requestJson.json();

    for (const textToChange of textsToChange) {
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;

        const sanitizedHtml = DOMPurify.sanitize(texts[section][value]);
        textToChange.innerHTML = sanitizedHtml;
    }
};

// Detectar el clic en la selección de idioma
flagsElement.addEventListener("click", (e) => {
    changeLanguage(e.target.parentElement.dataset.language);
});

// Función para cargar el idioma guardado
const loadLanguage = async () => {
    const savedLanguage = localStorage.getItem("language") || "es"; // Por defecto español
    await changeLanguage(savedLanguage);
};

// Cargar el idioma seleccionado cuando la página cargue
document.addEventListener("DOMContentLoaded", loadLanguage);