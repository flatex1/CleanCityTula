window.addEventListener('scroll', () => {
    const header = document.getElementById('site-header');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        // Когда прокрутка больше нуля, меняем прозрачность
        const opacity = Math.min(0.8, scrollPosition / 300); // Максимальная прозрачность 0.8
        header.style.backgroundColor = `rgba(85,158,131, ${opacity})`;
    } else {
        // Когда страница вверху, делаем шапку полностью непрозрачной
        header.style.backgroundColor = 'rgba(85,158,131, 1)';
    }
});
