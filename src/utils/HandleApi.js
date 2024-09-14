import axios from "axios"

const baseUrl= "https://todo-backend-w0km.onrender.com"

const getAllToDo = (setToDo)=>{
    axios.get(baseUrl).then(({data})=>{
        console.log('data :', data)
        setToDo(data)
    })
}

const  addTodo = (text,setText,setToDo) =>{
    axios.post(`${baseUrl}/save`,{text}).then((data)=>{
        console.log(data);
        setText("")
        getAllToDo(setToDo)
    })
}

const  updateTodo = (toDoId,text,setText,setToDo ,setIsUpdating) =>{
    axios.put(`${baseUrl}/update`,{_id:toDoId,text}).then((data)=>{
        console.log(data);
        setText("")
        setIsUpdating(false)
        getAllToDo(setToDo)
    }).catch((err)=>{console.log(err)})
}

const  deleteToDo = (_id,setToDo ) =>{
    axios.post(`${baseUrl}/delete`,{_id}).then((data)=>{
        console.log(data)
        getAllToDo(setToDo)
    }).catch((err)=>{console.log(err)})
}
export {getAllToDo, addTodo, updateTodo, deleteToDo}