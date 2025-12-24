let lista = document.querySelectorAll('.item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let main = document.querySelector('main');


let contagem = lista.length;
let active = 0


function updateBackground() {
        const activeItem = document.querySelector(".item.active");
    if (!activeItem) return;

    const bg = getComputedStyle(activeItem).getPropertyValue("--background");
    document.documentElement.style.setProperty("--bg-atual", bg);
    }

next.onclick =  () =>{
    let activeOld = document.querySelector('.active');
    activeOld.classList.remove('active');

    active = active >= contagem -1 ? 0 : active +1;
    lista[active].classList.add('active');

    updateBackground();
}

prev.onclick = () =>{
    let activeOld = document.querySelector('.active');
    activeOld.classList.remove('active');

    active = active <= 0 ? contagem -1 : active -1;
    lista[active].classList.add('active');

    updateBackground();

    
}

    
    // Update background on page load
    updateBackground();

