const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click',()=>{
    if(search.classList.contains('active'))
    {
        search.classList.remove('active')
        input.focus()
    }
    else{
        search.classList.add('active')
    }

})