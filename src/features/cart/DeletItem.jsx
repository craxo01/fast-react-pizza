import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deletItem } from "./cartSlice";

export default function DeletItem({pizzaId}){
    const dispatch=useDispatch()
    return (
        <Button type="small" onClick={()=>dispatch(deletItem(pizzaId))}>Delet</Button>
    )
}