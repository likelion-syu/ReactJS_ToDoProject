import React from 'react';

// 이 컴포넌트는 Props로 값을 받아서 바인드만 합니다.

function ToDoListItem(props) {
    return (
        <li  className="item divider divider-blue">
            <p className="item-desc">{ props.data }</p>
        </li>
    );
}

export default ToDoListItem;