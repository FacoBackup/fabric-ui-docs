import React from 'react';
import ReactDOM from 'react-dom';
import {MfcWrapper, useFile} from 'mfc-core';
import CodeBlock from "../../components/core/visualization/code_block/CodeBlock";

function App() {
    const exampleJSFile= useFile('./example.js')
    return (
        ///JSX
        <MfcWrapper>
            <CodeBlock width={'100%'} data={exampleJSFile} language={'javascript'}/>
        </MfcWrapper>
        ///JSX-END
    );
}

ReactDOM.render(<App/>, document.querySelector('#app'));