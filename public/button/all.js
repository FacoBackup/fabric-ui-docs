import React from 'react';
import ReactDOM from 'react-dom';
import {Button, MfcWrapper} from 'mfc-core';

function App() {
    return (
        ///JSX
        <MfcWrapper>
            <Button variant={'default'}>
                Base
            </Button>
            <Button variant={'outlined'}>
                Outlined
            </Button>
            <Button variant={'filled'}>
                Filled
            </Button>
            <Button variant={'minimal'}>
                Minimal
            </Button>
            <Button variant={'minimal-horizontal'}>
                Minimal horizontal
            </Button>
        </MfcWrapper>
        ///JSX-END
    );
}

ReactDOM.render(<App/>, document.querySelector('#app'));