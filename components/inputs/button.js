import {Button} from "mfc-core";

export default function button() {
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
                content: (
                    <div style={{display: 'flex', gap: '4px', justifyContent: 'center'}}>
                        {variants}
                    </div>
                ),
                type: 'native-code'
            },
            {
                content: variants,
                type: 'code',
                float: 'stretch'
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
                    content: (
                        <div style={{display: 'flex', gap: '4px', justifyContent: 'center'}}>
                            {states('default')}
                        </div>
                    ),
                    type: 'native-code'
                },
                {
                    content: states('default'),
                    type: 'code',
                    float: 'stretch'
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
                    content: (
                        <div style={{display: 'flex', gap: '4px', justifyContent: 'center'}}>
                            {states('outlined')}
                        </div>
                    ),
                    type: 'native-code'
                },
                {
                    content: states('outlined'),
                    type: 'code',
                    float: 'stretch'
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
                    content: (
                        <div style={{display: 'flex', gap: '4px', justifyContent: 'center'}}>
                            {states('filled')}
                        </div>
                    ),
                    type: 'native-code'
                },
                {
                    content: states('filled'),
                    type: 'code',
                    float: 'stretch'
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
                    content: (
                        <div style={{display: 'flex', gap: '4px', justifyContent: 'center'}}>
                            {states('minimal')}
                        </div>
                    ),
                    type: 'native-code'
                },
                {
                    content: states('minimal'),
                    type: 'code',
                    float: 'stretch'
                },
                {
                    content: (
                        <div style={{display: 'flex', gap: '4px', justifyContent: 'center'}}>
                            {states('minimal-horizontal')}
                        </div>
                    ),
                    type: 'native-code'
                },
                {
                    content: states('minimal-horizontal'),
                    type: 'code',
                    float: 'stretch'
                }
            ]
        }
    ]
}