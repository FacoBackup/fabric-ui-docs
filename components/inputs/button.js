import {Button} from "mfc-core";
import CodeBlock from "../core/visualization/code_block/CodeBlock";
import useFile from "../core/misc/useFile";

export default function button() {
    const minimal = useFile('./button/minimal.js')
    const defaultEx = useFile('./button/default.js')
    const filled = useFile('./button/filled.js')
    const minimalHorizontal = useFile('./button/minimalHorizontal.js')
    const outlined = useFile('./button/outlined.js')
    const all = useFile('./button/all.js')

    const variants = (
        <>
            <Button variant={'default'}>
                Base
            </Button>
            <Button variant={'outlined'}>
                Outlined
            </Button>
            <Button variant={'filled'}>
                Filled
            </Button>
            <Button variant={'minimal'}>
                Minimal
            </Button>
            <Button variant={'minimal-horizontal'}>
                Minimal horizontal
            </Button>
        </>
    )
    const states = (variant) => (
        <>
            <Button variant={variant}>
                Base {variant.includes('minimal') ? ' minimal' : ''}
            </Button>
            <Button disabled={true} variant={variant}>
                Disabled {variant.includes('minimal') ? ' minimal' : ''}
            </Button>
            <Button highlight={true} variant={variant}>
                Highlighted {variant.includes('minimal') ? ' minimal' : ''}
            </Button>
            <Button highlight={true} variant={variant} color={'secondary'}>
                Highlighted secondary {variant.includes('minimal') ? ' minimal' : ''}
            </Button>
        </>
    )
    return [{
        headers: [
            {
                content: 'Button component usage',
                type: 'primary'
            },
            {
                content: 'The button is a versatile component that can be used in many places',
                type: 'tertiary'
            }
        ],
        body: [
            {
                content: variants,
                type: 'native-code'
            },
            {
                content: (
                    <CodeBlock language={'javascript'} width={'100%'} data={all}/>
                ),
                type: 'native-code'
            }
        ]
    },
        {
            headers: [
                {
                    content: 'Base button',
                    type: 'primary'
                },
                {
                    content: 'Clean, less visual information when interacted.',
                    type: 'tertiary'
                }
            ],
            body: [
                {
                    content: states('default'),
                    type: 'native-code'
                },
                {
                    content: (
                        <CodeBlock language={'javascript'} width={'100%'} data={defaultEx}/>
                    ),
                    type: 'native-code'
                }
            ]
        },
        {
            headers: [
                {
                    content: 'Outlined button',
                    type: 'primary'
                },
                {
                    content: 'Visually identifiable, medium visual information.',
                    type: 'tertiary'
                }
            ],
            body: [
                {
                    content: states('outlined'),
                    type: 'native-code'
                },
                {
                    content: (
                        <CodeBlock language={'javascript'} width={'100%'} data={outlined}/>
                    ),
                    type: 'native-code'
                }
            ]
        },
        {
            headers: [
                {
                    content: 'Filled button',
                    type: 'primary'
                },
                {
                    content: 'Attention grabbing, high visual information.',
                    type: 'tertiary'
                }
            ],
            body: [
                {
                    content: states('filled'),
                    type: 'native-code'
                },
                {
                    content: (
                        <CodeBlock language={'javascript'} width={'100%'} data={filled}/>
                    ),
                    type: 'native-code'
                }
            ]
        },
        {
            headers: [
                {
                    content: 'Minimal buttons',
                    type: 'primary'
                },
                {
                    content: 'Clean, medium visual information when interacted.',
                    type: 'tertiary'
                }
            ],
            body: [
                {
                    content: states('minimal'),
                    type: 'native-code'
                },
                {
                    content: (
                        <CodeBlock language={'javascript'} width={'100%'} data={minimal}/>
                    ),
                    type: 'native-code'
                }
            ]
        },
        {
            headers: [
                {
                    content: 'Horizontal minimal button',
                    type: 'primary'
                },
                {
                    content: 'Clean, medium visual information when interacted. Perfect for side-bars',
                    type: 'tertiary'
                }
            ],
            body: [
                {
                    content: states('minimal-horizontal'),
                    type: 'native-code'
                },
                {
                    content: (
                        <CodeBlock language={'javascript'} width={'100%'} data={minimalHorizontal}/>
                    ),
                    type: 'native-code'
                }
            ]
        },
    ]
}