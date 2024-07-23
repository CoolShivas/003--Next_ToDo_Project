import Link from "next/link";
import {HiPencilAlt} from "react-icons/hi";
import RemoveBtn from "./RemoveBtn";

const TopicList = () => {
  return (
    <>
    <div>
        <div>
            <h2>Topic Title</h2>
            <div>Topic Description</div>
        </div>

        <div>
            <RemoveBtn></RemoveBtn>
            <Link href={"/editTopic/0123"}>
            <HiPencilAlt size={24}/>
            </Link>
        </div>
    </div>
    </>
  )
}

export default TopicList;