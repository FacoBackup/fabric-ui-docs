import CodeBlock from "../../../components/core/visualization/code_block/CodeBlock";
import Chart from "../../../components/core/visualization/charts/Chart";
import React, {useState} from "react";
import {useFile} from "mfc-core";

export default function linechart() {
    const ex = useFile('./charts/example.js')
    const randomSet = (quantity) => {
        let res = []
        for (let i = 0; i < quantity; i++) {
            res.push({axis: 'A' + i, value: Math.floor(Math.random() * (101))})
        }

        return res
    }
    const [data, setData] = useState(randomSet(15))

    return [
        {
            headers: [
                {
                    content: 'Chart usage',
                    type: 'primary'
                }
            ],
            body: [
                {
                    content: 'Charts are useful for many things, but sometimes it can be very time consuming to setup a basic graph for your data, well, not anymore, with the <b>Chart</b> component you can setup one in seconds.',
                    type: 'text'
                },
                {
                    content: 'The <b>Chart</b> component is a dynamic chart built using the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API"><i>canvas API</i></a>, and as you will see, it is very performant. ',
                    type: 'text'
                },
                {
                    content: 'With the package also comes a native tooltip (rendered inside the canvas) to show more details about your data.',
                    type: 'text'
                },
                {
                    content: 'In order to make a basic chart work you will first need a dataset, like this one:',
                    type: 'text'
                },
                {
                    content: (
                        <CodeBlock data={[...data].splice(0, 3)} language={"json"}/>
                    ),
                    type: 'any'
                },

                {
                    content: (
                        <div style={{background: 'var(--mfc-background-secondary)', height: 'fit-content', width: '100%', padding: '8px',}}>
                            <label htmlFor={'Quantity'}>Quantity of data samples</label>
                            <input
                                style={{width: '100%'}}
                                type={'range'} min={1} max={100}
                                aria-label={'Quantity'}
                                value={data.length}
                                onChange={e => setData(randomSet(parseInt(e.target.value)))}/>
                        </div>
                    ),
                    type: 'any'
                },
                {
                    content: '<b>Note</b>: The example below uses the <i>line-chart</i> variant.',
                    type: 'text'
                },
                {
                    content: (
                        <Chart
                            title={'Title here'}
                            color={'#0095ff'}
                            type={'line-chart'}
                            axis={{label: 'Axis', field: 'axis'}}
                            data={data}
                            value={{label: 'Value', field: 'value'}}
                        />
                    ),
                    type: 'any'
                },
                {
                    content: (
                        <CodeBlock data={ex} language={'javascript'}/>
                    ),
                    type: 'any'
                }
            ]
        },
        // {
        //     headers: [
        //         {
        //             content: 'Customization and sizing',
        //             type: 'primary'
        //         }
        //     ],
        //     body: [
        //         {
        //             content: 'You can customize as much as possible ',
        //             type: 'text'
        //         },
        //         {
        //             content: 'The <b>Chart</b> component is a dynamic chart built using the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API"><i>canvas API</i></a>, and as you will see, it is very performant. ',
        //             type: 'text'
        //         },
        //         {
        //             content: 'With the package also comes a native tooltip (rendered inside the canvas) to show more details about your data.',
        //             type: 'text'
        //         },
        //         {
        //             content: 'In order to make a basic chart work you will first need a dataset, like this one:',
        //             type: 'text'
        //         }
        //     ]
        // }
    ]
}