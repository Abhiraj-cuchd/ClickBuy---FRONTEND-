import React from 'react'
import './Categories.scss'
import { Link, useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch';

const Categories = () => {

    const id = useParams().id;

    const { data, loading, error } = useFetch('/products/id');

    console.log(data)

  return (
    <div className='categories'>
        <div className="col">
            <div className="row">
                <img src="https://images.pexels.com/photos/18780561/pexels-photo-18780561/free-photo-of-young-woman-in-a-bridal-lehenga-dress.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""  />
                <button>
                    <Link to="/products/1" className='link'>Lehengas</Link>
                </button>
            </div>
            <div className="row">
            <img src="https://images.pexels.com/photos/16594456/pexels-photo-16594456/free-photo-of-woman-posing-in-monochromatic-clothing.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""  />
                <button>
                    <Link to="/products/2" className='link'>Chinos</Link>
                </button>
            </div>
        </div>
        <div className="col">
            <div className="row">
            <img src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""  />
                <button>
                    <Link to="/products/3" className='link'>Hoodies</Link>
                </button>
            </div>
        </div>
        <div className="col col-l">
            <div className="row">
                <div className="col">
                    <div className="row">
                    <img src="https://images.pexels.com/photos/9920820/pexels-photo-9920820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""  />
                <button>
                    <Link to="/products/4" className='link'>Sweatshirts</Link>
                </button>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                    <img src="https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""  />
                <button>
                    <Link to="/products/5" className='link'>Shoes</Link>
                </button>
                    </div>
                </div>
            </div>
            <div className="row">
            <img src="https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=""  />
                <button>
                    <Link to="/products/6" className='link'>Watches</Link>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Categories