import React, { FC, useContext, useEffect, useRef, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { useOutsideClick } from "../../../lib/useOutsideClick";
import { SearchContext, SearchContextState } from "../../helpers/context";
import { DropDownHeader } from "./SortFilter";

const GenresFilter: FC<{ genres: string[] }> = ({ genres }) => {
	const { filters, setFilters } =
		useContext<SearchContextState>(SearchContext);
	const [toggle, setToggle] = useState(false);
	const [title, setTitle] = useState("genres");
	const myRef = useRef(null);

	useOutsideClick(myRef, () => setToggle(false));

	useEffect(() => {
		if (filters.genre === "") setTitle("genres");
		else setTitle(filters.genre);
	}, [filters]);

	return (
		<div className="filter-style" ref={myRef}>
			<div
				className="flex gap-2 items-center"
				onClick={() => setToggle(!toggle)}
			>
				<h3 className="text-xl font-bold">{title}</h3>
				<BsChevronDown />
			</div>
			{/* Sort filters */}
			{toggle && (
				<GenresDropDown
					setFilters={setFilters}
					filters={filters}
					hide={() => {
						setToggle(false);
					}}
					genres={genres}
				/>
			)}
		</div>
	);
};

function GenresDropDown({ setFilters, filters, hide, genres }) {
	return (
		<div
			className={`flex overflow-auto absolute left-0 flex-col gap-2 p-2 w-max bg-gray-200 rounded-xl min-w-[5rem] top-[50px] max-h-[15rem]`}
		>
			{genres.map((g) => (
				<DropDownHeader
					title={g}
					handleClick={() => {
						setFilters({
							...filters,
							genre: g,
						});
						hide();
					}}
					key={g}
				/>
			))}
		</div>
	);
}

export default GenresFilter;
