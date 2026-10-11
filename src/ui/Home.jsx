import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import { Link } from "react-router-dom";
import Button from "./Button";

function Home() {
  const username = useSelector((store) => store.user.username);
  return (
    <div className="sm:my-18 my-10 px-4 text-center">
      <h1 className="mb-8 text-xl font-semibold md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {!username ? (
        <CreateUser />
      ) : (
        <Link to={"/menu"}>
          <Button type="primery">Continue Ordering ,{username}</Button>
        </Link>
      )}
    </div>
  );
}

export default Home;
