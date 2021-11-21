import React, {useEffect, useState} from "react";

import Chart from "../components/core/visualization/charts/Chart";
import {request, useFile} from "mfc-core";
import CodeBlock from "../components/core/visualization/code_block/CodeBlock";
import Markdown from "../components/core/visualization/markdown/Markdown";


export default function test() {
    const [content, setContent] = useState('')
    useEffect(() => {
        request({
            method: 'get',
            url: 'https://raw.githubusercontent.com/FacoBackup/mfc-core/v1.x/docs/home.md'
        }).then(r => setContent(r.data))
    })


    return (
        <div style={{
            padding: '64px',
            boxSizing: 'border-box', width: '100%', height: '100%', overflowY: 'auto', overflowX: 'hidden',
            display: 'flex', flexFlow: 'row wrap', gap: '16px',
            background: 'white'
        }}>
           <Markdown data={content}/>
        </div>
    )
}