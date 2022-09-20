import React, { FC, useState } from "react";
import { FilterInter } from "../../../pages/search";
import { BsChevronDown } from "react-icons/bs";
import SortFilter from "./filters/SortFilter";

interface Props {
	setFilters: React.Dispatch<React.SetStateAction<FilterInter>>;
	filters: FilterInter;
}

const Filters: FC<Props> = ({ setFilters, filters }) => {
	const [toggle, setToggle] = useState<
		"" | "sort" | "year" | "state" | "genres"
	>("");
	return (
		<div>
			<div className="flex gap-4">
				<SortFilter filters={filters} setFilters={setFilters} />
				<div className="flex gap-2 items-center p-2 text-black bg-white rounded-xl cursor-pointer hover:bg-white/80">
					<h3 className="text-xl font-bold">Year</h3>
					<BsChevronDown />
				</div>
				<div className="flex gap-2 items-center p-2 text-black bg-white rounded-xl cursor-pointer hover:bg-white/80">
					<h3 className="text-xl font-bold">Status</h3>
					<BsChevronDown />
				</div>
				<div className="flex gap-2 items-center p-2 text-black bg-white rounded-xl cursor-pointer hover:bg-white/80">
					<h3 className="text-xl font-bold">Genres</h3>
					<BsChevronDown />
				</div>
			</div>
			<div className="flex gap-2 mt-2">
				<h3 className="px-4 text-lg font-bold bg-white rounded-lg cursor-pointer hover:bg-white/80">
					search
				</h3>
				<h3 className="px-4 text-lg font-bold bg-white rounded-lg cursor-pointer hover:bg-white/80">
					Reset
				</h3>
			</div>
		</div>
	);
};

export default Filters;
