    const Homepage = () => {
        return(
            <div>
                <div className="grid grid-cols-2 justify-center mb-[4em]">
                <div><img src="" alt="" /></div>
                <div>DEE_LEGENDS STORES</div>
                </div>
                <div>
                    <p>WELCOME TO DEE_LEGENDS STORES, WHERE USERS CAN BUY PRODUCTS AT AN AFORDABLE PRICE. 
                        BELOW ARE OUR SERVICES AND HOW THINGS ARE DONE AROUND HERE. </p>
                </div>
                <div className="grid  justify-center">
                    <div><img src="" alt="" /></div>
                    <div><p>Products: We have a variety of products spanning from different categories of outfits for both gender.</p></div>
                     <div>
                         <a href="Product">
                         <button className="p-4 border rounded-[10px]">PRODUCTS</button>
                       </a>
                        </div> 
                </div>
            </div>
        )
    };
    export default Homepage;