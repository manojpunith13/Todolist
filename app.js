const input = document.querySelector('.input-list');
const button = document.querySelector('.button-list');
const list = document.querySelector('.list-group');
const divs = document.querySelectorAll('.search');
const buts = document.querySelector('.but')
const search = document.querySelector('#search-input')


button.addEventListener('click',addtodo)
list.addEventListener('click',deletes)

function addtodo(event){
    event.preventDefault();

    const listDiv = document.createElement('div');
    listDiv.classList.add('lists');
    
    // list.appendChild(listDiv);

    
    // const listli = document.createElement('li');
    // listli.classList.add('lists-li');

    
    const addList = document.createElement('li');
    addList.innerText = input.value;//to take input
    addList.classList.add('lists-li');
    listDiv.appendChild(addList)

    const AddButton = document.createElement('button');
    AddButton.innerHTML = '<i class = \'fa-solid fa-circle-check fa-2x\'> </i>';
    AddButton.classList.add('ADD-btn');
    listDiv.appendChild(AddButton)

    const RemoveButton = document.createElement('button');
    RemoveButton.innerHTML = '<i class = \'fa-solid fa-trash fa-2x\'></i>';
    RemoveButton.classList.add('Delete-btn');
    listDiv.appendChild(RemoveButton)

    list.appendChild(listDiv);
}


function deletes(e){
    if(e.target.classList.contains('fa-trash')){
        e.target.closest('.lists').remove();
    }
    if(e.target.classList.contains('fa-circle-check')){
        e.target.closest('.lists').classList.toggle('check')

    }
}


buts.addEventListener('click',function(e){
    e.preventDefault()

    divs[0].classList.toggle('expand')

})

const filter = (word)=>{
    Array.from(list.children)
    .forEach(lists => {
        if(lists.textContent.toLowerCase().includes(word)){
            lists.classList.remove('remove')
        }
        else{
            lists.classList.add('remove')
        }
    })
}
search.addEventListener('keyup', ()=>{
    const word = search.value.trim().toLowerCase();
    filter(word)
})