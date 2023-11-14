const list = document.querySelector('#list')
const btn = document.querySelector('#addTodo')
const inputText = document.querySelector('#input')


const todos = [
    {
        id: 1,
        text: 'Take out trash',
        completed: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        completed: false
    }
]


const handleFunction = () => {
    list.innerHTML = `
${todos.map(todo => {
        return ` <li> 
           <input type="checkbox" ${todo.completed ? 'checked' : ''}/>  
           <span>${todo.text}</span>  
           </li>           
` 
    }).join('')
    }`
}

btn.addEventListener('click', () => {
    console.log(inputText.value)
    let obj = {
        id: todos.length + 1,
        text: inputText.value,
        completed: false
    }
    console.log(todos)
    todos.push(obj)
    return handleFunction()
})
handleFunction()



