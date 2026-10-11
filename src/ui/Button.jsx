export default function Button({ children, disable, type ,onClick}) {
  const basestyle =
    "inline-block rounded-full text-sm bg-yellow-400  uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed font-semibold";
  const style = {
    primery: basestyle + " px-4 py-3 md:px-6 md:py-4 ",
    small: basestyle + " px-4 py-2 md:px-5 md:py-2.5 text-xs ",
     round: basestyle + ' px-2.5 py-1 md:px-3.5 md:py-2 text-sm',
    secondary:
      "inline-block text-sm rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5",
  };
  if (onClick) {
    return (
    <button className={style[type]} disabled={disable} onClick={onClick}>
      {children}
    </button>
  );
  }
  return (
    <button className={style[type]} disabled={disable} >
      {children}
    </button>
  );
}
