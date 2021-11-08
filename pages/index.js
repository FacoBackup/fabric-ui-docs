import {Button, Tab, VerticalTabs} from "mfc-core";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <VerticalTabs className={styles.verticalTabs}>
            <Tab className={styles.tab} group={'Getting Started'} label={'Installation'}>
                cafe
            </Tab>
            <Tab className={styles.tab} group={'Getting Started'} label={'Usage'}>
                cafe
            </Tab>
            <Tab className={styles.tab} group={'Getting Started'} label={'Examples'}>
                cafe
            </Tab>
            <Tab className={styles.tab} group={'Getting Started'} label={'FAQs'}>
                cafe
            </Tab>
            <Tab className={styles.tab} group={'Getting Started'} label={'Supported Platforms'}>
                cafe
            </Tab>
            <Tab className={styles.tab} group={'Getting Started'} label={'Support'}>
                cafe
            </Tab>


            <Tab className={styles.tab} group={'Components'} label={'Inputs'}>
                cafe
            </Tab>
            <Tab className={styles.tab} group={'Components'} label={'Feedback'}>
                cafe
            </Tab>
            <Tab className={styles.tab} group={'Components'} label={'Visualization'}>
                cafe
            </Tab>
            <Tab className={styles.tab} group={'Components'} label={'Navigation'}>
                cafe
            </Tab>
            <Tab className={styles.tab} group={'Components'} label={'Theming'}>
                cafe
            </Tab>
            <Tab className={styles.tab} group={'Components'} label={'Misc'}>
                cafe
            </Tab>
        </VerticalTabs>
    )
}
