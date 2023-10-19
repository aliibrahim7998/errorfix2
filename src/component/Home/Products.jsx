// import { Navigate } from "react-router-dom";
// function Products() {
//     const navigateTo=useNavigate();
//     return (
//         <>
//         <h1>Product</h1>
//         <button onClick={()=>navigateTo("/order-confirmed")}>OrderConfirmed</button>
//         </>
//     );
// }

// export default Products;

///////////////////////////
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

// import { Link } from "react-router-dom";

function Products() {
  const [data, setdata] = useState([]);
  const [searchData, setSearchData] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      console.log(response.data);
      setdata(response.data);
    };
    fetchData();
  }, []);
  const Filterdata = data.filter((product) => {
    return product.title.includes(setSearchData);
  });
  return (
    <>
    <input type="text"></input>
    <div>
      <input
      type="text" value={setSearchData} placeholder="Search Your Product"></input>
      </div>
      <h1>Product 42</h1>
      {data.map((element, index) => {
        <p key={index}></p>;
        return (
          <p>
            {element.title}
            <Link to={`/productDetail/${element.id}`}>{element.title}</Link>
          </p>
        );
      })}
    </>
  );
}
export default Products;
