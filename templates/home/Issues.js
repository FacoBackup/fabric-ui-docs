import React, {useEffect, useState} from "react";
import {Card, Masonry} from "@f-ui/core";
import axios from "axios";


export default function Issues() {
    const [issues, setIssues] = useState([])

    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://api.github.com/repos/facobackup/fabric-ui/issues',
            package: {
                per_page: 35
            }
        }).then(res => {
            const data = res.data
            let comments = []

            data.forEach(d => {
                comments.push({
                    title: d.title,
                    body: d.body,
                    labels: d.labels,
                    createdAt: d.created_at,
                    url: d.html_url,
                    state: d.state,
                    user: {
                        name: d.user.login,
                        image: d.user.avatar_url,
                        url: d.user.html_url
                    }
                })
            })

            setIssues(comments)
        })
    }, [])


    return (
        <Masonry title={'Issues'}>
            {issues.map((e, i) => (
                <React.Fragment key={'news-' + i}>
                    <Card
                        onClick={() => window.open(e.url)}
                        description={e.body}
                        title={e.title}
                        image={'./react-logo.png'}
                    />
                </React.Fragment>
            ))}
        </Masonry>
    )
}