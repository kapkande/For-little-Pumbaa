const img = document.querySelector('.img')

function shaw(n) {
    if (n) {
        img.innerHTML = '';
        return;
    }
   
   setTimeout(() => {
    img.classList.add('img-transform')
   }, 1000);
   
   
   save()
}

function save() {
    localStorage.setItem('permission', true);
}

function getLocalStorage() {
    shaw(localStorage.getItem('permission'));
}
window.addEventListener('load', getLocalStorage)