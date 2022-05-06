const text = document.querySelector('.welcome-left__floatText');
var texts = ['Мы создаём уникальные игры', 'Мы строим новые миры', 'Мы любим своих игроков'];

let lastIndex;
function togglesText(){
    let index;
    do{
        index = Math.floor(Math.random() * 3);
    } while(index == lastIndex);

    lastIndex = index;
    text.innerText = texts[index];
}

setInterval(togglesText, 2000);

