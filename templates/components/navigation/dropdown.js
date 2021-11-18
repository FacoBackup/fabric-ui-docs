import CodeBlock from "../../../components/core/visualization/code_block/CodeBlock";
import Dropdown from "../../../components/core/navigation/dropdown/Dropdown";
import {useFile} from "mfc-core";
import React from "react";

export default function dropdown(){
    const options = [{label: 'I\'m a option', onClick: () => alert('clicked')}, {label: 'I\'m another option', onClick: () => alert('clicked')}]
    const variants = (
        <>
            <Dropdown options={options}>
                Dropdown
            </Dropdown>
            <Dropdown variant={'minimal'} options={options}>
                Minimal Dropdown
            </Dropdown>
            <Dropdown variant={'minimal-horizontal'} options={options}>
                Minimal horizontal Dropdown
            </Dropdown>
            <Dropdown variant={'outlined'} options={options}>
                Outlined Dropdown
            </Dropdown>
            <Dropdown variant={'filled'} options={options}>
                Filled Dropdown
            </Dropdown>
            <Dropdown color={'secondary'} options={options}>
                Secondary Dropdown
            </Dropdown>
        </>
    )
    const styles = (
        <>
            <Dropdown options={options} styles={{border: 'red 1px solid'}}>
                <div>
                    This is a custom child inside a custom border
                </div>
            </Dropdown>
            <Dropdown variant={'filled'} styles={{borderRadius: '25%/50%'}} options={options}>
                Custom border radius
            </Dropdown>
            <Dropdown className={'some_random_class'} options={options}>
                A className
            </Dropdown>

        </>
    )
    const placements = (
        <>
            <Dropdown align={'top'} justify={'start'} variant={'outlined'} options={options}>
                Top - left
            </Dropdown>
            <Dropdown align={'bottom'} justify={'start'} variant={'outlined'} options={options}>
                Bottom - left
            </Dropdown>
            <Dropdown align={'top'} justify={'end'} variant={'outlined'} options={options}>
                Top - right
            </Dropdown>
            <Dropdown align={'bottom'} justify={'end'} variant={'outlined'} options={options}>
                Bottom - right
            </Dropdown>
        </>
    )
    const examples = useFile('./dropdown/example.js')
    const stylesEx = useFile('./dropdown/styles.js')
    return[
        {
            headers: [
                {
                    content: 'Dropdown usage',
                    type: 'primary'
                }
            ],
            body: [
                {
                    content: '<b>Dropdown</b> menus are intended to reduce space consumption for your available options.',
                    type: 'text'
                },
                {
                    content: 'A <b>Dropdown</b> renders the options on the body root with a precise position to ensure that it doesn\'t mess up your layout. <br> Check out the example below:',
                    type: 'text'
                },
                {
                    content: variants,
                    type: 'native-code'
                },
                {
                    content: (
                        <CodeBlock language={'javascript'} width={'100%'} data={examples}/>
                    ),
                    type: 'any'
                },
            ]
        },
        {
            headers: [
                {
                    content: 'Customization',
                    type: 'primary'
                }
            ],
            body: [
                {
                    content: 'As you can see from the code above, the Dropdown is very similar to the Button when looking at the look and feel, and that is also true for the customization props',
                    type: 'text'
                },
                {
                    content: 'You can pass the following props to it:',
                    type: 'text'
                },
                {
                    content: `<b><i>className</i></b>: className can receive a string and as the name says, it is the CSS className. <br>`,
                    type: 'text'
                },
                {
                    content: `<b><i>styles</i></b>: The styles prop can receive any object with styles, just like you pass <i>style</i> to any other jsx element. <br>`,
                    type: 'text'
                },
                {
                    content: `<b><i>children</i></b>: The children prop will be rendered inside the Dropdown main button. <br>`,
                    type: 'text'
                },
                {
                    content: styles,
                    type: 'native-code'
                },
                {
                    content: (
                        <CodeBlock language={'javascript'} width={'100%'} data={stylesEx}/>
                    ),
                    type: 'any'
                },
            ]
        },
        {
            headers: [
                {
                    content: 'Menu placement',
                    type: 'primary'
                }
            ],
            body: [
                {
                    content: 'The default placement for the Dropdown menu will be: aligned at the parents <i>bottom</i> and justified at the parents<i>start</i>.',
                    type: 'text'
                },
                {
                    content: 'This means that the menu will start at the bottom left corner of the parent node. But as you would expect, you can change this default behavior with the following props:',
                    type: 'text'
                },
                {
                    content: `<b><i>align</i></b>: This will adjust the vertical position relative to the parent, can be set to <i>"top"</i> or <i>"bottom"</i>.`,
                    type: 'text'
                },
                {
                    content: `<b><i>justify</i></b>: Will adjust the horizontal position of the menu, can be set to <i>"end"</i> or <i>"start"</i>.`,
                    type: 'text'
                },
                {
                    content: placements,
                    type: 'native-code'
                },
                {
                    content: (
                        <CodeBlock language={'javascript'} width={'100%'} data={stylesEx}/>
                    ),
                    type: 'any'
                },
            ]
        }
    ]
}