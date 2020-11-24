import React, { useEffect, useState } from "react";
import Products from "../components/Products";
import Axios from "axios";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await Axios.get("/api/products");
      setProducts(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="row center">
        {products.map((product) => (
          <Products key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
