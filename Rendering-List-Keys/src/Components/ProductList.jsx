export const ProductList = () => {
    const products = [
        { id: 1, name: 'Watch', price: 200 },
        { id: 2, name: 'Laptop', price: 600 },
        { id: 3, name: 'HeadPhone', price: 250 },
        { id: 4, name: 'TV', price: 400 },
        { id: 5, name: 'iPad', price: 500 }
    ];
    const ProductElements = products
        .filter((product) => (product.price > 200))
        .map((product) => {
            return (
                <div
                    key={product.id}
                    style={{
                        border: '2px solid red',
                        padding: '30px',
                        borderRadius: '20px',
                        backgroundColor: 'lightcyan'
                    }}
                >
                    <h2
                        style={{ color: 'green', marginBottom: '10px' }}>
                        {product.name}
                    </h2>
                    <p>Price: ${product.price}</p>
                </div>

            );
        });
    return (
        <div style={{
            padding: '40px',
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            backgroundColor: 'lightblue',
            margin: '20px',
            gap: '50px'
        }}>

            {ProductElements}
        </div>
    );
};