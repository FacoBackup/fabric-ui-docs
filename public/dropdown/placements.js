import React from 'react';
import ReactDOM from 'react-dom';
import {Dropdown, MfcWrapper} from 'mfc-core';

function App(props) {
    const options = [{label: 'I\'m a option', onClick: () => alert('clicked')}, {label: 'I\'m another option', onClick: () => alert('clicked')}]

    return (
        ///JSX
        <MfcWrapper>
            <Dropdown align={'top'} justify={'start'} variant={'outlined'} options={options}>
                Top - left
            </Dropdown>
            <Dropdown align={'bottom'} justify={'start'} variant={'outlined'} options={options}>
                Bottom - left
            </Dropdown>
            <Dropdown align={'top'} justify={'end'} variant={'outlined'} options={options}>
                Top - right
            </Dropdown>
            <Dropdown align={'bottom'} justify={'end'} variant={'outlined'} options={options}>
                Bottom - right
            </Dropdown>
        </MfcWrapper>
        ///JSX-END
    );
}

ReactDOM.render(<App/>, document.querySelector('#app'));