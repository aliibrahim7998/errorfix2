import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function ProductDetail() {
  const param = useParams();
  // const id = param.id;
  const [data, setdata] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      console.log(res.data);
      setdata(res.data);
    };
    fetchData();
  }, [param.id]);

  return (
    <>
      <div>
        <h1>Product Detail</h1>
        <h1>{data.title}</h1>
        <h2>{data.price}</h2>
      </div>
    </>
  );
}

export default ProductDetail;
