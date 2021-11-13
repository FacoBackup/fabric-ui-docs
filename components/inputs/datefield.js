import React, {useState} from "react";
import {DateField} from "mfc-core";
import CodeBlock from "../core/visualization/code_block/CodeBlock";

export default function datefield() {
    const [date, setDate] = useState(undefined)
    const example = (
        <>
            <DateField handleChange={(event) => setDate(event)} value={date} label={'Default'} width={'30%'}/>
            <DateField handleChange={(event) => setDate(event)} value={date} label={'Required'} required={true}
                       width={'30%'}/>
            <DateField handleChange={(event) => setDate(event)} value={date} label={'Disabled'} width={'30%'}
                       disabled={true}/>
        </>
    )
    const variants = (
        <>
            <DateField handleChange={(event) => console.log(event)} value={new Date().toLocaleDateString()}
                       label={'yyyy-dd-mm'} pattern={'yyyy-dd-mm'} width={'30%'}/>
            <DateField handleChange={(event) => console.log(event)} value={new Date().toLocaleDateString()}
                       label={'yyyy-mm-dd'} pattern={'yyyy-mm-dd'} width={'30%'}/>

            <DateField handleChange={(event) => console.log(event)} value={new Date().toLocaleDateString()}
                       label={'yyyy/dd/mm'} pattern={'yyyy/dd/mm'} width={'30%'}/>
            <DateField handleChange={(event) => console.log(event)} value={new Date().toLocaleDateString()}
                       label={'yyyy/mm/dd'} pattern={'yyyy/mm/dd'} width={'30%'}/>

            <DateField handleChange={(event) => console.log(event)} value={new Date().toLocaleDateString()}
                       label={'dd-mm-yyyy'} pattern={'dd-mm-yyyy'} width={'30%'}/>
            <DateField handleChange={(event) => console.log(event)} value={new Date().toLocaleDateString()}
                       label={'dd/mm/yyyy'} pattern={'dd/mm/yyyy'} width={'30%'}/>

            <DateField handleChange={(event) => console.log(event)} value={new Date().toLocaleDateString()}
                       label={'dd-mm-yyyy'} pattern={'dd-mm-yyyy'} width={'30%'}/>
            <DateField handleChange={(event) => console.log(event)} value={new Date().toLocaleDateString()}
                       label={'dd/mm/yyyy'} pattern={'dd/mm/yyyy'} width={'30%'}/>

            <DateField handleChange={(event) => console.log(event)} value={new Date().toLocaleDateString()}
                       label={'mm-dd-yyyy'} pattern={'mm-dd-yyyy'} width={'30%'}/>
            <DateField handleChange={(event) => console.log(event)} value={new Date().toLocaleDateString()}
                       label={'mm/dd/yyyy'} pattern={'mm/dd/yyyy'} width={'30%'}/>
        </>
    )
    const sizeVariants = (
        <>
            <DateField handleChange={(event) => console.log(event)}
                       label={'Default variant'} width={'30%'} size={'default'}/>
            <DateField handleChange={(event) => console.log(event)}
                       label={'Small variant'} width={'30%'} size={'small'}/>
            <DateField handleChange={(event) => console.log(event)}
                       label={'Custom css width'} width={'calc(30% + 0.5px)'}/>
        </>
    )
    const basicProps = (
        <>
            <DateField label={'Label prop'} disabled={true} width={'30%'} size={'default'} value={'01/01/2000'}
                       handleChange={() => null}/>
        </>
    )
    return [
        {
            headers: [
                {
                    content: 'Usage',
                    type: 'primary'
                },
                {
                    content: 'The DateField input is a versitile way to input data into your system.',
                    type: 'tertiary'
                }
            ],
            body: [
                {
                    content: `The DateField input is a complete package for managing dates, from parsing a value with a different format to validating the inputted data.<br>
                        In the example below you can see the two modes of interaction, the default one (not required) and the required one.<br>`,
                    type: 'text'
                },
                {
                    content: example,
                    type: 'native-code',
                },
                {content: `<b>Note:</b> The default variant is the not required one.`, type: 'text'},
                {
                    content: (
                        <CodeBlock language={'jsx'} width={'100%'}>
                            {example}
                        </CodeBlock>
                    ),
                    type: 'native-code'
                }
            ]
        },
        {
            headers: [
                {
                    content: 'Basic props',
                    type: 'primary'
                },
                {
                    content: 'For basic configuration purposes.',
                    type: 'tertiary'
                }
            ],
            body: [
                {
                    content: `Since dates come at different formats, the DateField input comes with a prop for setting up patters named <b><i>pattern</i></b>, e.g. :`,
                    type: 'text'
                },
                {
                    content: basicProps,
                    type: 'native-code',
                },
                {
                    content: `<b>Note:</b> The <b><i>handleChange</i></b> prop <b>is required</b>.`,
                    type: 'text'
                },
                {

                    content: (
                        <CodeBlock language={'jsx'} width={'100%'}>
                            {basicProps}
                        </CodeBlock>
                    ),
                    type: 'native-code'

                }
            ]
        },
        {
            headers: [
                {
                    content: 'Patterns',
                    type: 'primary'
                }
            ],
            body: [
                {
                    content: `Since dates come at different formats, the DateField input comes with a prop for setting up patters named <b><i>pattern</i></b>, e.g. :`,
                    type: 'text'
                },
                {
                    content: variants,
                    type: 'native-code',
                },
                {
                    content: `<b>Note:</b> The <b><i>pattern</i></b> prop is not required and by default the pattern will be <b>dd/mm/yyyy</b>.`,
                    type: 'text'
                },
                {

                    content: (
                        <CodeBlock language={'jsx'} width={'100%'}>
                            {variants}
                        </CodeBlock>
                    ),
                    type: 'native-code'

                }
            ]
        },
        {
            headers: [
                {
                    content: 'Dimensions',
                    type: 'primary'
                }
            ],
            body: [
                {
                    content: `The input supports two types of sizing, being those:`,
                    type: 'text'
                },
                {
                    content: `Vertical with <b><i>size</i></b>="small"or <b><i>size</i></b>="default". <br>
                              Horizontal with <b><i>width</i></b>="css width property".
`,
                    type: 'text'
                },
                {
                    content: `Since dates come at different formats, the DateField input comes with a prop for setting up patters named <b>pattern</b>, e.g. :`,
                    type: 'text'
                },
                {
                    content: sizeVariants,
                    type: 'native-code',
                },
                {
                    content: `<b>Note:</b> Both <b><i>size</i></b> and <b><i>width</i></b> props are <b>not</b> required and will default to "default" and "inherit" respectively`,
                    type: 'text'
                },
                {

                    content: (
                        <CodeBlock language={'jsx'} width={'100%'}>
                            {sizeVariants}
                        </CodeBlock>
                    ),
                    type: 'native-code'

                }
            ]
        }
    ]
}