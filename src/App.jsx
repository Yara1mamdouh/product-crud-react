import { useState } from "react";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";

function App() {

  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);



  function addProduct(product) {
    console.log("3-addproduct called")

    const newProduct = {
      ...product,
      id: Date.now()
    };
    console.log("4-addproduct called")
    setProducts([...products, newProduct])

  }

  function deleteProduct(id) {

    setProducts(
      products.filter((product) => product.id !== id)
    );

  }
  function updateProduct(updatedProduct) {
    setProducts(
      products.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product


      )
    );
  }

  function editProduct(product) {
    setEditingProduct(product);
  }

return (
  <div className="container py-5">

    <div className="text-center mb-5">
      <h1 className="fw-bold">Product Management</h1>
      <p className="text-muted">
        Manage your products easily
      </p>
    </div>

    <ProductForm
      addProduct={addProduct}
      editingProduct={editingProduct}
      updateProduct={updateProduct}
    />

    <ProductList
      products={products}
      deleteProduct={deleteProduct}
      editProduct={editProduct}
    />

  </div>
);
}

export default App;