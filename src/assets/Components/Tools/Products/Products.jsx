import Product from './Product/Product';

const Products = ({productData}) => {

    return (
        <div className='w-full grid gap-8 grid-cols-3'>
            {
                productData.data.map(product => <Product product={product} />)
            }
        </div>
    );
};

export default Products;