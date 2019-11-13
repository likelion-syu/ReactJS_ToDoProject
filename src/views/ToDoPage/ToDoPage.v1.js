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
        if(todo.trim().length === 0){ alert('내용이 비어있습니다.'); return; }
        setItems([...items , todo]);
        setTodo('');
    }

    // Input이 변경될 때 실행될 함수를 선언합니다.
    function handleChange(evt){
        setTodo(evt.target.value);
    }
    
    // 이곳의 괄호[( , )]사이 내용이 index.js의 <ToDoPageV2/>에 대체됩니다.
    // return 괄호 안에는 반드시 적어도 하나의 요소가 존재해야 합니다.
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
                    <input 
                        name="txtTodo" type="text" placeholder="할일을 입력해주세요" 
                        // 리액트에서는 class 대신 className을 사용합니다. 그냥 그렇습니다.
                        className="input"
                        // input의 값으로 사용할 변수를 할당해 줍니다.
                        // 리액트에서 Component의 변수를 HTML의 값으로 사용할때는 {}로 감싸야합니다.
                        value={todo} 
                        // input의 값이 변경될때마다 (텍스트가 입력될때마다) 'handleChange'함수가 자동으로 실행되도록 합니다.
                        onChange={ handleChange }>    
                    </input>
                    <button 
                        typee='button' className="btn" 
                        // 버튼을 클릭했을때 handleCreate함수를 실행하도록합니다.
                        onClick={ handleCreate }>
                        Add
                    </button>
                </div>
            </div>
            <hr/>
            <div className="todopage-list-container divider divider-green">
                <ul className="list divider divider-sienna">
                    {/* 주의하십쇼 머리 터짐 */}
                    {/* 해당 부분이 제일 어렵습니다. */}
                    {
                        // { } 로 감쌌기 때문에 지금부터는 JSX내에서 (리액트의 HTML 내에서)
                        // 자바스크립트를 사용할 수 있게 되었습니다.
                        // 아래 함수는 ES5부터 추가된 Array 객체의 내장 함수입니다. 
                        // 배열.map 함수는 배열 내 모든 요소를 하나씩 탐색하는 함수입니다. 
                        // 파라미터는 아래와 같습니다.
                        // 배열.map( (현재_아이템 , 인덱스) =>{  함수내용  } )
                        items.map((item, idx)=>{
                            // 이 map 함수가 JSX가 결합될 경우 return에 HTML 요소를 return할 수 있습니다.
                            // 즉 배열에 있는 요소들을 하나씩 반복하며, 배열안에 요소 갯수만큼 HTML을 생성하는 것입니다.
                            // 굳이 이렇게 하는 경우는 당연히 배열의 내용을 HTML안에 bind하기 위함입니다.
                            return <li  className="item divider divider-blue" 
                                        // map함수로 HTML을 만드는 경우 각 요소가 서로 구분될 수 있도록, key라는 값을 주어야 합니다.
                                        // 그냥 그렇다고 합니다.
                                        key={idx} >
                                {/* 이제 {} 을 이용해서 item(배열 요소)를 bind합니다. */}
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