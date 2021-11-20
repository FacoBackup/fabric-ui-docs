import styles from "../styles/Home.module.css";
import installation from "../templates/home/installation";
import {Tab} from "mfc-core";
import Article from "../components/core/visualization/article/Article";
import VerticalTabs from "../components/core/navigation/tabs/VerticalTabs";
import NewsPage from "../templates/home/NewsPage";
import Issues from "../templates/home/Issues";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";

export default function index() {
    const [tab, setTab] = useState(0)
    const router = useRouter()

    useEffect(() => {
        const t = router.query.tab
        setTab(t !== undefined && !isNaN(parseInt(t)) ? parseInt(t) : 0)
    }, [router.query])


    return (
        <VerticalTabs
            align={'start'}
            open={tab}
            className={styles.verticalTabs}
            setOpen={index => {
                const url = {pathname: router.pathname, query: {tab: index}}
                router.push(url, url, {shallow: false})
            }}>
            <Tab label={'Usage and Installation'} group={'Getting started'} className={styles.baseTab}>
                <Article data={installation()}/>
            </Tab>
            <Tab label={'News'} group={'More'} className={styles.baseTab}>
                <NewsPage/>
            </Tab>
            <Tab label={'Issues'} group={'More'} className={styles.baseTab}>
                <Issues/>
            </Tab>
        </VerticalTabs>
    )
}
