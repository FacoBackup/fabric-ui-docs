import {Button} from "mfc-core";
import styles from "../styles/Home.module.css";
import {Feedback, Navigation} from "@material-ui/icons";
import Theming from "../components/theming/Theming";
import Misc from "../components/misc/Misc";
import Inputs from "../components/inputs/Inputs";

import Tab from "../components/core/navigation/tabs/Tab";
import Tabs from "../components/core/navigation/tabs/Tabs";
import VerticalTabs from "../components/core/navigation/tabs/VerticalTabs";
import Article from "../components/core/visualization/article/Article";
import button from "../components/inputs/button";
import checkbox from "../components/inputs/checkbox";
import textfield from "../components/inputs/textfield";
import datefield from "../components/inputs/datefield";
import multiselect from "../components/inputs/multiselect";
import dropdown from "../components/inputs/dropdown";
import filefield from "../components/inputs/filefield";
import form from "../components/inputs/form";
import selector from "../components/inputs/selector";
import installation from "../components/gs/installation";

export default function index() {
    return (
        <VerticalTabs align={'start'} className={styles.verticalTabs}>
            <Tab label={'Usage and Installation'} group={'Getting started'} className={styles.baseTab}>
                <Article data={installation()}/>
            </Tab>

            <Tab label={'Templates'} group={'Getting started'} className={styles.baseTab}>
                acaf
            </Tab>
            <Tab label={'Support'} group={'Getting started'} className={styles.baseTab}>
                cafe
            </Tab>

            <Tab label={'Button'} group={'Components - Inputs'} className={styles.baseTab}>
                <Article data={button()} className={styles.article}/>
            </Tab>

            <Tab label={'Checkbox'} group={'Components - Inputs'} className={styles.baseTab}>
                <Article data={checkbox()} className={styles.article}/>
            </Tab>
            <Tab label={'TextField'} group={'Components - Inputs'} className={styles.baseTab}>
                <Article data={textfield()} className={styles.article}/>
            </Tab>
            <Tab label={'DateField'} group={'Components - Inputs'} className={styles.baseTab}>
                <Article data={datefield()} className={styles.article}/>
            </Tab>
            <Tab label={'Multiselect'} group={'Components - Inputs'} className={styles.baseTab}>
                <Article data={multiselect()} className={styles.article}/>
            </Tab>
            <Tab label={'DropDown'} group={'Components - Inputs'} className={styles.baseTab}>
                <Article data={dropdown()} className={styles.article}/>
            </Tab>
            <Tab label={'FileField'} group={'Components - Inputs'} className={styles.baseTab}>
                <Article data={filefield()} className={styles.article}/>
            </Tab>
            <Tab label={'Form'} group={'Components - Inputs'} className={styles.baseTab}>
                <Article data={form()} className={styles.article}/>
            </Tab>
            <Tab label={'Selector'} group={'Components - Inputs'} className={styles.baseTab}>
                <Article data={selector()} className={styles.article}/>
            </Tab>

            {/*<Tab className={styles.tab} label={'Feedback'}>*/}
            {/*    <Feedback/>*/}
            {/*</Tab>*/}

            {/*<Tab className={styles.tab} group={'Components'} label={'Navigation'}>*/}
            {/*    <Navigation/>*/}
            {/*</Tab>*/}
            {/*<Tab className={styles.tab} group={'Components'} label={'Theming'}>*/}
            {/*    <Theming/>*/}
            {/*</Tab>*/}
            {/*<Tab className={styles.tab} group={'Components'} label={'Misc'}>*/}
            {/*    <Misc/>*/}
            {/*</Tab>*/}
        </VerticalTabs>
    )
}
