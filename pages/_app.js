import '../styles/globals.css'
import styles from '../styles/Home.module.css'
import {useEffect, useState} from "react";
import Router from 'next/router';
import ThemeProvider from "../components/core/misc/theme/ThemeProvider";
import "@fontsource/roboto";
import Bar from "../components/core/navigation/bar/Bar";
import BarAction from "../components/core/navigation/bar/BarAction";
import Loader from "../components/core/navigation/loader/Loader";
import Button from "../components/core/inputs/button/Button";
import {ToolTip} from "mfc-core";

function Mfc({Component, pageProps}) {
    const [loading, setLoading] = useState(false)
    const [dark, setDark] = useState(false)
    useEffect(() => {
        Router.events.on('routeChangeStart', () => {
            setLoading(true)
        })
        Router.events.on('routeChangeComplete', () => setLoading(false))
    })

    return (
        <ThemeProvider onDark={dark} className={styles.wrapper}>
            <Loader loading={loading}/>
            <Bar orientation={"horizontal"}>
                <BarAction className={styles.header}>
                    mfc components
                </BarAction>
                <BarAction place={'end'}>
                    <Button
                        onClick={() => setDark(!dark)}
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
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default Mfc
