async function getOnline(){
    const api = await fetch('https://api.vimeworld.com/online');
    const json = await api.json();

    const progress = document.querySelectorAll('.total-online');

    for(i=0; i<progress.length; i++){
        progress[i].setAttribute('value', json.total);
        progress[i].setAttribute('data-text', json.total + '/4000');

        if(json.total === false){
            console.log('sd');
        }
    }
}

getOnline();