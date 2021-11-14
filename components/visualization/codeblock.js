import CodeBlock from "../core/visualization/code_block/CodeBlock";
import {Button} from "mfc-core";

import useFile from "../core/misc/useFile";

export default function codeblock() {
    const example = useFile('./codeblock/codeBlockUsage.js', false)
    const exampleJson = useFile('./example.json', true)
    return [
        {
            headers: [
                {
                    content: 'CodeBlock basic usage',
                    type: 'primary'
                }
            ],
            body: [
                {
                    content: 'The <b>CodeBlock</b> component is meant to be used as a documentation or data display tool, it is easy and fast to setup, e.g. :',
                    type: 'text'
                },

                {
                    content: 'Javascript + jsx example:',
                    type: 'text'
                },
                {
                    content: (
                        <CodeBlock language={'javascript'} data={example} width={'100%'}/>
                    ),
                    type: 'native-code'
                },
                {
                    content: 'Json example:',
                    type: 'text'
                },
                {
                    content: (
                        <CodeBlock language={'json'} data={exampleJson} width={'100%'}/>
                    ),
                    type: 'native-code'
                },
            ]
        },
        {
            headers: [
                {
                    content: 'Props',
                    type: 'primary'
                }
            ],
            body: [
                {
                    content: 'To setup a <b>CodeBlock</b> you will need the to pass following props to the component, being those:',
                    type: 'text'
                },
                {
                    content: '<i><b>width</b></i>: css width attribute;',
                    type: 'text'
                },
                {
                    content: '<i><b>data <span style="color: #ff5555">[required]</b></i>: the code as string <small>[if you are using jsx or javascript]</small> or a parsed json object;',
                    type: 'text'
                },
                {
                    content: '<i><b>language <span style="color: #ff5555">[required]</span></b></i>: "javascript", "jsx" or "json";',
                    type: 'text'
                },
                {
                    content: (
                        <CodeBlock language={'javascript'} data={example} width={'100%'}/>
                    ),
                    type: 'native-code'
                }
            ]
        },
    ]
}