import React from 'react';
import ReactDOM from 'react-dom';
import {Button, MfcWrapper} from 'mfc-core';

function App() {
    return (
        ///JSX
        <MfcWrapper>
            <Button variant="minimal-horizontal" color="primary">
                Hello World
            </Button>
            <Button variant="minimal-horizontal" color="secondary">
                Hello World
            </Button>
        </MfcWrapper>
        ///JSX-END
    );
}

ReactDOM.render(<App/>, document.querySelector('#app'));