function scrollToPiano() {
    const pianoSection = document.getElementById('piano');
    pianoSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}