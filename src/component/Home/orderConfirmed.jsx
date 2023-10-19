import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function OrderConfirmed() {
  const navigateTo = useNavigate();
  return (
    <>
      <h1>Order</h1>
      <button onClick={() => navigateTo(-1)}>Go Back</button>
    </>
  );
}

export default OrderConfirmed;
