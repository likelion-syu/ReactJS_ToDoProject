import React from 'react';

import ToDoListItem from './ToDoListItem';

function ToDoList(props) {
    const items = props.items;

    return (
        <div className="todopage-list-container divider divider-green">
            <ul className="list divider divider-sienna">    
                {/* 해당 부분에 리스트 아이템을 보여주어야 합니다. */}
            </ul>
        </div>
    );
}

export default ToDoList;