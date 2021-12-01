import React, {useMemo} from 'react';
import ReactDOM from 'react-dom';
import {Chart, MfcWrapper} from 'mfc-core';

const randomSet = (quantity) => {
    let res = []
    for (let i = 0; i < quantity; i++) {
        res.push({axis: 'A' + i, value: Math.floor(Math.random() * (101))})
    }

    return res
}

function App() {
    const data = useMemo(() => {
        return randomSet(15)
    }, [])

    return (
        ///JSX
        <MfcWrapper>
            <Chart
                title={'Title here'}
                color={'#0095ff'}
                type={'line-chart'}
                axis={{label: 'Axis', field: 'axis'}}
                data={data}
                value={{label: 'Value', field: 'value'}}
            />
        </MfcWrapper>
        ///JSX-END
    );
}

ReactDOM.render(<App/>, document.querySelector('#app'));