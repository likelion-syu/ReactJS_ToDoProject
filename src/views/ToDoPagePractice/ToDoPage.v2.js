import React , { useState } from 'react';
import '../../assets/scss/TodoPage/TodoPage.scss';

// 이 예제에서는 ToDo를 여러 컴포넌트로 분리합니다.
// 아래 컴포넌트들은 삽입부와 리스트부를 나누어 둔 것 입니다.
import ToDoInput from './Components/ToDoInput';
import ToDoList from './Components/ToDoList';

function TodoPage(props) {
    // 입력에 관련된 값은 굳이 ToDo페이지 자체에서 가질 필요없으므로 
    // 제외하고 items만 관리합니다.
    const [items , setItems] = useState([]);
    
    const handleCreate = (data)=>{
        // 데이터가 넘어왔을 때 작동이 필요합니다. 
    }

    return (
        <div className="">
            <div className="todopage-container divider divider-red">
                <h2>
                    To-Do Project
                </h2>
                <hr/>
                <ToDoInput onCreate={handleCreate}/>
                <hr/>
                <ToDoList items={items}/>
            </div>
        </div>
    );
}

export default TodoPage;