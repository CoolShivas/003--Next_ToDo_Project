import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-slate-900 px-8 py-3">
      <Link href={"/"} className="text-white font-bold"> ToDo-App </Link>
      <Link href={"/addToDo"} className="bg-white p-2"> Add </Link>
    </nav>
  );
};

export default Navbar;
