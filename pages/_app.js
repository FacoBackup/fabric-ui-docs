import '../styles/globals.css'
import styles from '../styles/Home.module.css'
import {useEffect, useState} from "react";
import {useRouter} from 'next/router';
import "@fontsource/roboto";

import Cookies from "universal-cookie/lib";
import RailActionButton from "../components/core/navigation/rail/RailActionButton";
import NavigationRail from "../components/core/navigation/rail/NavigationRail";
import RailActionWrapper from "../components/core/navigation/rail/RailActionWrapper";
import Fabric from "../components/core/misc/theme/Fabric";
import ToolTip from "../components/core/feedback/tooltip/ToolTip";
import Button from "../components/core/inputs/button/Button";
import Head from 'next/head'
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

    })

    return (
        <Fabric onDark={dark} className={styles.wrapper}>
            <Head>
                <title>
                    Fabric UI
                </title>
                <link rel="icon" href={"/favicon.svg"} type="image/x-icon" sizes={'64x64'}/>
            </Head>
            <div className={styles.contentWrapper}>
                {router.pathname !== '/' ? (
                        <NavigationRail>
                            <RailActionWrapper className={styles.appName} place={"start"}>
                                <img src={dark ? './favicon_light.svg' : './favicon.svg'} alt={'react'} style={{width: '100%', padding: '8px', maxHeight: '60px'}}/>
                                {/*Fabric UI*/}
                                <ToolTip justify={'end'} align={'middle'}
                                         content={'Fabric UI'}/>
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
                            <RailActionWrapper place={"end"}>
                                <RailActionButton
                                    icon={<span><img src={'./github/32.png'} style={{width: '16px', height: '16px'}}
                                                     alt={'Github'}/></span>}
                                    label={'Github'}
                                    highlight={router.pathname === '/apis'}
                                    onClick={() => window.open('https://github.com/FacoBackup/fabric-ui')}
                                />
                            </RailActionWrapper>

                            <RailActionWrapper place={'end'}>
                                <RailActionButton
                                    onClick={() => setTheme(!dark)}
                                    className={styles.button}
                                    icon={dark ?
                                        <span className="material-icons-round">brightness_3</span>
                                        :
                                        <span className="material-icons-round">brightness_high</span>}
                                    label={'Theme'}
                                />
                                <ToolTip justify={'end'} align={'middle'} content={'Theme'}/>
                            </RailActionWrapper>

                        </NavigationRail>
                    )
                    :
                    null
                }
                <Component {...pageProps} />
            </div>

        </Fabric>
    )
}

export default Mfc
