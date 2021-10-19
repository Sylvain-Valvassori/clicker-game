let mySave = localStorage;
function save(){
    let item = {
        'score' : score,
        'MultiplierOwned' : MultiplierOwned,
    }

    mySave.setItem('save', item);
}

window.addEventListener('beforeunload', save());
