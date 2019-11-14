// 리액트 컴포넌트 구성에 필요한 요소들을 불러옵니다.
import React , { useState } from 'react';
// 현재 컴포넌트를 꾸미기 위한 css를 가져옵니다.
import '../../assets/scss/TodoPage/TodoPage.scss';

// TodoPage를 그려줄 Component를 선언합니다.
function TodoPage(props) {
    // UI와 연관있는 변수들을 선언합니다.
    const [items , setItems] = useState(['Hello World' , 'Hi']);
    const [todo, setTodo] = useState('');

    // ADD 버튼을 클릭했을 때 실행될 함수를 선언합니다.
    function handleCreate(){
        
    }

    // Input이 변경될 때 실행될 함수를 선언합니다.
    function handleChange(evt){
        
    }
    
    // 이곳의 괄호[( , )]사이 내용이 index.js의 <ToDoPageV2/>에 대체됩니다.
    // return 괄호 안에는 반드시 적어도 하나의 요소가 존재해야 합니다.
    return (
        <div className="no-divider">
            <div className="todopage-container divider divider-red">
                <h2>
                    To-Do Project
                </h2>
                <hr/>
                <div className="todopage-input-container divider divider-orange">
                    <div>
                        <div className="todo-input-group">
                            <input 
                                name="txtTodo" type="text" placeholder="할일을 입력해주세요" 
                                className="input"
                                // 값이 변경될 때마다 변수에 저장해주어야 합니다.
                            >    
                            </input>
                            <button 
                                typee='button' className="btn" 
                                // 버튼을 클릭했을 떄 실행될 내용이 필요합니다.
                                >
                                추가
                            </button>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="todopage-list-container divider divider-green">
                    <ul className="list divider divider-sienna">
                        {/* 주의하십쇼 머리 터짐 */}
                        {/* 해당 부분이 제일 어렵습니다. */}
                        {
                            // 요 부분에 리스트가 표현되어야 합니다.
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default TodoPage;