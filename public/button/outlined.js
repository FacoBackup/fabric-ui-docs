import React from 'react';
import ReactDOM from 'react-dom';
import {Button, ThemeProvider} from 'mfc-core';

function App() {
    return (
        ///JSX
        <ThemeProvider>
            <Button variant="outlined" color="primary">
                Hello World
            </Button>
            <Button variant="outlined" color="secondary">
                Hello World
            </Button>
        </ThemeProvider>
        ///JSX
    );
}

ReactDOM.render(<App/>, document.querySelector('#app'));