import {useRouter} from "next/router";
import {useEffect, useRef, useState} from "react";
import {Alert, Button, LineChart, SelectField, TextField, useCopyToClipboard} from "mfc-core";
import ScrollStepper from "../components/core/navigation/scroll/ScrollStepper";
import styles from "../styles/Overview.module.css";
import StepperWrapper from "../components/core/navigation/scroll/StepperWrapper";
import DateField from "../components/core/inputs/date/DateField";
import CodeBlock from "../components/core/visualization/code_block/CodeBlock";

export default function index() {
    const router = useRouter()
    const ref = useRef()
    const [input, setInput] = useState()
    const [date, setDate] = useState()
    const [drop, setDrop] = useState()
    const [width, setWidth] = useState(0)
    useEffect(() => {
        setWidth(ref.current.offsetWidth)
    }, [])

    const copy = useCopyToClipboard()
    const [success, setSuccess] = useState(null)
    return (
        <div style={{width: '100vw', height: '100vh'}} ref={ref}>
            <div className={styles.logoWrapper}>
                <img src={'./react-logo.png'} alt={'React'} style={{height: '100%'}}/>
                MFC-core
            </div>
            <ScrollStepper className={styles.wrapper}>
                <StepperWrapper styles={{width: '100vw', height: '100vh', left: 0}}>
                    <div style={{display: 'flex'}}>
                        <div className={[styles.half, styles.title].join(' ')}>
                            A simple yet complete <b style={{color: '#0095ff'}}>React UI library</b>
                        </div>
                        <div className={[styles.half, styles.description].join(' ')} style={{gap: '64px'}}>
                            <Button
                                className={styles.npmLink}
                                variant={'outlined'}
                                styles={{background: 'var(--mfc-background-secondary)'}}
                                onClick={() => setSuccess(copy('npm i mfc-core'))}>
                                $ npm i mfc-core
                                <span className="material-icons-round" style={{fontSize: '1.2rem'}}>content_copy</span>
                            </Button>

                            <Alert
                                variant={success ? 'success' : 'alert'}
                                handleClose={() => {
                                    setSuccess(null)
                                }}
                                open={success !== null}
                                delay={3000}>
                                {success ? 'Copied' : 'Some error occurred during copy'}
                            </Alert>

                            <Button className={styles.npmLink} variant={'filled'} onClick={() => router.push('/home')}>

                                Get started
                                <span className={'material-icons-round'} style={{fontSize: '1.2rem'}}>
                            arrow_forward_ios
                        </span>
                            </Button>

                            <Button className={styles.npmLink} variant={'outlined'} onClick={() => {
                                ref.current.childNodes[1].scroll(0, document.body.offsetHeight)
                            }}>
                                Show me more
                                <span className={'material-icons-round'}>
                                    expand_more
                                </span>
                            </Button>
                        </div>
                    </div>
                </StepperWrapper>
                <StepperWrapper styles={{width: '100vw', height: '100vh'}}>
                    <div style={{display: 'flex'}}>
                        <div className={[styles.half, styles.description].join(' ')}
                             style={{alignContent: 'space-between', padding: '32px'}}>

                            <div className={styles.examplesWrapper} data-label={'Inputs'}>
                                <TextField
                                    width={'100%'}
                                    noMargin={true}
                                    label='Text' value={input} placeholder={'TextField'}
                                    handleChange={(e) => setInput(e.target.value)}/>
                                <DateField
                                    width={'100%'}
                                    label='DateField'
                                    value={date}
                                    handleChange={(e) => setDate(e)}/>
                                <SelectField
                                    width={'100%'}
                                    choices={[
                                        {key: 0, value: 'Option 1'},
                                        {key: 1, value: 'Option 2'}, {
                                            key: 2,
                                            value: 'Option 3'
                                        }]}
                                    label='DropDown'
                                    value={drop}
                                    placeholder={'DropDownField'}
                                    handleChange={(e) => setDrop(e)}/>


                            </div>
                            <div className={styles.examplesWrapper} data-label={'Buttons'}
                                 style={{background: 'transparent', gap: '24px'}}>
                                <Button styles={{width: 'calc(33.333% - 16px)'}}>
                                    Default
                                </Button>
                                <Button styles={{width: 'calc(33.333% - 16px)'}} variant={'outlined'}>
                                    Outlined
                                </Button>
                                <Button styles={{width: 'calc(33.333% - 16px)'}} variant={"filled"}>
                                    Filled
                                </Button>
                            </div>


                            <div className={styles.examplesWrapper} data-label={'Data visualization'}
                                 style={{background: 'transparent'}}>
                                <CodeBlock data={{
                                    component: 'CodeBlock',
                                    objective: 'Highlight your data or code.',
                                    available: true
                                }} language={'json'}/>

                                <LineChart
                                    width={(width / 2) - 106}
                                    title={'LineChart (coming soon)'}
                                    data={[
                                        {value: 100, axis: "One hundred"},
                                        {value: 50, axis: "One hundred / 2"},
                                        {value: 25, axis: "One hundred / 4"},
                                        {value: 5, axis: "Five"}
                                    ]}
                                    axis={{
                                        label: 'axis',
                                        field: 'axis'
                                    }} value={{
                                    label: 'value',
                                    field: 'value'
                                }}/>
                            </div>
                        </div>
                        <div className={[styles.half, styles.title].join(' ')} style={{fontSize: '2rem'}}>
                            Developed to maximize your <b style={{color: '#0095ff'}}> productivity</b>
                            <Button
                                onClick={() => router.push('/components')}
                                variant={'filled'} className={styles.npmLink}
                                styles={{marginTop: '64px'}}
                            >
                                Check out the full list
                                <span className={'material-icons-round'} style={{fontSize: '1.2rem'}}>
                        arrow_forward_ios
                    </span>
                            </Button>
                        </div>
                    </div>
                </StepperWrapper>
                <StepperWrapper styles={{width: '100vw', height: '100vh'}}>

                    <div className={[styles.half, styles.title].join(' ')}
                         style={{fontSize: '2rem', width: '100%', gap: '32px'}}>
                        <div>Links to the <b style={{color: '#0095ff'}}>mfc-core</b> sources</div>
                        <div className={styles.links}>
                            <Button
                                variant={'outlined'}
                                styles={{background: 'var(--mfc-background-primary)'}}
                                className={styles.npmLink}
                                onClick={() => window.open('https://www.npmjs.com/package/mfc-core')}
                            >
                                Check out NPM page
                            </Button>
                            <Button
                                variant={'outlined'}
                                styles={{background: 'var(--mfc-background-primary)'}}
                                className={styles.npmLink}
                                onClick={() => window.open('https://github.com/FacoBackup/mfc-core')}
                            >
                                Check out the GitHub Repository

                            </Button>
                        </div>
                    </div>
                </StepperWrapper>
            </ScrollStepper>


        </div>
    )
}
