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
                value={date}
                label={'yyyy-dd-mm'}
                pattern={'yyyy-dd-mm'}
                width={'30%'}/>
            <DateField
                handleChange={(event) => setDate(event)}
                value={date}
                label={'yyyy-mm-dd'}
                pattern={'yyyy-mm-dd'}
                width={'30%'}/>

            <DateField
                handleChange={(event) => setDate(event)}
                value={date}
                label={'yyyy/dd/mm'}
                pattern={'yyyy/dd/mm'}
                width={'30%'}/>
            <DateField
                handleChange={(event) => setDate(event)}
                value={date}
                label={'yyyy/mm/dd'}
                pattern={'yyyy/mm/dd'}
                width={'30%'}/>

            <DateField
                handleChange={(event) => setDate(event)}
                value={date}
                label={'dd-mm-yyyy'}
                pattern={'dd-mm-yyyy'}
                width={'30%'}/>
            <DateField
                handleChange={(event) => setDate(event)}
                value={date}
                label={'dd/mm/yyyy'}
                pattern={'dd/mm/yyyy'}
                width={'30%'}/>

            <DateField
                handleChange={(event) => setDate(event)}
                value={date}
                label={'dd-mm-yyyy'} pattern={'dd-mm-yyyy'} width={'30%'}/>
            <DateField
                handleChange={(event) => setDate(event)}
                value={date}
                label={'dd/mm/yyyy'}
                pattern={'dd/mm/yyyy'}
                width={'30%'}/>

            <DateField
                handleChange={(event) => setDate(event)}
                value={date}
                label={'mm-dd-yyyy'}
                pattern={'mm-dd-yyyy'}
                width={'30%'}/>
            <DateField
                handleChange={(event) => setDate(event)}
                value={date}
                label={'mm/dd/yyyy'}
                pattern={'mm/dd/yyyy'}
                width={'30%'}/>
        </ThemeProvider>
        ///JSX
    );
}

ReactDOM.render(<App/>, document.querySelector('#app'));