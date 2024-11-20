let list = document.querySelectorAll('.item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let count = list.length; // Quantidade total de itens
let active = 0; // Índice do item ativo

// Evento para o botão "next"
next.onclick = () => {
    let activeOld = document.querySelector('.active');
    activeOld.classList.remove('active');

    // Atualiza o índice ativo para o próximo item (com lógica circular)
    active = active >= count - 1 ? 0 : active + 1;

    list[active].classList.add('active');
};

// Evento para o botão "prev"
prev.onclick = () => {
    let activeOld = document.querySelector('.active');
    activeOld.classList.remove('active');

    // Atualiza o índice ativo para o item anterior (com lógica circular)
    active = active <= 0 ? count - 1 : active - 1;

    list[active].classList.add('active');
};
