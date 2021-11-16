import Feed from "../../components/core/visualization/feed/Feed";
import FeedCard from "../../components/core/visualization/feed/FeedCard";
import news from "./news";
import React from 'react'

export default function NewsPage() {
    return (
        <Feed title={'Changes & News'}>
            {news.map((e, i) => (
                <React.Fragment key={'news-' + i}>
                    <FeedCard
                        onClick={() => null}
                        {...e}
                    />
                </React.Fragment>
            ))}
        </Feed>
    )
}