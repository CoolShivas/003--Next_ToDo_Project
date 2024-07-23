import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <Link href={"/"}> ToDo-App </Link>
      <Link href={"/addToDo"}> Add </Link>
    </>
  );
};

export default Navbar;
