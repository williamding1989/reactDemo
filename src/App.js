import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';
import Header from './Header';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [1, 2, 3],
            header: 'HeaderTitle'
        };
        this.push = this.push.bind(this);
    }

    componentDidMount() {
        // let a = 12;
    }

    push = () => {
        const { list } = this.state;
        list.push(9);
        this.setState({
            list
        });
    };

    render() {
        return (
            <div className="App">
                <div className="App-header" onClick={this.push}>
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <Header header={this.state.header}></Header>
                <List list={this.state.list}></List>
            </div>
        );
    }
}

export default App;
