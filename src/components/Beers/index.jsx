import { useEffect, useState } from "react";
useEffect(() => {
    fetch(`http://api.sampleapis.com/beers/ale`)
    .then(response => response.json())
    .then(beers => setBeersList(beers))
    .catch(alert);
},[]);

function Beers() {
    const [beerList, setBeer] = useState();

    if(!beerList) {
        return <h2>Loading...</h2>
    }
    return (


    )
}


export default Beers;