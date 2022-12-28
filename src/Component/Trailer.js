import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Button } from 'react-bootstrap'
const Trailer = ({ list }) => {
    const params = useParams()
    const trailerMovie = list.find((elem) => elem.id === params.id)
    console.log(trailerMovie)
    return (
        <>
            <div className="container-fluid"  >
                <div className="row justify-content-center "    >
                    <div className="col-md-4 col-sm-6 card my-3 py-3 border-0" key={list.id} id='card'>
                        <div className="card-img-top text-center">
                            <iframe
                                width="100%"
                                height="300"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                                src={trailerMovie.trailerURL}
                                title="trailer"
                            ></iframe>            </div>
                        <div className="card-body">
                            <a href={trailerMovie.trailerURL} className="card-title fw-bold fs-4">
                                {trailerMovie.title}
                            </a>
                            <div className="card-text">{trailerMovie.description}</div>
                        </div>
                        <hr />
                        <Link to="/">
                            <Button
                                style={{
                                    backgroundColor: "#7457a7",
                                    borderColor: "rgba(99,66,156,1)",
                                    color: "rgb(255, 249, 250)",
                                    textShadow: "2px 2px 4px rgba(61,34,109,1)",
                                    marginLeft: 5,
                                    width: 90,
                                }}>
                                <i class="fa fa-home pink-color" style={{ paddingRight: 5 }}></i>
                                Home
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Trailer