import '../styles/globals.css'
import styles from '../styles/Home.module.css'
import {useEffect, useState} from "react";
import {useRouter} from 'next/router';
import "@fontsource/roboto";

import {Button, MfcWrapper, ToolTip} from "mfc-core";
import Cookies from "universal-cookie/lib";
import RailActionButton from "../components/core/navigation/rail/RailActionButton";
import NavigationRail from "../components/core/navigation/rail/NavigationRail";
import RailActionWrapper from "../components/core/navigation/rail/RailActionWrapper";

const cookies = new Cookies()

function Mfc({Component, pageProps}) {
    const [loading, setLoading] = useState(false)
    const [dark, setDark] = useState(false)
    const setTheme = (value) => {
        setDark(value)
        cookies.remove('mfc-theme', {path: '/en'})
        cookies.set('mfc-theme', value ? 0 : 1, {path: '/en'})
        cookies.remove('mfc-theme', {path: '/'})
        cookies.set('mfc-theme', value ? 0 : 1, {path: '/'})
    }
    const router = useRouter()
    useEffect(() => {
        console.log(cookies.get('mfc-theme'), 'cookie')
        setDark(cookies.get('mfc-theme') === '0')
    }, [])
    useEffect(() => {
        router.events.on('routeChangeStart', () => {
            setLoading(true)
        })
        router.events.on('routeChangeComplete', () => {
            setLoading(false)
        })

        console.log(loading)
    })

    return (
        <MfcWrapper onDark={dark} className={styles.wrapper}>
            <div className={styles.contentWrapper}>
                {router.pathname !== '/' ? (
                        <NavigationRail>
                            <RailActionWrapper className={styles.appName} place={"start"}>
                                <img src='./react-logo.png' alt={'react'} style={{width: '100%'}}/>
                                MFC
                                <ToolTip justify={'end'} align={'middle'}
                                         content={'MFC doesn\'t really mean anything yet'}/>
                            </RailActionWrapper>
                            <RailActionButton
                                icon={<span className="material-icons-round">home</span>}
                                label={'Home'}
                                highlight={router.pathname === '/home'}
                                onClick={() => router.push('/home')}
                            />
                            <RailActionButton icon={<span className="material-icons-round">category</span>}
                                              label={'Components'} highlight={router.pathname === '/components'}
                                              onClick={() => router.push('/components')}/>
                            <RailActionButton icon={<span className="material-icons-round">code</span>} label={'APIs'}
                                              highlight={router.pathname === '/apis'} onClick={() => router.push('/apis')}
                                              disabled={true}/>
                            <RailActionWrapper place={'end'}>
                                <Button
                                    onClick={() => setTheme(!dark)}
                                    className={styles.button}
                                >
                                    {dark ?
                                        <span className="material-icons-round">brightness_3</span>
                                        :
                                        <span className="material-icons-round">brightness_high</span>}
                                    Theme

                                </Button>
                                <ToolTip justify={'end'} align={'middle'} content={'Theme'}/>
                            </RailActionWrapper>
                        </NavigationRail>
                    )
                    :
                    null
                }
                <Component {...pageProps} />
            </div>

        </MfcWrapper>
    )
}

export default Mfc
