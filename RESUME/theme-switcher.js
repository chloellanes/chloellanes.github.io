let currentTheme = localStorage.getItem('color-mode');
console.log(currentTheme);
const getTheme = () => {
    const prefersDarkTheme = window.matchMedia('(prefers-color-scheme: dark)');
    console.log(prefersDarkTheme);
    if (prefersDarkTheme.matches) {
        document.documentElement.classList.toggle('dark');
        localStorage.setItem('color-mode', 'dark');
    }
    else {
        document.documentElement.classList.toggle('light');
        localStorage.setItem('color-mode', 'light');
    }
}
document.addEventListener('DOMContentLoaded', getTheme);