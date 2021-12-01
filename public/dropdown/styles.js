import React from 'react';
import ReactDOM from 'react-dom';
import {Dropdown, MfcWrapper} from 'mfc-core';

function App(props) {
    const options = [{label: 'I\'m a option', onClick: () => alert('clicked')}, {label: 'I\'m another option', onClick: () => alert('clicked')}]

    return (
        ///JSX
        <MfcWrapper>
            <Dropdown options={options} styles={{border: 'red 1px solid'}}>
                <div>
                    This is a custom child inside a custom border
                </div>
            </Dropdown>
            <Dropdown variant={'filled'} styles={{borderRadius: '25%/50%'}} options={options}>
                Custom border radius
            </Dropdown>
            <Dropdown className={'some_random_class'} options={options}>
                A className
            </Dropdown>
        </MfcWrapper>
        ///JSX-END
    );
}

ReactDOM.render(<App/>, document.querySelector('#app'));