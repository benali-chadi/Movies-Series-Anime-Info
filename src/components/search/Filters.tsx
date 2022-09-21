import React, { FC, useContext, useState } from "react";
// import { FilterInter } from "../../../pages/search";
import { BsChevronDown } from "react-icons/bs";
import { FilterContext, filtersInitialState } from "../helpers/context";
import GenresFilter from "./filters/GenresFilter";
import SortFilter from "./filters/SortFilter";
import StatusFilter from "./filters/StatusFilter";
import YearFilter from "./filters/YearFilter";

const Filters = () => {
	const { filters, setFilters } = useContext(FilterContext);

	const handleReset = () => {
		setFilters(filtersInitialState);
	};
	return (
		<div>
			<div className="flex gap-4">
				<SortFilter />
				<YearFilter />
				<StatusFilter />
				<GenresFilter genres={new Array(10).fill("gnr")} />
			</div>
			<div className="flex gap-2 mt-2">
				<h3 className="px-4 text-lg font-bold bg-white rounded-lg cursor-pointer hover:bg-white/80">
					search
				</h3>
				<h3
					className="px-4 text-lg font-bold bg-white rounded-lg cursor-pointer hover:bg-white/80"
					onClick={handleReset}
				>
					Reset
				</h3>
			</div>
		</div>
	);
};

export default Filters;
