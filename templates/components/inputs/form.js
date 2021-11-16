export default function form() {
    return [{
        headers: [
            {
                content: 'npm installation',
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
                    'npm install @material-ui/core @material-ui/icons axios react-input-mask\n' +
                    '\n' +
                    '// with yarn\n' +
                    'yarn add @material-ui/core @material-ui/icons axios react-input-mask',

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
        ],
        alert: '<b>Warning</b>: this is not a production ready package, it is still in deep development and many things may change overtime.',
    }]
}