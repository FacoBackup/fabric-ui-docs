import {useRef, useState} from "react";
import {Alert, Button, ScrollStepper, StepperWrapper, useCopyToClipboard} from "@f-ui/core";
import styles from "../styles/Overview.module.css";
import {useRouter} from "next/router";


export default function index() {
    const ref = useRef()
    const router = useRouter()
    const copy = useCopyToClipboard()
    const [success, setSuccess] = useState(null)

    return (
        <div style={{width: '100vw', height: '100vh'}} ref={ref}>

            <ScrollStepper className={styles.wrapper}>
                <StepperWrapper styles={{width: '100vw'}}>
                    <div style={{
                        display: 'grid',
                        justifyItems: 'center',
                        width: '100%',
                        height: '100vh',
                        alignContent: 'center',
                        gap: '10vh'
                    }}>
                        <img src={'./big_ico.svg'} alt={'logo'} style={{maxWidth: '400px'}}/>
                        <h1 className={styles.title}>
                            A simple yet complete <b style={{color: '#0095ff'}}>React UI library</b>
                        </h1>
                        <div style={{display: 'flex', gap: '32px'}}>
                            <Button
                                className={styles.npmLink}
                                variant={'outlined'}
                                onClick={() => setSuccess(copy('npm i @f-ui/core'))}>
                                $ npm i @f-ui/core
                                <span className="material-icons-round" style={{fontSize: '1.2rem'}}>content_copy</span>
                            </Button>
                            <Button
                                className={styles.npmLink}
                                variant={'filled'}
                                onClick={() => router.push('/home')}>
                                Get started
                                <span className="material-icons-round"
                                      style={{fontSize: '1.2rem'}}>arrow_forward_ios</span>
                            </Button>
                        </div>
                        <Alert
                            variant={success ? 'success' : 'alert'}
                            handleClose={() => {
                                setSuccess(null)
                            }}
                            open={success !== null}
                            delay={3000}>
                            {success ? 'Copied' : 'Some error occurred during copy'}
                        </Alert>
                    </div>
                </StepperWrapper>

                <StepperWrapper styles={{width: '100vw', height: '100vh'}}>

                    <div style={{
                        display: 'grid',
                        justifyItems: 'center',
                        width: '100%',
                        height: '100vh',
                        alignContent: 'center',
                        gap: '10vh'
                    }}>
                        <h1 className={styles.title}>Useful links</h1>
                        <div className={styles.links}>
                            <Button
                                variant={'outlined'}
                                className={styles.npmLink}
                                onClick={() => window.open('https://www.npmjs.com/org/f-ui?activeTab=packages')}
                            >
                                Available packages (NPM)
                            </Button>
                            <Button
                                variant={'outlined'}
                                className={styles.npmLink}
                                onClick={() => window.open('https://github.com/fabric-ui')}
                            >
                                Github organization
                            </Button>
                        </div>
                    </div>
                </StepperWrapper>
            </ScrollStepper>


        </div>
    )
}
