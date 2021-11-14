import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {DateField} from 'mfc-core';

function App() {
    const [date, setDate] = useState()

    return (
        ///JSX
        <DateField
            label={'Label prop'}
            disabled={true}
            width={'30%'}
            size={'default'}
            value={date}
            handleChange={(event) => setDate(event)}
        />
        ///JSX
    );

}

ReactDOM.render(<App/>, document.querySelector('#app'));