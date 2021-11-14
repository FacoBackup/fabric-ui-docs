import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider, DateField} from 'mfc-core';

function App() {
    const [date, setDate] = useState()
    return (
        ///JSX
        <ThemeProvider>
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
        </ThemeProvider>
        ///JSX
    );
}

ReactDOM.render(<App/>, document.querySelector('#app'));