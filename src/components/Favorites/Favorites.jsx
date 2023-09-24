import { useEffect, useState } from "react";
import Phone from "../Phone/Phone";
import PhoneCard from "../Phone/PhoneCard";


const Favorites = () => {
    const [favorites, setFavorites] = useState([])
    const [nofound, setNofound] = useState('')

   useEffect(() => {
    const favoritesItem = JSON.parse(localStorage.getItem("test"));
   if(favoritesItem){
    setFavorites(favoritesItem)
   }
   else{
    setNofound('No Data Found');
    // console.log('no data found');
   }
   },[])
console.log(favorites);

    return <div> { nofound ? <p className="h-[80vh] flex justify-center items-center">{nofound}</p> : <div>

<div>
    {
        favorites.map(phone => <PhoneCard key={phone.id} phone={phone}></PhoneCard>)
    }
</div>

     </div>
            }
        </div>
   
};

export default Favorites;
// 2 gonta 24 minit dekha hoiche