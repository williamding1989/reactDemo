import React, { Component } from 'react';

class Header extends Component {
    shouldComponentUpdate(nextProps) {
        if (nextProps.header === this.props.header) {
            return false;
        } else {
            return true;
        }
    }

    render() {
        const { header } = this.props;
        console.log('render header');
        return <div style={{ color: 'blue' }}>{header}</div>;
    }
}

export default Header;
