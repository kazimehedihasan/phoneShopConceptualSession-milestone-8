import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const Phone = () => {
    const [phone, setPhone] =useState();
    const {id} = useParams();
    console.log(id);
    const phones = useLoaderData();

    useEffect(() => {
        const findPhone = phones?.find(phone => phone.id === id);
        console.log(findPhone);
    },[id,phones])
    return (
        <div>
            this is phone 
        </div>
    );
};

export default Phone;

// 1.gonta 30 mint dekha hoiche