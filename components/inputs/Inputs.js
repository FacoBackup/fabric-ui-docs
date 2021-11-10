
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
            <Tab label={'Button'}>
                <Article data={button()}/>
            </Tab>

            <Tab label={'Checkbox'}>
                <Article data={checkbox()}/>
            </Tab>
            <Tab label={'TextField'}>
                <Article data={textfield()}/>
            </Tab>
            <Tab label={'DateField'}>
                <Article data={datefield()}/>
            </Tab>
            <Tab label={'Multiselect'}>
                <Article data={multiselect()}/>
            </Tab>
            <Tab label={'DropDown'}>
                <Article data={dropdown()}/>
            </Tab>
            <Tab label={'FileField'}>
                <Article data={filefield()}/>
            </Tab>
            <Tab label={'Form'}>
                <Article data={form()}/>
            </Tab>
            <Tab label={'Selector'}>
                <Article data={selector()}/>
            </Tab>
        </Tabs>
    )
}
