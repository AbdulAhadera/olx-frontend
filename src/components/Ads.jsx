
import { useState, useEffect } from "react";
import axios from "axios";

function Ads() {
    const [cardsData, setCardsData] = useState()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/products');
                setCardsData(response.data);
                console.log("=====>>", response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        console.log("------->", cardsData);
    }, [cardsData]);



    return (
        <>
            <div>
                <h1>Your Component</h1>
                {cardsData && cardsData.products && (
                    <ul>
                        {cardsData.products.map((product, index) => (
                            <li key={index}>{product.title}</li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    )
}

export default Ads