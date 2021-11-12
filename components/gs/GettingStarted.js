import PropTypes from 'prop-types'
import Article from "../core/visualization/article/Article";
import installation from "./installation";
import styles from "../../styles/Home.module.css";
import Tabs from "../core/navigation/tabs/Tabs";
import Tab from "../core/navigation/tabs/Tab";

export default function GettingStarted() {
    return (
        <Tabs align={'start'}>
            <Tab label={'Installation'}>
                <Article data={installation()}/>
            </Tab>

            <Tab label={'Templates'}>
                acaf
            </Tab>
            <Tab label={'Support'}>
                cafe
            </Tab>
        </Tabs>
    )
}
GettingStarted.propTypes = {}
