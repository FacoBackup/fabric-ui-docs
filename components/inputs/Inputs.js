
import Article from "../core/visualization/article/Article";
import installation from "../gs/installation";
import button from "./button";
import dropdown from "./dropdown";
import selector from "./selector";
import form from "./form";
import filefield from "./filefield";
import multiselect from "./multiselect";
import datefield from "./datefield";
import textfield from "./textfield";
import checkbox from "./checkbox";
import styles from '../../styles/Home.module.css'
import {Tab, Tabs} from "mfc-core";

export default function Inputs() {
    return (
        <Tabs className={styles.tabs}>
            <Tab label={'Button'} className={styles.baseTab}>
                <Article data={button()} className={styles.article}/>
            </Tab>

            <Tab label={'Checkbox'} className={styles.baseTab}>
                <Article data={checkbox()} className={styles.article}/>
            </Tab>
            <Tab label={'TextField'} className={styles.baseTab}>
                <Article data={textfield()} className={styles.article}/>
            </Tab>
            <Tab label={'DateField'} className={styles.baseTab}>
                <Article data={datefield()} className={styles.article}/>
            </Tab>
            <Tab label={'Multiselect'} className={styles.baseTab}>
                <Article data={multiselect()} className={styles.article}/>
            </Tab>
            <Tab label={'DropDown'} className={styles.baseTab}>
                <Article data={dropdown()} className={styles.article}/>
            </Tab>
            <Tab label={'FileField'} className={styles.baseTab}>
                <Article data={filefield()} className={styles.article}/>
            </Tab>
            <Tab label={'Form'} className={styles.baseTab}>
                <Article data={form()} className={styles.article}/>
            </Tab>
            <Tab label={'Selector'} className={styles.baseTab}>
                <Article data={selector()} className={styles.article}/>
            </Tab>
        </Tabs>
    )
}
