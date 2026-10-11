import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getCurrentQunantity } from "../cart/cartSlice";
import DeletItem from "../cart/DeletItem";
import UpdateCartQuantity from "../cart/UpdateCartQuantity";
function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch=useDispatch()
  const currentQuantity=useSelector(getCurrentQunantity(id))
  const isInCart=currentQuantity>0;
  function handleAddToCart() {
    const newItem={
      pizzaId:id,
      name,
      quantity:1,
      unitPrice,
      totalPrice:unitPrice*1
    }
    dispatch(addItem(newItem))
  }
  return (
    <li className="flex  gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex flex-col w-full pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
          {isInCart && (
            <div className="flex items-center gap-3 sm:gap-8">
              <UpdateCartQuantity
                pizzaId={id}
                currentQuantity={currentQuantity}
              />
              <DeletItem pizzaId={id} />
            </div>
          )}

          {!soldOut&& !isInCart && <Button type="small" onClick={handleAddToCart}>Add To cart</Button>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
