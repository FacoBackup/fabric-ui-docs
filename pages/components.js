import styles from "../styles/Home.module.css";
import button from "../templates/components/inputs/button";
import datefield from "../templates/components/inputs/datefield";
import {Empty} from "mfc-core";
import CodeBlock from "../components/core/visualization/code_block/CodeBlock";
import Article from "../components/core/visualization/article/Article";
import codeblock from "../templates/components/visualization/codeblock";
import VerticalTabs from "../components/core/navigation/tabs/VerticalTabs";
import dropdown from "../templates/components/navigation/dropdown";
import Tab from "../components/core/navigation/tabs/Tab";

export default function components() {
    return (
        <VerticalTabs align={'start'} className={styles.verticalTabs}>

            <Tab label={'Button'} group={'Inputs'} className={styles.baseTab}>
                <Article data={button()} className={styles.article}/>
            </Tab>

            <Tab label={'Checkbox - (coming soon)'} disabled={true} group={'Inputs'} className={styles.baseTab}>
                {/*<Article data={checkbox()} className={styles.article}/>*/}
                <Empty customLabel={'Coming soon'}/>
            </Tab>
            <Tab label={'TextField - (coming soon)'} disabled={true} group={'Inputs'} className={styles.baseTab}>
                {/*<Article data={textfield()} className={styles.article}/>*/}
                <Empty customLabel={'Coming soon'}/>
            </Tab>
            <Tab label={'DateField'} group={'Inputs'} className={styles.baseTab}>
                <Article data={datefield()} className={styles.article}/>
            </Tab>
            <Tab label={'Multiselect - (coming soon)'} disabled={true} group={'Inputs'} className={styles.baseTab}>
                {/*<Article data={multiselect()} className={styles.article}/>*/}
                <Empty customLabel={'Coming soon'}/>
            </Tab>
            <Tab label={'DropDown - (coming soon)'} disabled={true} group={'Inputs'} className={styles.baseTab}>
                {/*<Article data={dropdown()} className={styles.article}/>*/}
                <Empty customLabel={'Coming soon'}/>
            </Tab>
            <Tab label={'FileField - (coming soon)'} disabled={true} group={'Inputs'} className={styles.baseTab}>
                {/*<Article data={filefield()} className={styles.article}/>*/}
                <Empty customLabel={'Coming soon'}/>
            </Tab>
            <Tab label={'Form - (coming soon)'} disabled={true} group={'Inputs'} className={styles.baseTab}>
                {/*<Article data={form()} className={styles.article}/>*/}
                <Empty customLabel={'Coming soon'}/>
            </Tab>
            <Tab label={'Selector - (coming soon)'} disabled={true} group={'Inputs'} className={styles.baseTab}>
                {/*<Article data={selector()} className={styles.article}/>*/}
                <Empty customLabel={'Coming soon'}/>
            </Tab>

            <Tab label={'Dropdown'} group={'Navigation'} className={styles.baseTab}>
                <Article data={dropdown()} className={styles.article}/>
            </Tab>

            <Tab label={'Tab - (coming soon)'} disabled={true} group={'Navigation'} className={styles.baseTab}>
                <Empty customLabel={'Coming soon'}/>
            </Tab>
            <Tab label={'VerticalTabs - (coming soon)'} disabled={true} group={'Navigation'} className={styles.baseTab}>
                <Empty customLabel={'Coming soon'}/>
            </Tab>
            <Tab label={'Tabs - (coming soon)'} disabled={true} group={'Navigation'} className={styles.baseTab}>
                <Empty customLabel={'Coming soon'}/>
            </Tab>
            <Tab label={'Switcher - (coming soon)'} disabled={true} group={'Navigation'} className={styles.baseTab}>
                <Empty customLabel={'Coming soon'}/>
            </Tab>
            <Tab label={'Modal - (coming soon)'} disabled={true} group={'Navigation'} className={styles.baseTab}>
                <Empty customLabel={'Coming soon'}/>
            </Tab>

            <Tab label={'CodeBlock'} group={'Visualization'} className={styles.baseTab}>
                <Article data={codeblock()} className={styles.article}/>
            </Tab>

            <Tab label={'List - (coming soon)'} disabled={true} group={'Visualization'} className={styles.baseTab}>
                <Empty customLabel={'Coming soon'}/>
            </Tab>
            <Tab label={'Article - (coming soon)'} disabled={true} group={'Visualization'} className={styles.baseTab}>
                <Empty customLabel={'Coming soon'}/>
            </Tab>

            <Tab label={'HorizontalChart - (coming soon)'} disabled={true} group={'Charts'} className={styles.baseTab}>
                <Empty customLabel={'Coming soon'}/>
            </Tab>
            <Tab label={'VerticalChart - (coming soon)'} disabled={true} group={'Charts'} className={styles.baseTab}>
                <Empty customLabel={'Coming soon'}/>
            </Tab>
            <Tab label={'LineChart - (coming soon)'} disabled={true} group={'Charts'} className={styles.baseTab}>
                <Empty customLabel={'Coming soon'}/>
            </Tab>
            <Tab label={'PieChart - (coming soon)'} disabled={true} group={'Charts'} className={styles.baseTab}>
                <Empty customLabel={'Coming soon'}/>
            </Tab>
        </VerticalTabs>
    )
}
