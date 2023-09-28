
import { useEffect, useState } from "react";
import PhoneCard from "../Phone/PhoneCard";
import { Helmet } from "react-helmet-async";

const Favorites = () => {

  const [favorites, setFavorites] = useState([]);
  const [noFound, setNofound] = useState(false);
  const [isShow,setIsShow] = useState(false)

  const [totalPrice,setTotalPrice] = useState(0)

  useEffect(() => {
    const favoriteItems = JSON.parse(localStorage.getItem("favorites"));

    if (favoriteItems) {
      setFavorites(favoriteItems);

      const total = favoriteItems.reduce((preValue,currentItem)=> preValue + currentItem.price,0)

    //   console.log(total);

      setTotalPrice(total)


    } else {
      setNofound("No Data Found");
    }
  }, []);

//   console.log(favorites);

  const handleRemove = () => {
    localStorage.clear();
    setFavorites([]);
    setNofound("No Data Found");
  };


//   console.log(isShow);

  return (
    <div>
      <Helmet>
        <title>favorites phones </title>
      </Helmet>

      {noFound ? (
        <p className="h-[80vh] flex justify-center items-center">{noFound}</p>
      ) : (
        <div>
          {favorites.length > 0 && (
            <div>
                <button
              onClick={handleRemove}
              className="px-5 bg-green-200 block mx-auto"
            >
              Deleted All favorites
            </button>

            <h1>Total price : {totalPrice}</h1>
            </div>
          )}

          <div className="grid grid-cols-2 gap-5">
            {
               isShow ? favorites.map((phone) =>(
                 <PhoneCard key={phone.id} phone={phone}></PhoneCard>
                 ))
                 : favorites.slice(0,4).map((phone) =>(
                    <PhoneCard key={phone.id} phone={phone}></PhoneCard>
                 ))
                
                }
          </div>

      {favorites.length > 4 &&     <button onClick={()=>setIsShow(!isShow)} className="px-5 bg-green-200 block mx-auto">
            {isShow ? "See less" : "See more"}
          </button>}
        </div>
      )}
    </div>
  );
};

export default Favorites;