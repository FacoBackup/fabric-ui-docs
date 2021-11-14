import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {Button, DateField} from 'mfc-core';

function App() {
    const [date, setDate] = useState()
    return (
        ///JSX
        <>
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
        </>
        ///JSX
    );
}

ReactDOM.render(<App/>, document.querySelector('#app'));