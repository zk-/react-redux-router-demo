import React from 'react';
import { Link } from "react-router";
import { Popover, Button } from 'antd';
class Test extends React.Component {
    render() {
        const { test } = this.props;
        return (
            <div>
                <h1>{test}</h1>
                <Link to="test">test</Link>
                <Popover content="test" title="Title">
                    <Button type="primary">Hover me</Button>
                </Popover>
            </div>
        );
    }
}

export default Test;