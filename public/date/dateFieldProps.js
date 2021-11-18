import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {DateField, MfcWrapper} from 'mfc-core';


function App() {
    const [date, setDate] = useState()

    return (
        ///JSX
        <MfcWrapper>
            <DateField
                label={'Label prop'}
                disabled={true}
                width={'30%'}
                size={'default'}
                value={date}
                handleChange={(event) => setDate(event)}
            />
        </MfcWrapper>
        ///JSX-END
    );

}

ReactDOM.render(<App/>, document.querySelector('#app'));