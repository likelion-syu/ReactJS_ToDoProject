import React , { useState } from 'react';

function ToDoInput(props) {
    // ToDo 변수가 필요합니다.

    const handleSubmit = ()=>{
        // 추가 버튼을 클릭했을때 실행될 내용이 필요합니다.
    }

    return (
        <div className="todopage-input-container divider divider-orange">
            <div>
                <div className="todo-input-group">
                    <input name="txtTodo" type="text" className="input" placeholder="할일을 입력해주세요"></input>
                    <button typee='button' className="btn" onClick={handleSubmit}>
                        추가
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ToDoInput;