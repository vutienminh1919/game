function saveScore(score){
    localStorage.setItem('score',score)
}

function loadScore(){
    if (localStorage.hasOwnProperty('score')){
        return localStorage.getItem('score')
    }else {
        return 0
    }

}

