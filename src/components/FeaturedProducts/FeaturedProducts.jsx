import Card from '../Card/Card';

import './FeaturedProducts.scss'

import useFetch from '../../hooks/useFetch';

const FeaturedProducts = ({ type }) => {

    const { data, loading, error } = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`);


    return (
        <div className='featuredProducts'>
            <div className="top">
                <h1>{type} Products</h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet sit doloremque quisquam vitae obcaecati quis odit mollitia. Vero, quam exercitationem. Minus est vitae sapiente excepturi consequatur deleniti, quam quidem. A dignissimos, iusto ea minima accusantium laboriosam, odit molestiae tenetur incidunt ratione repudiandae, nobis recusandae quas? Itaque iusto praesentium recusandae id.
                </p>
            </div>
            <div className="bottom">
                {error
                    ? "Something went wrong!"
                    : loading
                        ? "loading"
                        : data?.map((item) => <Card item={item} key={item.id} />)}
            </div>
        </div>
    )
}

export default FeaturedProducts