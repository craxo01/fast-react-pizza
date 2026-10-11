import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalPrice, getTotalQuantity } from "./cartSlice";
function CartOverview() {
  const totalprice=useSelector(getTotalPrice)
  const totalquantity=useSelector(getTotalQuantity)
  if(!totalquantity)return
  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalquantity} pizzas</span>
        <span>${totalprice}</span>
      </p>
      <Link to="./cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
