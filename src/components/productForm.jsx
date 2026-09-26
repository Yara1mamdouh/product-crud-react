import { useState, useEffect } from "react";

function ProductForm({ addProduct, editingProduct, updateProduct }) {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [details, setDetails] = useState("");
    useEffect(() => {
        if (editingProduct) {
            setName(editingProduct.name);
            setPrice(editingProduct.price);
            setDetails(editingProduct.details);
        }
    }, [editingProduct]);

    function handleSubmit() {

        if (editingProduct) {

            updateProduct({
                id: editingProduct.id,
                name: name,
                price: price,
                details: details
            });

        } else {

            addProduct({
                name: name,
                price: price,
                details: details
            });
            setName("");
            setPrice("");
            setDetails("");
        }

    }
    return (
        <div className="card shadow border-0 rounded-4 p-4 mb-5">

            <h2 className="fw-bold mb-4">
                {editingProduct ? "Edit Product" : "Add Product"}
            </h2>

            <div className="mb-3">
                <label className="form-label fw-semibold">
                    Product Name
                </label>

                <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Enter product name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <label className="form-label fw-semibold">
                    Price
                </label>

                <input
                    type="number"
                    className="form-control form-control-lg"
                    placeholder="Enter price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
            </div>

            <div className="mb-4">
                <label className="form-label fw-semibold">
                    Product Details
                </label>

                <textarea
                    className="form-control"
                    placeholder="Enter product details"
                    rows="4"
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                ></textarea>
            </div>

            <button
                type="button"
                className={`btn ${editingProduct ? "btn-warning" : "btn-primary"
                    } w-100 py-2 fw-semibold`}
                onClick={handleSubmit}
            >
                {editingProduct ? "Update Product" : "Add Product"}
            </button>

        </div>
    );
}

export default ProductForm;