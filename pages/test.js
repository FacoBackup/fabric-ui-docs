import React from "react";

import Chart from "../components/core/visualization/charts/Chart";


export default function test() {
    const randomSet = (quantity) => {
        let res = []
        for (let i = 0; i < quantity; i++) {
            res.push({s: 'C' + i, q: Math.floor(Math.random() * (101))})
        }

        return res
    }


    return (
        <div style={{
            padding: '64px',
            boxSizing: 'border-box', width: '100%', height: '100%', overflow: 'auto',
            display: 'flex', flexFlow: 'row wrap', gap: '16px'
        }}>
            {/*<HorizontalChart*/}
            {/*    title={'Titulo do gráfico'}*/}
            {/*    height={500}*/}
            {/*    width={500}*/}
            {/*    color={'#0095ff'}*/}
            {/*    axis={{label: 'Si', field: 's'}}*/}
            {/*    data={randomSet(12)}*/}
            {/*    value={{label: 'Quantity', field: 'q'}}/>*/}
            {/*<PieChart*/}
            {/*    title={'Titulo do gráfico'}*/}
            {/*    height={500}*/}
            {/*    width={500}*/}
            {/*    color={'#0095ff'}*/}
            {/*    axis={{label: 'Si', field: 's'}}*/}
            {/*    data={randomSet(12)}*/}
            {/*    value={{label: 'Quantity', field: 'q'}}/>*/}
            {/*<VerticalChart*/}
            {/*    title={'Titulo do gráfico'}*/}
            {/*    height={500}*/}
            {/*    width={500}*/}
            {/*    color={'#0095ff'}*/}
            {/*    axis={{label: 'Si', field: 's'}}*/}
            {/*    data={randomSet(20)}*/}
            {/*    value={{label: 'Quantity', field: 'q'}}/>*/}
            <Chart
                title={'Titulo do gráfico'}
                color={'#0095ff'}
                axis={{label: 'Si', field: 's'}}
                data={randomSet(12)}
                value={{label: 'Quantity', field: 'q'}}/>
        </div>
    )
}