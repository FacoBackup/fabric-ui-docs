export default function installation() {
    return [{
        headers: [
            {
                content: 'NPM installation',
                type: 'primary'
            },
            {
                content: 'Follow the instructions bellow for a easy way to install the package on your current React project.',
                type: 'tertiary'
            }
        ],
        body: [
            {
                content: 'To complete the installation of <b>mfc-core</b> you first need to add the peer dependencies to your <b>package.json</b>:',
                type: 'text'
            },
            {
                content: '' +
                    '// with npm\n' +
                    'npm install axios react-input-mask prop-types\n' +
                    '\n' +
                    '// with yarn\n' +
                    'yarn add axios react-input-mask prop-types',

                type: 'pre-formatted',
                float: 'stretch'
            },
            {
                content: 'After the installation is completed you can install the package itself by running:',
                type: 'text'
            },
            {
                content: '' +
                    '// with npm\n' +
                    'npm install mfc-core\n' +
                    '\n' +
                    '// with yarn\n' +
                    'yarn add mfc-core',

                type: 'pre-formatted',
                float: 'stretch'
            },
        ]
    },
        {
            headers: [
                {
                    content: 'Basic usage',
                    type: 'primary'
                }
            ],
            body: [
                {
                    content:
                        `
import React from 'react'; 
import ReactDOM from 'react-dom';
import {Button} from 'mfc-core';

function App() {
  return (
    <Button variant="filled" color="primary">
      Hello World
    </Button>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));`,
                type: 'pre-formatted',
                    float: 'stretch'
                }
            ]
        }
    ]
}