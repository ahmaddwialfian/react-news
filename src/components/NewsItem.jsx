import React from 'react'
import axios from 'axios'
import logo from '../assets/img/logo.svg'
import { Media, Button } from 'react-bootstrap';

const NewsItem = ({ news }) => {
    let isi = null;
    return (
        <div>
            {
                news.map(
                    (row, i) => (
                        <div>
                            <Media>
                                <img width={150} height={150} className="mr-3" src={row.photo} onError={(e) => { e.target.onerror = null; e.target.src = "nopic.png" }} />
                                <Media.Body>
                                    <h2>{row.title}</h2>
                                    <span className="text-muted">Author <strong>{row.user.username}</strong>, {row.created_at}</span>
                                    <hr />
                                    {row.content.length > 150 ?
                                        (
                                            <div style={{ align: 'justify' }}>
                                                {`${row.content.substring(0, 100)}...`}
                                                <div className="float-right">
                                                    <br />
                                                    <Button variant="info">Read more</Button>
                                                </div>
                                            </div>
                                        ) :
                                        <p>{row.content}</p>}
                                </Media.Body>
                            </Media>
                            <hr />
                        </div>
                    )
                )
            }
        </div >
    )
}
export default NewsItem;