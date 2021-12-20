import styles from "../styles/Home.module.css";

import {Tab, VerticalTabs} from "@f-ui/core";
import {Markdown, useGithubFile, useMarkdown} from "@f-ui/markdown";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";


export default function components() {
    const [tab, setTab] = useState(0)
    const router = useRouter()


    const button = useGithubFile({
        user: 'fabric-ui',
        repo: 'fabric-ui',
        branch: 'next',
        filePath: 'docs/en/inputs/button.md'
    })
    const buttonHook = useMarkdown(button)

    const alert = useGithubFile({
        user: 'fabric-ui',
        repo: 'fabric-ui',
        branch: 'next',
        filePath: 'docs/en/feedback/alert.md'
    })
    const alertHook = useMarkdown(alert)

    const tooltip = useGithubFile({
        user: 'fabric-ui',
        repo: 'fabric-ui',
        branch: 'next',
        filePath: 'docs/en/feedback/tooltip.md'
    })
    const tooltipHook = useMarkdown(tooltip)

    const ripple = useGithubFile({
        user: 'fabric-ui',
        repo: 'fabric-ui',
        branch: 'next',
        filePath: 'docs/en/feedback/ripple.md'
    })
    const rippleHook = useMarkdown(ripple)

    const useCopy = useGithubFile({
        user: 'fabric-ui',
        repo: 'fabric-ui',
        branch: 'next',
        filePath: 'docs/en/hooks/use-copy-to-clipboard.md'
    })
    const useCopyHook = useMarkdown(useCopy)

    const useFile = useGithubFile({
        user: 'fabric-ui',
        repo: 'fabric-ui',
        branch: 'next',
        filePath: 'docs/en/hooks/use-file.md'
    })
    const useFileHook = useMarkdown(useFile)

    const useInf = useGithubFile({
        user: 'fabric-ui',
        repo: 'fabric-ui',
        branch: 'next',
        filePath: 'docs/en/hooks/use-infinite-scroll.md'
    })
    const useInfHook = useMarkdown(useInf)

    const modal = useGithubFile({
        user: 'fabric-ui',
        repo: 'fabric-ui',
        branch: 'next',
        filePath: 'docs/en/navigation/modal.md'
    })
    const modalHook = useMarkdown(modal)

    const breadcrumbs = useGithubFile({
        user: 'fabric-ui',
        repo: 'fabric-ui',
        branch: 'next',
        filePath: 'docs/en/navigation/breadcrumbs.md'
    })
    const breadcrumbsHook = useMarkdown(breadcrumbs)

    const dropdown = useGithubFile({
        user: 'fabric-ui',
        repo: 'fabric-ui',
        branch: 'next',
        filePath: 'docs/en/navigation/drop-down.md'
    })
    const dropdownHook = useMarkdown(dropdown)

    const switcher = useGithubFile({
        user: 'fabric-ui',
        repo: 'fabric-ui',
        branch: 'next',
        filePath: 'docs/en/navigation/switcher.md'
    })
    const switcherHook = useMarkdown(switcher)

    const tabs = useGithubFile({
        user: 'fabric-ui',
        repo: 'fabric-ui',
        branch: 'next',
        filePath: 'docs/en/navigation/tabs.md'
    })
    const tabsHook = useMarkdown(tabs)

    const fabric = useGithubFile({
        user: 'fabric-ui',
        repo: 'fabric-ui',
        branch: 'next',
        filePath: 'docs/en/navigation/fabric.md'
    })
    const fabricHook = useMarkdown(fabric)
    const date = useGithubFile({
        user: 'fabric-ui',
        repo: 'fabric-ui',
        branch: 'next',
        filePath: 'docs/en/inputs/date-field.md'
    })
    const dateHook = useMarkdown(date)

    useEffect(() => {
        const t = router.query.tab
        setTab(t !== undefined && !isNaN(parseInt(t)) ? parseInt(t) : 0)
    }, [router.query])

    return (
        <VerticalTabs align={'start'} className={styles.verticalTabs} open={tab}
                      setOpen={index => {
                          const url = {pathname: router.pathname, query: {tab: index}}
                          router.push(url, url, {shallow: false})
                      }}>
            <Tab label={'Fabric'} className={styles.baseTab}>
                <Markdown data={fabric} hook={fabricHook}/>
            </Tab>
            <Tab label={'Button'} group={'Inputs'} className={styles.baseTab}>
                <Markdown data={button} hook={buttonHook}/>
            </Tab>

            <Tab label={'Checkbox - (coming soon)'} disabled={true} group={'Inputs'} className={styles.baseTab}>
                {/*<Article data={checkbox()} className={styles.article}/>*/}
                <></>
            </Tab>
            <Tab label={'TextField - (coming soon)'} disabled={true} group={'Inputs'} className={styles.baseTab}>
                {/*<Article data={textfield()} className={styles.article}/>*/}
                <></>
            </Tab>
            <Tab label={'DateField'} group={'Inputs'} className={styles.baseTab}>
                <Markdown hook={dateHook}/>
                {/*<Article data={datefield()} className={styles.article}/>*/}
            </Tab>
            <Tab label={'Multiselect - (coming soon)'} disabled={true} group={'Inputs'} className={styles.baseTab}>
                {/*<Article data={multiselect()} className={styles.article}/>*/}
                <></>
            </Tab>
            <Tab label={'SelectField - (coming soon)'} disabled={true} group={'Inputs'} className={styles.baseTab}>
                {/*<Article data={dropdown()} className={styles.article}/>*/}
                <></>
            </Tab>
            <Tab label={'FileField - (coming soon)'} disabled={true} group={'Inputs'} className={styles.baseTab}>
                {/*<Article data={filefield()} className={styles.article}/>*/}
                <></>
            </Tab>
            <Tab label={'Form - (coming soon)'} disabled={true} group={'Inputs'} className={styles.baseTab}>
                {/*<Article data={form()} className={styles.article}/>*/}
                <></>
            </Tab>

            {/*<Tab label={'NavigationRail'} group={'Navigation'} className={styles.baseTab}>*/}
            {/*    <>*/}
            {/*    /!*<Article data={rail()} className={styles.article}/>*!/*/}
            {/*</Tab>*/}

            <Tab label={'Tabs / VerticalTabs / Tab'} group={'Navigation'} className={styles.baseTab}>
                <Markdown hook={tabsHook}/>
            </Tab>
            <Tab label={'Switcher'} group={'Navigation'} className={styles.baseTab}>
                <Markdown hook={switcherHook}/>
            </Tab>
            <Tab label={'Modal'} group={'Navigation'} className={styles.baseTab}>
                <Markdown hook={modalHook}/>
            </Tab>
            <Tab label={'Dropdown'} group={'Navigation'} className={styles.baseTab}>
                <Markdown hook={dropdownHook}/>
            </Tab>
            <Tab label={'Breadcrumbs'} group={'Navigation'} className={styles.baseTab}>
                <Markdown hook={breadcrumbsHook}/>
            </Tab>
            {/*<Tab label={'Masonry - (coming soon)'} disabled={true} group={'Visualization'} className={styles.baseTab}>*/}
            {/*    <>*/}
            {/*</Tab>*/}
            {/*<Tab label={'Card - (coming soon)'} disabled={true} group={'Visualization'} className={styles.baseTab}>*/}
            {/*    <>*/}
            {/*</Tab>*/}

            <Tab label={'Ripple'} group={'Feedback'} className={styles.baseTab}>
                <Markdown hook={rippleHook}/>
            </Tab>
            <Tab label={'Alert'} group={'Feedback'} className={styles.baseTab}>
                <Markdown hook={alertHook}/>
            </Tab>
            <Tab label={'Tooltip'} group={'Feedback'} className={styles.baseTab}>
                <Markdown hook={tooltipHook}/>
            </Tab>

            <Tab label={'useCopyToClipboard'} group={'hooks'} className={styles.baseTab}>
                <Markdown hook={useCopyHook}/>
            </Tab>
            <Tab label={'useFile'} group={'hooks'} className={styles.baseTab}>
                <Markdown hook={useFileHook}/>
            </Tab>
            <Tab label={'useInfiniteScroll'} group={'hooks'} className={styles.baseTab}>
                <Markdown hook={useInfHook}/>
            </Tab>

        </VerticalTabs>
    )
}
