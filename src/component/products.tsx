import { useEffect, useState } from "react";
import { IProduct } from "@/interface/iproducts";

const Product = () => {
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        try {
            fetch('https://fakestoreapi.com/products')
                .then(res => res.json())
                .then(data => {
                    setProducts(data)
                })
                console.log(Product);
        } catch (err) {
            console.error(err);
        }
    }, [products])


  
};

export default Product;