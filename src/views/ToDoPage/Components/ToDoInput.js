import React , { useState } from 'react';

function ToDoInput(props) {
    const [ todo , setTodo ] = useState('');

    const handleSubmit = ()=>{
        if(todo.trim().length === 0){ alert('내용이 비어있습니다.'); return; }
        else{
            props.onCreate(todo);
            setTodo('');
        }
    }

    return (
        <div className="todopage-input-container divider divider-orange">
            <div>
                <div className="todo-input-group">
                    <input name="txtTodo" type="text" className="input" placeholder="할일을 입력해주세요" value={todo} onChange={(e)=>{
                        setTodo(e.target.value);
                    }}></input>
                    <button typee='button' className="btn" onClick={handleSubmit}>
                        추가
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ToDoInput;