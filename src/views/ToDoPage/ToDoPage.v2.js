import React , { useState } from 'react';
import '../../assets/scss/TodoPage/TodoPage.scss';

import ToDoInput from './Components/ToDoInput';
import ToDoList from './Components/ToDoList';

function TodoPage(props) {
    const [items , setItems] = useState(['Hello World' , 'Hi']);
    
    const handleCreate = (data)=>{
        if(data.trim().length >= 0){
            setItems([...items,data]);
        }
    }

    return (
        <div className="todopage-container divider divider-red">
            <h2>
                To-Do Project
            </h2>
            <hr/>
            <ToDoInput onCreate={handleCreate}/>
            <hr/>
            <ToDoList items={items}/>
        </div>
    );
}

export default TodoPage;