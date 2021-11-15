import React from 'react';
import ReactDOM from 'react-dom';
import {Button, ThemeProvider} from 'mfc-core';

function App() {
    return (
        ///JSX
        <ThemeProvider>
            <Button color="primary">
                Hello World
            </Button>
            <Button color="secondary">
                Hello World
            </Button>
        </ThemeProvider>
        ///JSX-END
    );
}

ReactDOM.render(<App/>, document.querySelector('#app'));