import React, { FC, useContext, useState } from "react";
import { SearchContext, filtersInitialState } from "../helpers/context";
import GenresFilter from "./filters/GenresFilter";
import SortFilter from "./filters/SortFilter";
import StatusFilter from "./filters/StatusFilter";
import YearFilter from "./filters/YearFilter";

// TO-DO:
// 		- Implement search Click Function

const Filters = () => {
	const { category, setFilters } = useContext(SearchContext);

	const handleReset = () => {
		setFilters(filtersInitialState);
	};
	return (
		<div>
			<div className="flex flex-wrap gap-4">
				{category !== "animeCharacter" && category !== "people" && (
					<YearFilter />
				)}
				{(category === "anime" || category === "animeCharacter") && (
					<SortFilter />
				)}
				{category === "anime" && (
					<>
						<StatusFilter />
						<GenresFilter />
					</>
				)}
			</div>
			<div className="flex gap-2 mt-2">
				<h3
					className="px-2 text-lg font-bold bg-gradient-to-b from-white via-gray-200 to-gray-400 rounded-lg cursor-pointer hover:bg-white/80"
					onClick={() => {
						const submitButton =
							document.getElementById("submit-search");

						submitButton.click();
					}}
				>
					search
				</h3>
				{category !== "people" && (
					<h3
						className="px-2 text-lg font-bold bg-gradient-to-b from-white via-gray-200 to-gray-400 rounded-lg cursor-pointer hover:bg-white/80"
						onClick={handleReset}
					>
						Reset
					</h3>
				)}
			</div>
		</div>
	);
};

export default Filters;
