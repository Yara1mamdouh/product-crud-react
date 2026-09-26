function ProductList({ products, deleteProduct, editProduct }) {

    return (
        <div className="mt-4">

            <h2 className="fw-bold mb-4">
                Products
            </h2>

            {products.map((product) => (
                <div
                    key={product.id}
                    className="card border-0 shadow-sm rounded-4 p-4 mb-3"
                >

                    <div className="d-flex justify-content-between align-items-start">

                        <div>
                            <h4 className="fw-bold mb-2">
                                {product.name}
                            </h4>

                            <p className="text-primary fw-semibold mb-2">
                                Price: {product.price}
                            </p>

                            <p className="text-muted mb-0">
                                {product.details}
                            </p>
                        </div>

                        <div className="d-flex gap-2">

                            <button
                                className="btn btn-warning px-4"
                                onClick={() => editProduct(product)}
                            >
                                Edit
                            </button>

                            <button
                                className="btn btn-danger px-4"
                                onClick={() => deleteProduct(product.id)}
                            >
                                Delete
                            </button>

                        </div>

                    </div>

                </div>
            ))}

        </div>
    );
}

export default ProductList;