import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import './index.scss';
import App from './App';

const store = createStore(rootReducer);
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();


render(
    <Provider store={store}>
        <App>text</App>
    </Provider>,
    document.getElementById('root')
)

