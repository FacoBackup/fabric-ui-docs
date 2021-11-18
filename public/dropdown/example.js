import React from 'react';
import ReactDOM from 'react-dom';
import {Dropdown, MfcWrapper} from 'mfc-core';

function App(props) {
    const options = [{label: 'I\'m a option', onClick: () => alert('clicked')}, {label: 'I\'m another option', onClick: () => alert('clicked')}]

    return (
        ///JSX
        <MfcWrapper>
            <Dropdown options={options}>
                Dropdown
            </Dropdown>
            <Dropdown variant={'minimal'} options={options}>
                Minimal Dropdown
            </Dropdown>
            <Dropdown variant={'minimal-horizontal'} options={options}>
                Minimal horizontal Dropdown
            </Dropdown>
            <Dropdown variant={'outlined'} options={options}>
                Outlined Dropdown
            </Dropdown>
            <Dropdown variant={'filled'} options={options}>
                Filled Dropdown
            </Dropdown>
            <Dropdown color={'secondary'} options={options}>
                Secondary Dropdown
            </Dropdown>
        </MfcWrapper>
        ///JSX-END
    );
}

ReactDOM.render(<App/>, document.querySelector('#app'));