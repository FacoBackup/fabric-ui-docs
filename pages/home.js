import styles from "../styles/Home.module.css";
import {Tab, useFile} from "mfc-core";
import VerticalTabs from "../components/core/navigation/tabs/VerticalTabs";
import NewsPage from "../templates/home/NewsPage";
import Issues from "../templates/home/Issues";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import useGithubFile from "../components/markedown-src/hooks/useGithubFile";
import useMarkdown from "../components/markedown-src/hooks/useMarkdown";
import {Markdown} from "../components/markedown-src";

export default function home() {
    const [tab, setTab] = useState(0)
    const router = useRouter()
    const home = useGithubFile({
        user: 'facobackup',
        repo: 'fabric-ui',
        branch: 'v1.x',
        filePath: '/docs/home.md'
    })


    const markdown = useMarkdown(home)
    console.log(markdown.metadata)
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
                <Markdown hook={markdown}/>
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
