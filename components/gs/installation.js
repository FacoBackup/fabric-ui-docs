import useFile from "../core/misc/useFile";
import CodeBlock from "../core/visualization/code_block/CodeBlock";

export default function installation() {
    const ex = useFile('./example.js')
    return [{
        headers: [
            {
                content: 'NPM installation',
                type: 'primary'
            },
            {
                content: 'Follow the instructions below for a easy way to install the package on your current React project.',
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
                    content: 'To setup any component from the <b>mfc-core</b> package it\'s recomended that you wrap everything inside the <b>ThemeProvider</b> component, this will insure that your whole app have the same color pallet applied.',
                    type: 'text'
                },
                {
                    content: 'As you can see from the example below, it is pretty easy to get started',
                    type: 'text'
                },
                // {
                //     content: 'See more about the <b>ThemeProvider</b> component <a>here</a>.',
                //
                //     type: 'text'
                // },

                {

                    content: <CodeBlock language={'javascript'} data={ex} width={'100%'}/>,
                    type: 'native-code',
                }
            ]
        }
    ]
}