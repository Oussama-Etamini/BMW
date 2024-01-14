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
        if (id == cars.length  && linkRight.current) {
            linkRight.current.style.pointerEvents = "none";
        } else if (id != cars.length  && linkRight.current) {
            linkRight.current.style.pointerEvents = "auto";
        }
    }
    const clickLeft = () => {
        if (id == 1  && linkLeft.current) {
            linkLeft.current.style.pointerEvents = "none";
        } else if (id != '1' && linkLeft.current) {
            linkLeft.current.style.pointerEvents = "auto";
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
        <>
            <div className='cart'>
                <div className="card col-6">
                    <img src={car.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{car.name}</h5>
                        <p className="card-text">{car.price}$</p>
                    </div>
                </div>
            </div>
            <Link ref={linkRight} onClick={clickRight()} className="fa-sharp fa-solid fa-chevron-right arrow-right" to={`/Menu/${parseInt(id) + 1}`}></Link>
            <Link ref={linkLeft} onClick={clickLeft()} className="fa-sharp fa-solid fa-chevron-left arrow-left" to={`/Menu/${parseInt(id) - 1}`}></Link>
        </>
    );
}

export default MenuOne;