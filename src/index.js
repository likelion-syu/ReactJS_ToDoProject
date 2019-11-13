import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import TodoPageV1 from './views/ToDoPage/ToDoPage.v1';
import TodoPageV2 from './views/ToDoPage/ToDoPage.v2';

ReactDOM.render(<TodoPageV2 />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
