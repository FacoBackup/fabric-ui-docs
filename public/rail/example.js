import React from 'react';
import ReactDOM from 'react-dom';
import {MfcWrapper} from 'mfc-core';
import NavigationRail from "../../components/core/navigation/rail/NavigationRail";
import RailActionWrapper from "../../components/core/navigation/rail/RailActionWrapper";
import RailActionButton from "../../components/core/navigation/rail/RailActionButton";

function App(props) {
    return (
        ///JSX
        <MfcWrapper styles={{
            background: 'var(--mfc-background-secondary)',
            width: '100%',
            height: '500px',
            border: 'var(--mfc-border-primary) 1px solid',
            borderRadius: '5px',
            overflow: 'hidden'
        }}>
            <NavigationRail>
                <RailActionWrapper
                    styles={{padding: '2px', background: '#f4f5fa', borderRadius: '8px', fontSize: '.8rem'}}>
                    <img src={'./react-logo.png'} alt={'React'} style={{width: '100%'}}/>
                    A Custom element
                </RailActionWrapper>
                <RailActionButton
                    icon={<span className="material-icons-round">home</span>}
                    label={'Default'}
                    highlight={false}
                    onClick={() => alert('Clicked')}
                />
                <RailActionButton
                    icon={<span className="material-icons-round">home</span>}
                    label={'Highlighted'}
                    highlight={true}
                    onClick={() => alert('Clicked')}
                />
            </NavigationRail>
        </MfcWrapper>
        ///JSX-END
    );
}

ReactDOM.render(<App/>, document.querySelector('#app'));