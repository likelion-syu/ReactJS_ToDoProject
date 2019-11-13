import React from 'react';

// 자식 요소로 표현할 아이템들을 또 불러와줍니다.
import ToDoListItem from './ToDoListItem';

// map을 사용하는 것은 똑같지만 아이템을 props로 전달받아서 보여주는 것이 다릅니다.

function ToDoList(props) {
    const items = props.items;
    return (
        <div className="todopage-list-container divider divider-green">
            <ul className="list divider divider-sienna">    
                {
                    items.map((item, idx)=>{
                        return <ToDoListItem key={idx} data={ item }/>
                    })
                }
            </ul>
        </div>
    );
}

export default ToDoList;