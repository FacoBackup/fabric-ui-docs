import React from 'react';
import ReactDOM from 'react-dom';
import {Button, MfcWrapper} from 'mfc-core';

function App() {
    return (
        ///JSX
        <MfcWrapper>
            <Button variant="outlined" color="primary">
                Hello World
            </Button>
            <Button variant="outlined" color="secondary">
                Hello World
            </Button>
        </MfcWrapper>
        ///JSX-END
    );
}

ReactDOM.render(<App/>, document.querySelector('#app'));