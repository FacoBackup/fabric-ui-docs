import PropTypes from 'prop-types'
import {Tab, Tabs} from "mfc-core";
import Article from "../core/visualization/article/Article";
import installation from "./installation";

export default function GettingStarted() {
    return (
        <Tabs>
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
