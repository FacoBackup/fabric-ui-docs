import '../styles/globals.css'
import {Layout, Tab, ThemeProvider, VerticalTabs} from "mfc-core";
import styles from '../styles/Home.module.css'

function Mfc({Component, pageProps}) {
    return (
        <ThemeProvider>
            <Layout appName={'MFC documentation'} loading={false} logo={''}>
                <div className={styles.wrapper}>


                    <Component {...pageProps} />
                </div>
            </Layout>
        </ThemeProvider>
    )
}

export default Mfc
