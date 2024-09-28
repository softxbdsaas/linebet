import Link from "next/link";
import CategoryByGamesItems from "./CategoryByGamesItems";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
const CategoryByGames = ({ title, data, prev, next }) => {
  return (
    <div className=" w-full overflow-hidden">
      <div className="flex justify-between items-center py-2">
        <div>
          <h1 className="border-l-[2px] pl-2 border-slot_active-base py-1 text-white uppercase text-[14px] md:text-[22px]">
            {title}
          </h1>
        </div>
        <Link
          href={"/"}
          className=" flex md:hidden text-[10px] uppercase items-center gap-1"
        >
          <span>More</span>
          <MdKeyboardDoubleArrowRight className="text-[14px]" />{" "}
        </Link>
        <button className="bg-button-base hidden md:block text-[14px] py-2 px-3 md:px-8 text-center">
          Show all
        </button>
      </div>

      <CategoryByGamesItems prev={prev} next={next} allGamesData={data} />
    </div>
  );
};

export default CategoryByGames;
