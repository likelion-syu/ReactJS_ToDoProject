import React from 'react';

function ToDoListItem(props) {
    return (
        <li  className="item divider divider-blue">
            <p className="item-desc">{ props.data }</p>
        </li>
    );
}

export default ToDoListItem;