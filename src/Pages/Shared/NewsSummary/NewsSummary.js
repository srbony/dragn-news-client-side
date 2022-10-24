import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { FaEye, FaRegBookmark, FaShareAlt, FaStar, IconName } from "react-icons/fa";

const NewsSummary = ({ news }) => {
    const { author, _id, details, image_url, total_view, title, rating
    } = news;
    // console.log(news)
    return (
        <Card className="mb-4">
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex'>
                    <Image
                        src={author.img}
                        className='me-2'
                        roundedCircle
                        style={{ height: '60px' }}
                    ></Image>
                    <div>
                        <p className='mb-0'>{author?.name}</p>
                        <p>{author?.published_date}</p>

                    </div>

                </div>
                <div>

                    <FaRegBookmark className='me-2'></FaRegBookmark>
                    <FaShareAlt></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>

                    {

                        details.length > 250 ?
                            <>{details.slice(0, 250) + '...'}  <Link to={`/news/${_id}`}>Read More</Link> </>
                            :
                            { details }

                    }
                </Card.Text>

            </Card.Body>
            <Card.Footer className="d-flex justify-content-between">
                <div>
                    <FaStar className='text-warning me-2'></FaStar>
                    <span>{total_view}</span>
                </div>
                <div>
                    <FaEye className='me-2'></FaEye>
                    <span>{rating.number}</span>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsSummary;