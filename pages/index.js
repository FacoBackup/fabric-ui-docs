import styles from "../styles/Home.module.css";

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
import { Tab,  Empty} from "mfc-core";
import CodeBlock from "../components/core/visualization/code_block/CodeBlock";
import Article from "../components/core/visualization/article/Article";
import codeblock from "../components/visualization/codeblock";
import VerticalTabs from "../components/core/navigation/tabs/VerticalTabs";

export default function index() {
    return (
        <VerticalTabs align={'start'} className={styles.verticalTabs}>

            <Tab label={'Usage and Installation'} group={'Getting started'} className={styles.baseTab}>
                <Article data={installation()}/>
            </Tab>

            <Tab label={'Templates - (coming soon)'} group={'Getting started'} className={styles.baseTab}>
                <Empty customLabel={'Coming soon'}/>
            </Tab>
            <Tab label={'Support - (coming soon)'} group={'Getting started'} className={styles.baseTab}>
                <Empty customLabel={'Coming soon'}/>
            </Tab>

            <Tab label={'Button'} group={'Inputs - (Components)'} className={styles.baseTab}>
                <Article data={button()} className={styles.article}/>
            </Tab>

            <Tab label={'Checkbox- (coming soon)'} group={'Inputs - (Components)'} className={styles.baseTab}>
                {/*<Article data={checkbox()} className={styles.article}/>*/}
                <Empty customLabel={'Coming soon'}/>
            </Tab>
            <Tab label={'TextField - (coming soon)'} group={'Inputs - (Components)'} className={styles.baseTab}>
                {/*<Article data={textfield()} className={styles.article}/>*/}
                <Empty customLabel={'Coming soon'}/>
            </Tab>
            <Tab label={'DateField'} group={'Inputs - (Components)'} className={styles.baseTab}>
                <Article data={datefield()} className={styles.article}/>
            </Tab>
            <Tab label={'Multiselect - (coming soon)'} group={'Inputs - (Components)'} className={styles.baseTab}>
                {/*<Article data={multiselect()} className={styles.article}/>*/}
                <Empty customLabel={'Coming soon'}/>
            </Tab>
            <Tab label={'DropDown - (coming soon)'} group={'Inputs - (Components)'} className={styles.baseTab}>
                {/*<Article data={dropdown()} className={styles.article}/>*/}
                <Empty customLabel={'Coming soon'}/>
            </Tab>
            <Tab label={'FileField - (coming soon)'} group={'Inputs - (Components)'} className={styles.baseTab}>
                {/*<Article data={filefield()} className={styles.article}/>*/}
                <Empty customLabel={'Coming soon'}/>
            </Tab>
            <Tab label={'Form - (coming soon)'} group={'Inputs - (Components)'} className={styles.baseTab}>
                {/*<Article data={form()} className={styles.article}/>*/}
                <Empty customLabel={'Coming soon'}/>
            </Tab>
            <Tab label={'Selector - (coming soon)'} group={'Inputs - (Components)'} className={styles.baseTab}>
                {/*<Article data={selector()} className={styles.article}/>*/}
                <Empty customLabel={'Coming soon'}/>
            </Tab>

            <Tab label={'Tab - (coming soon)'} group={'Navigation - (Components)'} className={styles.baseTab}>
                <Empty customLabel={'Coming soon'}/>
            </Tab>
            <Tab label={'VerticalTabs - (coming soon)'} group={'Navigation - (Components)'} className={styles.baseTab}>
                <Empty customLabel={'Coming soon'}/>
            </Tab>
            <Tab label={'Tabs - (coming soon)'} group={'Navigation - (Components)'} className={styles.baseTab}>
                <Empty customLabel={'Coming soon'}/>
            </Tab>
            <Tab label={'Switcher - (coming soon)'} group={'Navigation - (Components)'} className={styles.baseTab}>
                <Empty customLabel={'Coming soon'}/>
            </Tab>
            <Tab label={'Modal - (coming soon)'} group={'Navigation - (Components)'} className={styles.baseTab}>
                <Empty customLabel={'Coming soon'}/>
            </Tab>

            <Tab label={'CodeBlock'} group={'Visualization - (Components)'} className={styles.baseTab}>
                <Article data={codeblock()} className={styles.article}/>
            </Tab>

            <Tab label={'List - (coming soon)'} group={'Visualization - (Components)'} className={styles.baseTab}>
                <Empty customLabel={'Coming soon'}/>
            </Tab>
            <Tab label={'Article - (coming soon)'} group={'Visualization - (Components)'} className={styles.baseTab}>
                <Empty customLabel={'Coming soon'}/>
            </Tab>
            <Tab label={'HorizontalChart - (coming soon)'} group={'Charts - (Components)'} className={styles.baseTab}>
                <Empty customLabel={'Coming soon'}/>
            </Tab>

            <Tab label={'VerticalChart - (coming soon)'} group={'Charts - (Components)'} className={styles.baseTab}>
                <Empty customLabel={'Coming soon'}/>
            </Tab>
            <Tab label={'LineChart - (coming soon)'} group={'Charts - (Components)'} className={styles.baseTab}>
                <Empty customLabel={'Coming soon'}/>
            </Tab>
            <Tab label={'PieChart - (coming soon)'} group={'Charts - (Components)'} className={styles.baseTab}>
                <Empty customLabel={'Coming soon'}/>
            </Tab>
        </VerticalTabs>
    )
}
