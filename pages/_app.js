import '../styles/globals.css'
import styles from '../styles/Home.module.css'
import {useEffect, useState} from "react";
import {useRouter} from 'next/router';
import "@fontsource/roboto";

import {Bar, BarAction, Button, ThemeProvider, ToolTip, ToolTipButton} from "mfc-core";
import Cookies from "universal-cookie/lib";

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
        <ThemeProvider onDark={dark} className={styles.wrapper}>
            <div className={styles.bars}>
                <Bar orientation={"horizontal"}>
                    <BarAction className={styles.appName}>
                        mfc components
                    </BarAction>
                    <BarAction place={'end'}>
                        <Button
                            onClick={() => setTheme(!dark)}
                            className={styles.button}
                            variant={'minimal'}>
                            {dark ?
                                <span className="material-icons-round">brightness_3</span>
                                :
                                <span className="material-icons-round">brightness_high</span>}
                            <ToolTip content={'Theme'}/>
                        </Button>
                    </BarAction>
                </Bar>
                <div className={styles.contentWrapper}>
                    {/*<Bar>*/}
                    {/*    /!*<BarAction>*!/*/}
                    {/*    <ActionButton*/}
                    {/*        onClick={() => router.push('/')}*/}
                    {/*        highlight={router.pathname === '/'}*/}
                    {/*        label={'Getting Started'}*/}
                    {/*        icon={(*/}
                    {/*            <span className="material-icons-round">*/}
                    {/*                home*/}
                    {/*            </span>*/}
                    {/*        )}*/}
                    {/*    />*/}
                    {/*    <ActionButton*/}
                    {/*        onClick={() => router.push('/components')}*/}
                    {/*        highlight={router.pathname === '/components'}*/}
                    {/*        label={'Components'}*/}
                    {/*        icon={(*/}
                    {/*            <span className="material-icons-round">*/}
                    {/*                extension*/}
                    {/*            </span>*/}
                    {/*        )}*/}
                    {/*    />*/}
                    {/*    /!*</BarAction>*!/*/}
                        {/*<BarAction className={styles.header}>*/}
                        {/*    mfc components*/}
                        {/*</BarAction>*/}
                        {/*<BarAction place={'end'}>*/}
                        {/*    <Button*/}
                        {/*        onClick={() => setTheme(!dark)}*/}
                        {/*        className={styles.button}*/}
                        {/*        variant={'minimal'}>*/}
                        {/*        {dark ?*/}
                        {/*            <span className="material-icons-round">brightness_3</span>*/}
                        {/*            :*/}
                        {/*            <span className="material-icons-round">brightness_high</span>}*/}
                        {/*        <ToolTip content={'Theme'}/>*/}
                        {/*    </Button>*/}
                        {/*</BarAction>*/}
                    {/*</Bar>*/}
                    <Component {...pageProps} />
                </div>
            </div>

        </ThemeProvider>
    )
}

export default Mfc
