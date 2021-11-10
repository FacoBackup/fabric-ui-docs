import '../styles/globals.css'
import {Layout, Tab, VerticalTabs} from "mfc-core";
import styles from '../styles/Home.module.css'
import {useEffect, useState} from "react";
import Router from 'next/router';
import ThemeProvider from "../components/core/misc/theme/ThemeProvider";
import "@fontsource/roboto";

function Mfc({Component, pageProps}) {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        Router.events.on('routeChangeStart', () => {
            setLoading(true)
        })
        Router.events.on('routeChangeComplete', () => setLoading(false))
    })
    return (
        <ThemeProvider>
            <Layout appName={'Tyiioh components'} loading={false} logo={''}>
                <div className={styles.wrapper}>
                    <Component {...pageProps} />
                </div>
            </Layout>
        </ThemeProvider>
    )
}

export default Mfc
