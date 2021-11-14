import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {DateField, ThemeProvider} from 'mfc-core';


function App() {
    const [date, setDate] = useState()

    return (
        ///JSX
        <ThemeProvider>
            <DateField
                label={'Label prop'}
                disabled={true}
                width={'30%'}
                size={'default'}
                value={date}
                handleChange={(event) => setDate(event)}
            />
        </ThemeProvider>
        ///JSX
    );

}

ReactDOM.render(<App/>, document.querySelector('#app'));