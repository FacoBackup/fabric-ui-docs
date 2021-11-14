import React from 'react';
import ReactDOM from 'react-dom';
import {Button, ThemeProvider} from 'mfc-core';

function App() {
    return (
        ///JSX
        <ThemeProvider>
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
        </ThemeProvider>
        ///JSX
    );
}

ReactDOM.render(<App/>, document.querySelector('#app'));