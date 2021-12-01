import CodeBlock from "../../../components/core/visualization/code_block/CodeBlock";
import {useFile} from "mfc-core";
import {useEffect, useState} from "react";
import axios from "axios";

export default function codeblock() {
    const example = useFile('./codeblock/codeBlockUsage.js', false)
    const [exampleJson, setExampleJson] = useState({})
    useEffect(() => {
         axios({
             method: 'get',
             url: 'https://jsonplaceholder.typicode.com/users'
         }).then(res => setExampleJson(res.data.splice(1, 2)))
    }, [])

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
                    type: 'any'
                },
                {
                    content: 'Json example:',
                    type: 'text'
                },
                {
                    content: (
                        <CodeBlock language={'json'} data={exampleJson} width={'100%'}/>
                    ),
                    type: 'any'
                },
                {
                    content: 'JSON data provided by <a href="https://jsonplaceholder.typicode.com/">JSONPlaceholder</a>',
                    type: 'text'
                }

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
                    type: 'any'
                }
            ]
        },
        {
            headers: [
                {
                    content: 'JSX inside a Javascript code',
                    type: 'primary'
                }
            ],
            body: [
                {
                    content: 'In order for the highlight to work you will need to wrap your JSX code inside the following markers:',
                    type: 'text'
                },
                {
                    content: '&nbsp;&nbsp;<b>///JSX</b>: Start of the JSX code.',
                    type: 'text'
                },
                {
                    content: '&nbsp;&nbsp;<b>///JSX-END</b>: End of the JSX code.',
                    type: 'text'
                },
                {
                    content: '<b>Note</b>: if you don\'t provide these markers the jsx code will be interpreted as normal javascript (no syntax highlight)',
                    type: 'text'
                }
            ]
        },
    ]
}