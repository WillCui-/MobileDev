import React from 'react';
import ReactMarkdown from 'react-markdown';
import Paper from '@material-ui/core/Paper';
import 'github-markdown-css';
import Embed from 'react-music-embed';

export default function Lyrics(props) {

    return (
        <Paper>
            <Embed url={props.url} width={768} height={150} />
            <div style={{ backgroundColor: 'white', padding: 12 }}>
                <ReactMarkdown
                    className="markdown-body"
                    source={props.lyrics}
                    escapeHtml={true}
                />
            </div>
        </Paper>
    )
}