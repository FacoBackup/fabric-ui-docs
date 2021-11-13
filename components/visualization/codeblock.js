import CodeBlock from "../core/visualization/code_block/CodeBlock";
import {Button} from "mfc-core";
import json from '../../public/example.json'
export default function codeblock() {
    const variants = (
        <>
            <Button>
                Button Example
            </Button>
        </>
    )
    return [
        {
            headers: [
                {
                    content: 'CodeBlock usage',
                    type: 'primary'
                }
            ],
            body: [
                {
                    content: 'The <b>CodeBlock</b> component is meant to be used as a documentation or data display tool, it is easy and fast to setup, e.g. :',
                    type: 'text'
                },
                {
                    content: variants,
                    type: 'native-code'
                },
                {
                    content: (
                        <CodeBlock language={'jsx'} width={'100%'}>
                            <CodeBlock language={'jsx'} width={'100%'}>
                                {variants}
                            </CodeBlock>
                        </CodeBlock>
                    ),
                    type: 'native-code'
                },
                {
                    content: (
                        <CodeBlock language={'json'} json={json} width={'100%'}/>
                    ),
                    type: 'native-code'
                },
                {
                    content: '<b>Note:</b> The examples above are utilizing the component to parse the content.',
                    type: 'text'
                },
            ]
        },
    ]
}