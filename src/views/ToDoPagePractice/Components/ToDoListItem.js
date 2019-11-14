import React from 'react';

// 이 컴포넌트는 Props로 값을 받아서 바인드만 합니다.

function ToDoListItem(props) {
    return (
        <li  className="item divider divider-blue">
            <p className="item-desc">
                {/* 이 부분에 Props값이 필요합니다. */}
            </p>
        </li>
    );
}

export default ToDoListItem;