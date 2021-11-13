import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'mfc-core';

function App() {
    return (
        <Button variant="filled" color="primary">
            Hello World
        </Button>
    );
}

ReactDOM.render(<App />, document.querySelector('#app'));