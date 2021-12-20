import news from "./news";
import React from 'react'
import {Card, Masonry} from "@f-ui/core";

export default function NewsPage() {
    return (
        <Masonry  width={'100%'} title={'Cafe'} >
            <>
                {news.map((e, i) => (
                    <React.Fragment key={'news-' + i}>
                        <Card

                        >
                            Cafe
                        </Card>
                    </React.Fragment>
                ))}
            </>
        </Masonry>
    )
}