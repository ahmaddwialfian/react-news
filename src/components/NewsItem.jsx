import React from 'react'
import { Media, Button } from 'react-bootstrap';
import {
    Link, NavLink
} from "react-router-dom";
import moment from 'moment';
import 'moment/locale/id';

const NewsItem = ({ news }) => {
    const divJustify = {
        align: 'justify'
    };
    return (
        <div>
            {
                news.map(
                    (row, i) => (
                        <div key={i}>
                            <Media>
                                <img width={150} height={150} className="mr-3" src={row.photo} onError={(e) => { e.target.onerror = null; e.target.src = "nopic.png" }} />
                                <Media.Body>
                                    <h2>{row.title}</h2>
                                    <span className="text-muted">Author <strong>{row.user.username}</strong>, {moment(row.created_at).fromNow()}</span>
                                    <hr />
                                    {row.content.length > 150 ?
                                        (
                                            <div style={divJustify}>
                                                {`${row.content.substring(0, 100)}...`}
                                                <div className="float-right">
                                                    <br />
                                                    <Link to={() => ("news/" + row.id)}><Button variant="info">Read more</Button></Link>
                                                </div>
                                            </div>
                                        ) :
                                        <p>{row.content}</p>}
                                    <div className="float-right">
                                        <br />
                                        <Link to={() => ("news/" + row.id)}><Button variant="info">Read more</Button></Link>
                                    </div>
                                </Media.Body>
                            </Media>
                            <hr />
                        </div >
                    )
                )
            }
        </div >
    )
}
export default NewsItem;