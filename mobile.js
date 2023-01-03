function handleClickOutside(targetElement, callback){
    const html = document.documentElement;

    function handleHTMLClick(event){
        if(!targetElement.contains(event.target)){
            targetElement.removeAttribute('data-target');

            html.removeEventListener('click', handleHTMLClick);
            html.removeEventListener('touchstart', handleHTMLClick);
            
            callback();
        }
    }

    if(!targetElement.hasAttribute('data-target')){
        html.addEventListener('click', handleHTMLClick);
        html.addEventListener('touchstart', handleHTMLClick);

        targetElement.setAttribute('data-target', "");
    }
}

function handleButtonClick(event){
    if(event.type === "touchstart")event.preventDefault();
    event.stopPropagation();

    header.classList.toggle('active');
    handleClickOutside(controles, () => {
        header.classList.remove('active');
        setAria();
    });
    setAria();
}

function setAria(){
    const isActive = header.classList.contains('active');

    btnMenu.setAttribute('Aria-expanded', isActive);

    if(isActive){
        btnMenu.setAttribute('aria-label', "Fechar Menu");
    }else{
        btnMenu.setAttribute('aria-label', "Abrir Menu");
    }
}

const header = document.querySelector('header');
const btnMenu = document.querySelector('.btnMenu');
const controles = document.querySelector('.controles');

btnMenu.addEventListener('click', handleButtonClick);
btnMenu.addEventListener('touchstart', handleButtonClick);