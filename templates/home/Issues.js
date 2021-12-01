import React, {useEffect, useState} from "react";
import {request} from "mfc-core";
import Feed from "../../components/core/visualization/feed/Feed";
import FeedCard from "../../components/core/visualization/feed/FeedCard";

export default function Issues() {
    const [issues, setIssues] = useState([])

    useEffect(() => {
        request({
            method: 'get',
            url: 'https://api.github.com/repos/facobackup/mfc-core/issues',
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
        <Feed title={'Issues'}>
            {issues.map((e, i) => (
                <React.Fragment key={'news-' + i}>
                    <FeedCard
                        onClick={() => window.open(e.url)}
                        description={e.body}
                        title={e.title}
                        image={'./react-logo.png'}
                    />
                </React.Fragment>
            ))}
        </Feed>
    )
}