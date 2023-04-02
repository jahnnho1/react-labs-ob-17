import { useEffect, useState } from "react";

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);
  useEffect(async () => {
    console.log('entro a api')
    const response = await fetch(API);
    const data = await response.json();
    setProducts(data);
    console.log(response)
  }, []);
  return products;
};

export default useGetProducts;
