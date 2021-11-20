import CodeBlock from "../../../components/core/visualization/code_block/CodeBlock";
import React from "react";
import NavigationRail from "../../../components/core/navigation/rail/NavigationRail";
import RailActionWrapper from "../../../components/core/navigation/rail/RailActionWrapper";
import RailActionButton from "../../../components/core/navigation/rail/RailActionButton";
import {useFile} from "mfc-core";

export default function rail() {
    const exampleCode = useFile('./rail/example.js')
    const placementCode = useFile('./rail/placement.js')
    const example = (
        <div style={{
            background: 'var(--mfc-background-secondary)',
            width: '100%',
            height: '500px',
            border: 'var(--mfc-border-primary) 1px solid',
            borderRadius: '5px',
            overflow: 'hidden',

        }}>
            <NavigationRail>
                <RailActionWrapper
                    styles={{padding: '2px', background: '#f4f5fa', borderRadius: '8px', fontSize: '.8rem'}}>
                    <img src={'./react-logo.png'} alt={'React'} style={{width: '100%'}}/>
                    A Custom element
                </RailActionWrapper>
                <RailActionButton
                    icon={<span className="material-icons-round">home</span>}
                    label={'Default'}
                    highlight={false}
                    onClick={() => alert('Clicked')}
                />
                <RailActionButton
                    icon={<span className="material-icons-round">home</span>}
                    label={'Highlighted'}
                    highlight={true}
                    onClick={() => alert('Clicked')}
                />
            </NavigationRail>
        </div>
    )
    const placement = (
        <div style={{
            background: 'var(--mfc-background-secondary)',
            width: '100%',
            height: '500px',
            border: 'var(--mfc-border-primary) 1px solid',
            borderRadius: '5px',
            overflow: 'hidden',

        }}>
            <NavigationRail>
                <RailActionWrapper
                    styles={{padding: '2px', background: '#f4f5fa', borderRadius: '8px', fontSize: '.8rem'}}>
                    <img src={'./react-logo.png'} alt={'React'} style={{width: '100%'}}/>
                    A Custom element
                </RailActionWrapper>
                <RailActionWrapper place={'start'}>
                    <RailActionButton
                        icon={<span className="material-icons-round">home</span>}
                        label={'Start'}
                        highlight={false}
                        onClick={() => alert('Clicked')}
                    />
                </RailActionWrapper>
                <RailActionWrapper place={'end'}>
                    <RailActionButton
                        icon={<span className="material-icons-round">home</span>}
                        label={'End'}
                        highlight={false}
                        onClick={() => alert('Clicked')}
                    />
                </RailActionWrapper>
            </NavigationRail>
        </div>
    )
    return [
        {
            headers: [
                {
                    content: 'NavigationRail usage',
                    type: 'primary'
                }
            ],
            body: [
                {
                    content: 'The <b>NavigationRail</b> component provides a template for page navigation. ',
                    type: 'text'
                },
                {
                    content: 'A <b>NavigationRail</b> supports two types of components, being those:',
                    type: 'text'
                },
                {
                    content: `<b><i>RailActionWrapper</i></b>: A content wrapper that will place your custom element or component inside the rail.`,
                    type: 'text'
                },
                {
                    content: `<b><i>RailActionButton</i></b>: A dynamic button that will automatically change dimensions to work with the drawer.`,
                    type: 'text'
                },
                {
                    content: example,
                    type: 'any'
                },
                {
                    content: (
                        <CodeBlock data={exampleCode} language={'javascript'} width={'100%'}/>
                    ),
                    type: 'any'
                }
            ]
        },
        {
            headers: [
                {
                    content: 'RailActionWrapper usage',
                    type: 'primary'
                }
            ],
            body: [
                {
                    content: 'The <b>RailActionWrapper</b> component can receive two types of children:',
                    type: 'text'
                },
                {
                    content: `<b><i>Node</i></b>: The node type can be anything you want.`,
                    type: 'text'
                },
                {
                    content: `<b><i>Function</i></b>: If you pass a function to it you will be able to consume the current state of the NavigationRail (as rail [false] or as drawer [true], this information can be used to control a dynamic custom element to fit the current render state.`,
                    type: 'text'
                },
                {
                    content: `<b>Note</b>: The drawer state can be seen by clicking the <span class="material-icons-round">menu</span> icon found on the NavigationRail.`,
                    type: 'text'
                },
                {
                    content: 'You can also place any content at the start of the rail or at the end with the <i>place</i> prop:',
                    type: 'text'
                },
                {
                    content: placement,
                    type: 'any'
                },
                {
                    content: (
                        <CodeBlock data={placementCode} language={'javascript'} width={'100%'}/>
                    ),
                    type: 'any'
                }
            ]
        },
        // {
        //     headers: [
        //         {
        //             content: 'RailActionButton usage',
        //             type: 'primary'
        //         }
        //     ],
        //     body: [
        //
        //     ]
        // }
    ]
}