import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyToysCard from "./MyToysCard";

const MyToys = () => {
    const {user} = useContext(AuthContext);
    const [toys, setToys] = useState([]);

    useEffect(()=>{
        fetch(`https://learning-using-toys-with-joy-server.vercel.app/mytoys/${user?.email}`)
        .then(res => res.json())
        .then(data =>{
          const sortedData = data.sort((a, b) => b.price - a.price);
            setToys(sortedData);
        })
    }, [user])
  return (
    <>
      <div className="w-10/12 mx-auto">
        <h3 className="uppercase text-2xl text-center my-10 font-bold text-[#ff0099]">My toys</h3>
        <div className="grid grid-cols-1 gap-2">
            {
                toys.map(toy => <MyToysCard
                key={toy._id}
                toy={toy}
                toys={toys}
                setToys={setToys}
                >
                </MyToysCard>)
            }
        </div>
      </div>
    </>
  );
};

export default MyToys;
