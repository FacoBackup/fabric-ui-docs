import React from 'react';
import ReactDOM from 'react-dom';
import {Button, ThemeProvider} from 'mfc-core';

function App() {
    return (
        ///JSX
        <ThemeProvider>
            <Button variant="minimal-horizontal" color="primary">
                Hello World
            </Button>
            <Button variant="minimal-horizontal" color="secondary">
                Hello World
            </Button>
        </ThemeProvider>
        ///JSX-END
    );
}

ReactDOM.render(<App/>, document.querySelector('#app'));