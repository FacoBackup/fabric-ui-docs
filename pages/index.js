import {Button, Tab, VerticalTabs} from "mfc-core";
import styles from "../styles/Home.module.css";
import {Feedback, Navigation} from "@material-ui/icons";
import Theming from "../components/theming/Theming";
import Misc from "../components/misc/Misc";
import Inputs from "../components/inputs/Inputs";
import GettingStarted from "../components/gs/GettingStarted";

export default function Home() {
    return (
        <VerticalTabs className={styles.verticalTabs}>
            <Tab className={styles.tab} label={'Getting Started'}>
                <GettingStarted/>
            </Tab>


            <Tab className={styles.tab} group={'Components'} label={'Inputs'}>
                <Inputs/>
            </Tab>
            <Tab className={styles.tab} group={'Components'} label={'Feedback'}>
                <Feedback/>
            </Tab>
            <Tab className={styles.tab} group={'Components'} label={'Visualization'}>

            </Tab>
            <Tab className={styles.tab} group={'Components'} label={'Navigation'}>
                <Navigation/>
            </Tab>
            <Tab className={styles.tab} group={'Components'} label={'Theming'}>
                <Theming/>
            </Tab>
            <Tab className={styles.tab} group={'Components'} label={'Misc'}>
                <Misc/>
            </Tab>
        </VerticalTabs>
    )
}
