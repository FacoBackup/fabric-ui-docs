import '../styles/globals.css'
import styles from '../styles/Home.module.css'
import {useEffect, useState} from "react";
import Router from 'next/router';
import ThemeProvider from "../components/core/misc/theme/ThemeProvider";
import "@fontsource/roboto";
import Layout from '../components/core/navigation/layout/Layout'
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
            <Layout appName={'mfc components'} loading={false}>
                <div className={styles.wrapper}>
                    <Component {...pageProps} />
                </div>
            </Layout>
        </ThemeProvider>
    )
}

export default Mfc
