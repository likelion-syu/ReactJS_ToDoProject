import React , { useState } from 'react';
import '../../assets/scss/TodoPage/TodoPage.scss';

function TodoPage(props) {
    const [items , setItems] = useState(['Hello World' , 'Hi']);
    const [todo, setTodo] = useState('');

    function handleCreate(){
        if(todo.trim().length === 0){ alert('내용이 비어있습니다.'); return; }
        setItems([...items , todo]);
        setTodo('');
    }

    function handleChange(evt){
        setTodo(evt.target.value);
    }
    
    return (
        <div className="todopage-container divider divider-red">
            <h2>
                To-Do Project
            </h2>
            <hr/>
            <div className="todopage-input-container divider divider-orange">
                <div>
                    <label htmlFor="txtTodo">
                        할일 추가하기
                    </label>
                    <br/>
                    <input name="txtTodo" type="text" className="input" placeholder="할일을 입력해주세요" value={todo} onChange={ handleChange }></input>
                    <button typee='button' className="btn" onClick={ handleCreate }>
                        Add
                    </button>
                </div>
            </div>
            <hr/>
            <div className="todopage-list-container divider divider-green">
                <ul className="list divider divider-sienna">    
                    {
                        items.map((item, idx)=>{
                            return <li key={idx} className="item divider divider-blue">
                                <p className="item-desc">{ item }</p>
                            </li>
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default TodoPage;