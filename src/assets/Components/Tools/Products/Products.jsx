import Product from './Product/Product';

const Products = ({productData, addProduct, cart}) => {

    return (
        <div className='w-full grid gap-8 grid-cols-1 sm:grid-cols-2 px-5 lg:px-0 lg:grid-cols-3'>
            {
                productData.data.map(product => <Product key={product.id} product={product} cart={cart} addProduct={addProduct}/>)
            }
        </div>
    );
};

export default Products;