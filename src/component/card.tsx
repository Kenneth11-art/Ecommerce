import { Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";
import { IProduct } from "@/interface/iproducts";

interface ICardProps{
    product:IProduct
}
const Cards:React.FC<ICardProps>=({product})=>{
    const{image, title, price, id} = product
    return (
        <div className="grid grid-cols-4 gap-y-3 md: grid md:grid-cols-4 md: gap-y-3">
            
               
                    <Card key={id} className="p-4">
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image={image} />
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
                
            
           
        </div>
    );
}
export default Cards;