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
                value={date} label={'Default'}
                width={'30%'}/>
            <DateField
                handleChange={(event) => setDate(event)}
                value={date} label={'Required'}
                required={true}
                width={'30%'}/>
            <DateField
                handleChange={(event) => setDate(event)}
                value={date}
                label={'Disabled'}
                width={'30%'}
                disabled={true}/>
        </MfcWrapper>
        ///JSX-END
    );
}

ReactDOM.render(<App/>, document.querySelector('#app'));