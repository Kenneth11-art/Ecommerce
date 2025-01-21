import { useEffect, useState } from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { IProduct } from "@/interface/iproducts";


const Products = () => {
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        try {
            fetch('https://fakestoreapi.com/products?limit=12')
                .then(res => res.json())
                .then(data => {
                    setProducts(data)
                })
                console.log(Products)
        } catch (err) {
            console.error(err);
        }
    }, [products])


    return (
        <div className="grid grid-cols-4 gap-y-3 md: grid md:grid-cols-4 md: gap-y-3">
            {
                products.length && products.map(({ image, title, price }, i) => (
                    <Card key={i}  className="p-4">
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image={image}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {title}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                ${price}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                ))
            }
            <button className="bg-[blue] p-4 border rounded-[12px] w-[max-content] h-[max-content] ">Sign In</button>
        </div>
    );
};

export default Products;