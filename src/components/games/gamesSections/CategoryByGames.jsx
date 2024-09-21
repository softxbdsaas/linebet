import CategoryByGamesItems from "./CategoryByGamesItems";
const CategoryByGames = ({ title, data ,prev, next}) => {
  return (
    <div className=" w-full overflow-hidden">
      <div className="flex justify-between items-center py-2">
        <div>
          <h1 className="border-l-[2px] pl-2 border-slot_active-base py-1 text-white uppercase text-[22px]">
            {title}
          </h1>
        </div>
        <button className="bg-button-base text-[14px] py-2 px-3 md:px-8 text-center">
          Show all
        </button>
      </div>

      <CategoryByGamesItems prev={prev} next={next} allGamesData={data} />
    </div>
  );
};

export default CategoryByGames;
