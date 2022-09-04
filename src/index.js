/*
 * @Author: shimingxia
 * @Date: 2022-08-24 18:57:31
 * @LastEditors: shimingxia
 * @LastEditTime: 2022-08-26 14:41:08
 * @Description: 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Routes, Route, Link} from 'react-router-dom'
import {HistoryRouter} from './redux-first-history/rr6'
import {Provider} from 'react-redux'
import {store, history} from './store'
import Home from './components/Home'
import Counter from './components/Counter'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}> 
        <HistoryRouter history={history}>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/counter'>Counter</Link></li>
          </ul>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/counter' element={<Counter />}></Route>
          </Routes>
        </HistoryRouter>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
