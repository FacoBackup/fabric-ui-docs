import React from 'react';
import ReactDOM from 'react-dom';
import {Button, ThemeProvider} from 'mfc-core';

function App(props) {
    return (
        ///JSX
        <ThemeProvider>
            <Button variant="filled" color="primary">
                Hello World
            </Button>
        </ThemeProvider>
        ///JSX-END
    );
}

ReactDOM.render(<App/>, document.querySelector('#app'));