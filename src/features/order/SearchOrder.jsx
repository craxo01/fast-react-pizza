import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchOrder() {
  const [query, setquery] = useState("");
  const navigation = useNavigate();
  function handlesubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigation(`/order/${query}`);
    setquery("");
  }
  return (
    <form onSubmit={handlesubmit}>
      <input
        placeholder="Search order #"
        value={query}
        onChange={(e) => setquery(e.target.value)}
        className="w-28 rounded-full text-sm bg-yellow-100 px-4 py-2 transition-all duration-300 placeholder:text-stone-400 placeholder:text-[11px]  focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
      />
    </form>
  );
}
