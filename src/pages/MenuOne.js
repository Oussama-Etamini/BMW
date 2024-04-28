import React, { useRef, useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import '../styles/MenuOne.css';
import axios from 'axios';

function MenuOne() {

    const [car, setCar] = useState({});
    const [cars, setCars] = useState({});
    const { id } = useParams();
    const linkLeft = useRef();
    const linkRight = useRef();

    const clickRight = () => {
        if (id == cars.length && linkRight.current) {
            linkRight.current.style.pointerEvents = "none";
            linkRight.current.style.color = "#5F6368";
        } else if (id != cars.length && linkRight.current) {
            linkRight.current.style.pointerEvents = "auto";
            linkRight.current.style.color = "black";

        }
    }
    const clickLeft = () => {
        if (id == 1 && linkLeft.current) {
            linkLeft.current.style.pointerEvents = "none";
            linkLeft.current.style.color = "#5F6368";
        } else if (id != '1' && linkLeft.current) {
            linkLeft.current.style.pointerEvents = "auto";
            linkLeft.current.style.color = "black";

        }
    }

    useEffect(() => {
        axios.get(`http://localhost:3001/MenuList/`)
            .then((res) => {
                setCars(res.data);
            })
    })


    useEffect(() => {
        axios.get(`http://localhost:3001/MenuList/${id}`)
            .then((res) => {
                setCar(res.data);
            })
            .catch((error) => {
                console.error('Error fetching car data:', error);
            });
    }, [id]);

    return (
        <div className='background'>
            <div className='cardInfo'>
                <h1 className="card-title">{car.name}</h1>
                <h3 className="card-text">Price : {car.price} $</h3>
                <p>{car.info1}</p>
                <p>{car.info2}</p>
                <div data-tooltip={`${car.price} $`} class="button">
                    <div class="button-wrapper">
                        <div class="text">Buy Now</div>
                        <span class="icon">
                            <svg viewBox="0 0 16 16" class="bi bi-cart2" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
            <div className='cart'>
                <div className="card col-6">
                    <img src={car.image} className="card-img-top" alt="..." />
                </div>
            </div>
            <Link ref={linkRight} onClick={clickRight()} className="fa-sharp fa-solid fa-chevron-right arrow-right" to={`/Menu/${parseInt(id) + 1}`}></Link>
            <Link ref={linkLeft} onClick={clickLeft()} className="fa-sharp fa-solid fa-chevron-left arrow-left" to={`/Menu/${parseInt(id) - 1}`}></Link>
        </div>
    );
}

export default MenuOne;