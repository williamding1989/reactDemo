import React, { Component } from 'react';
import _ from 'lodash';

class List extends Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps) {
        console.log(
            'nextProps:',
            nextProps.list,
            'this.props:',
            this.props.list
        );
        if (_.isEqual(nextProps.list, this.props.list)) {
            return false; // 相等，不渲染
        } else {
            return true;
        }
    }

    render() {
        const { list } = this.props;
        console.log('render List');
        return list.map((v, i) => (
            <div style={{ color: 'blue' }} key={i}>
                List:{v}
            </div>
        ));
    }
}

export default List;
