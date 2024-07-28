import { createContext, useContext } from "react";


export const TodoContext= createContext({
    todos:[
        {
            id:1,
            todo:'My Todo',
            completed:false
        }
    ],
    addTodo:(msg)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}

});

export const useTodo=()=>{
    return useContext(TodoContext);
}

export const TodoProvider=TodoContext.Provider;

