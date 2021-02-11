import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";
// import {compose, createStore} from "redux";
// import {rootReducer} from "./redux/rootReducer";
// import {Provider} from 'react-redux'

// const store = createStore(rootReducer, compose(
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// ))
// const a = (
//     <Provider store={store}>
//         <App/>
//     </Provider>
// )

ReactDOM.render(<App />, document.getElementById("root"));