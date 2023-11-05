import React from 'react'
import './List.scss';
import useFetch from '../../hooks/useFetch';
import Card from '../Card/Card';

const List = ({ subCats, maxPrice, sort, catId }) => {

    const { data, loading, error } = useFetch(
        `/products?populate=*&[filters][categories][id]=${catId}`
      );

      console.log(data);
    
    return (
        <div className='list'>
            {data?.map((item) => (
                <Card item={item} key={item.id} />
            ))}
            
        </div>
    )
}

export default List