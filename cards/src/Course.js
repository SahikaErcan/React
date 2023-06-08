import React from 'react'

const Course = ({image, title, description}) => {
/* 1-) const Course = (props) => {
    console.log(props) */

    /* 2-) const title = props.title;
    const description = props.description;*/

    // 3-) const {title, description} = props;

    return (
        <div className='card'>

            <div className="card-image">
                <figure className="image is-4by3">
                    <img src={image} alt="Kurslarım" />
                </figure>
            </div>

            <div className="card-content">

                <div className="media">
                    <div className="media-content">
                        <p className="title is-4">{title}</p>
                    </div>
                </div>

                <div className="content">
                    {description}
                </div>

            </div>

        </div>
    )
}

export default Course
