moreSupport = () => {
    const support__content = document.querySelector('#support__content');
    const support__more = document.querySelector('#support__more');
    support__content.classList.toggle('active');
    support__more.style.display = 'none';
}

const buttons = document.querySelectorAll('.disabled');
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
    });
});