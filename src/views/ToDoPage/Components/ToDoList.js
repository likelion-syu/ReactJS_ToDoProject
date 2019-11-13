import React from 'react';

import ToDoListItem from './ToDoListItem';

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