import { useSelector } from "react-redux";

export default function Username() {
  const updateName=useSelector((store)=>store.user.username)
  if (!updateName)return
  return <div className="hidden text-sm font-semibold md:block">{updateName}</div>;
}
