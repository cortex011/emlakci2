

const btn = document.querySelector('.additonal_search');

const unvis = document.querySelector('.unvisible_search');


btn.addEventListener('click', function(){
    unvis.classList.toggle('active');

    if(unvis.classList.contains('active')){
        btn.innerHTML = 'Daha az';
    }else{
        btn.innerHTML = 'Daha cox';
    }


})

