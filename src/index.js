import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class App extends React.Component {
    state = {
        reset: 'yes',
    }
    onClick = () => {
        this.setState({
            reset: this.state.reset === 'yes' ? 'no' : 'yes',
        })
    }
    render() {
        return (
            <h1>hello</h1>
        )
    }
}

ReactDOM.render(<App />, document.body);