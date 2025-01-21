import { useState,useEffect } from "react";
import { IProduct } from "@/interface/iproducts";
const Products = () => {
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        try {
            fetch('https://fakestoreapi.com/products?sort=desc')
                .then(res => res.json())
                .then(data => {
                    setProducts(data)
                })
                console.log(Products)
        } catch (err) {
            console.error(err);
        }
    }, [products])
}