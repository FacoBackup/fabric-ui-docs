import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from 'mfc-core';
import useFile from "../../components/core/misc/useFile";
import CodeBlock from "../../components/core/visualization/code_block/CodeBlock";

function App() {
    const exampleJSFile= useFile('./example.js')
    return (
        ///JSX
        <ThemeProvider>
            <CodeBlock width={'100%'} data={exampleJSFile} language={'javascript'}/>
        </ThemeProvider>
        ///JSX-END
    );
}

ReactDOM.render(<App/>, document.querySelector('#app'));