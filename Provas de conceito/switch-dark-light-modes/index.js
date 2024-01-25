onload = ()=> {
    
    const modeInStorage = localStorage.getItem('mode')
    if(modeInStorage) {
        document.querySelector('body').classList.add(modeInStorage)
        document.querySelectorAll('a').forEach(link => link.classList.add('dark-mode-links'))
    }
}

document.querySelector('.dark-light-button')
    .addEventListener('click', ()=> {
        document.querySelector('body').classList.toggle('dark-mode')
        document.querySelectorAll('a').forEach(link => link.classList.toggle('dark-mode-links')) 
        saveModeInStorage()       
    })

const saveModeInStorage = () => {
    const body = document.querySelector('body').classList;

    if(body.contains('dark-mode')) {
            localStorage.setItem('mode', 'dark-mode')
    } else {
        localStorage.clear()
    }
}