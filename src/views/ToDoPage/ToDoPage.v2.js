import React , { useState } from 'react';
import '../../assets/scss/TodoPage/TodoPage.scss';

// 이 예제에서는 ToDo를 여러 컴포넌트로 분리합니다.
// 아래 컴포넌트들은 삽입부와 리스트부를 나누어 둔 것 입니다.
import ToDoInput from './Components/ToDoInput';
import ToDoList from './Components/ToDoList';

function TodoPage(props) {
    // 입력에 관련된 값은 굳이 ToDo페이지 자체에서 가질 필요없으므로 
    // 제외하고 items만 관리합니다.
    const [items , setItems] = useState(['Hello World' , 'Hi']);
    
    const handleCreate = (data)=>{
        if(data.trim().length >= 0){
            setItems([...items,data]);
        }
    }

    return (
        <div className="">
            <div className="todopage-container divider divider-red">
                <h2>
                    To-Do Project
                </h2>
                <hr/>
                {/* 이 부분은 ToDoInput.js을 찾아 들어가면 만날 수 있습니다. */}
                {/* 특이한 점은 onCreate라는 이름으로 함수를 자식 컴포넌트에게 넘겨주는 것 입니다. */}
                {/* 부모 컴포넌트의 함수를 자식 컴포넌트에게 넘겨주면 자식 컴포넌트가 부모 컴포넌트 기능을 쓸 수 있습니다. */}
                <ToDoInput onCreate={handleCreate}/>
                <hr/>
                {/* 이 부분은 ToDoList.js을 찾아 들어가면 만날 수 있습니다. */}
                {/* List로 출력할 아이템들은 items에 해당됩니다. */}
                <ToDoList items={items}/>
            </div>
        </div>
    );
}

export default TodoPage;