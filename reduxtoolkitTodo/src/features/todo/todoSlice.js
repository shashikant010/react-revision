import { createSlice , nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[{id:1,text:"hello world"}]
}

export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo ={
                id: nanoid(),
                text:action.payload   //we can aslo write action.payload as text is same
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
        },

    }
})

export const {addTodo,removeTodo}=todoSlice.actions

export default todoSlice.reducer