import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";

export default function UpdateOrder() {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primery">Make priority</Button>
    </fetcher.Form>
  );
}
export async function action({ request, params }) {
  console.log("salam")
  const data = { priority: true };
  await updateOrder(params.orderid, data);
  return null;
}
