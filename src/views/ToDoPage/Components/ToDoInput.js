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
                <label htmlFor="txtTodo">
                    할일 추가하기
                </label>
                <br/>
                <input name="txtTodo" type="text" className="input" placeholder="할일을 입력해주세요" value={todo} onChange={(e)=>{
                    setTodo(e.target.value);
                }}></input>
                <button typee='button' className="btn" onClick={handleSubmit}>
                    Add
                </button>
            </div>
        </div>
    );
}

export default ToDoInput;