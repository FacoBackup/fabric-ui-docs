import styles from "../styles/Home.module.css";

import NewsPage from "../templates/home/NewsPage";
import Issues from "../templates/home/Issues";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {Tab, VerticalTabs} from "@f-ui/core";
import {Markdown, useGithubFile, useMarkdown} from "@f-ui/markdown";

export default function home() {

    const home = useGithubFile({
        user: 'facobackup',
        repo: 'fabric-ui',
        branch: 'next',
        filePath: '/docs/en/home.md'
    })

    const homeHook = useMarkdown(home)


    return (
        <div className={styles.verticalTabs} style={{border: 'var(--fabric-border-primary) 1px solid', background: 'var(--fabric-background-primary)', width: '100%', display: 'grid'}}>
            <Markdown hook={homeHook}/>
        </div>
    )
}
