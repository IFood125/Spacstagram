import { useState, useEffect } from "react";
const APOD = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [liked, setLiked] = useState(false);
    const link = "https://api.nasa.gov/planetary/apod?api_key=" + process.env.REACT_APP_APIKEY;

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
    fetch(link)
        .then(res => res.json())
        .then(
        (result) => {
            setIsLoaded(true);
            setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
            setIsLoaded(true);
            setError(error);
        }
        )
    }, [])

    if (error)
    {
        return <div>Error: {error.message}</div>;
    }
    else if (!isLoaded)
    {
        return <div className="loader"></div>;
    }
    else
    {
        return (
            <div>
                <h1>Picture of the day: {items.title}</h1>
                <p>
                    Brought to you by NASA's image API
                </p>
                <div className='flip-box'>
                    
                    <div className="flip-box-inner">
                        <div className='flip-box-front'>
                            <img className='picture' src={items.url} alt={items.title}></img>
                            <p>
                                {items.date}
                            </p>
                        </div>
                        <div className="flip-box-back">
                            {items.explanation}
                        </div>
                    </div>
                </div>
                <button className={liked? 'fa fa-thumbs-up fa-liked': 'fa fa-thumbs-up'} onClick={()=>{setLiked(!liked)}}></button>
            </div>
        );
    }
    
}
 
export default APOD;