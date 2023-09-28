import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import PhoneCard from "./PhoneCard";
import { Helmet } from "react-helmet-async";


const Phone = () => {
    const [phone, setPhone] =useState();
    const {id} = useParams();
    // console.log(id);
    const phones = useLoaderData();

    useEffect(() => {
        const findPhone = phones?.find(phone => phone.id === id);
     setPhone(findPhone);
    },[id,phones])
    // console.log(phone);
    return (
        <div>
            <Helmet><title> phone number :{id}</title></Helmet>
    <PhoneCard phone={phone}></PhoneCard>
        </div>
    );
};

export default Phone;

