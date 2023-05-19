import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyToysCard from "./MyToysCard";

const MyToys = () => {
    const {user} = useContext(AuthContext);
    const [toys, setToys] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/mytoys/${user?.email}`)
        .then(res => res.json())
        .then(data =>{
            setToys(data);
        })
    }, [user])
  return (
    <>
      <div className="w-10/12 mx-auto">
        <h3 className="uppercase text-2xl text-center my-10 font-bold text-[#ff0099]">My toys</h3>
        <div>
            {
                toys.map(toy => <MyToysCard
                key={toy._id}
                toy={toy}
                >
                </MyToysCard>)
            }
        </div>
      </div>
    </>
  );
};

export default MyToys;
