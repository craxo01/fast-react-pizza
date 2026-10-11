import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { decItemQuantity, incItemQuantity } from './cartSlice';


function UpdateCartQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button
        type="round"
        onClick={() => dispatch(decItemQuantity(pizzaId))}
      >
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button
        type="round"
        onClick={() => dispatch(incItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateCartQuantity;
