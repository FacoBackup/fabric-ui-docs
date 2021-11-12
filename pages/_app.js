import '../styles/globals.css'
import styles from '../styles/Home.module.css'
import {useEffect, useState} from "react";
import Router, {useRouter} from 'next/router';
import ThemeProvider from "../components/core/misc/theme/ThemeProvider";
import "@fontsource/roboto";
import Bar from "../components/core/navigation/bar/Bar";
import BarAction from "../components/core/navigation/bar/BarAction";
import Loader from "../components/core/navigation/loader/Loader";
import Button from "../components/core/inputs/button/Button";
import {ToolTip} from "mfc-core";
import Cookies from "universal-cookie/lib";
import ActionButton from "../components/core/inputs/button/ActionButton";

const cookies = new Cookies()

function Mfc({Component, pageProps}) {
    const [loading, setLoading] = useState(false)
    const [dark, setDark] = useState(false)
    const setTheme = (value) => {
        setDark(value)

        cookies.set('mfc-theme', value ? 0 : 1)
    }
    const router = useRouter()
    useEffect(() => {
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
            <Loader loading={loading}/>
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
