import React from 'react'
import ReactDom from 'react-dom'

import Routes from './config/routes'

require('./index.css');

class App extends React.Component {
    render(){
        return (
            <div>
                <h1>Hello World</h1>
                <MainContainer />
            </div>
        )
    }
}

ReactDom.render(
    <Routes />, document.getElementById('app')
)

