import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {DateField, MfcWrapper} from 'mfc-core';

function App() {
    const [date, setDate] = useState()

    return (
        ///JSX
        <MfcWrapper>
            <DateField
                handleChange={(event) => setDate(event)}
                value={date}
                label={'Default variant'}
                width={'30%'}
                size={'default'}/>
            <DateField
                handleChange={(event) => setDate(event)}
                value={date}
                label={'Small variant'}
                width={'30%'}
                size={'small'}
            />
            <DateField
                handleChange={(event) => setDate(event)}
                value={date}
                label={'Custom css width'}
                width={'calc(30% + 0.5px)'}
            />
        </MfcWrapper>
        ///JSX-END
    );
}

ReactDOM.render(<App/>, document.querySelector('#app'));