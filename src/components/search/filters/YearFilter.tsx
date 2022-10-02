import React, { useContext, useEffect, useRef, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { useOutsideClick } from "../../../hooks/useOutsideClick";
import { SearchContext, SearchContextState } from "../../helpers/context";
import { DropDownHeader } from "./SortFilter";

const currentYear = new Date().getFullYear() + 1;
const range = 60;
const years = Array.from(
	{ length: range },
	(_, i) => i + (currentYear - range)
).reverse();

const YearFilter = () => {
	const { filters, setFilters } =
		useContext<SearchContextState>(SearchContext);
	const [toggle, setToggle] = useState(false);
	const [title, setTitle] = useState<"year" | number>("year");
	const myRef = useRef(null);

	useOutsideClick(myRef, () => setToggle(false));

	useEffect(() => {
		if (filters.year === "") setTitle("year");
		else setTitle(filters.year);
	}, [filters]);

	return (
		<div className="filter-style unclicked" ref={myRef}>
			<div
				className="flex gap-2 items-center"
				onClick={() => setToggle(!toggle)}
			>
				<h3 className="text-xl font-bold">{title}</h3>
				<BsChevronDown />
			</div>
			{/* Year filters */}
			{toggle && (
				<YearDropDown
					setFilters={setFilters}
					filters={filters}
					hide={() => {
						setToggle(false);
					}}
				/>
			)}
		</div>
	);
};

function YearDropDown({ setFilters, filters, hide }) {
	return (
		<div
			className={`flex overflow-auto absolute left-0 flex-col gap-2 p-2 w-max bg-gray-200 rounded-xl min-w-[5rem] top-[50px] max-h-[15rem]`}
		>
			{years.map((y) => (
				<DropDownHeader
					key={y}
					title={y}
					handleClick={() => {
						setFilters({
							...filters,
							year: y,
						});
						hide();
					}}
				/>
			))}
		</div>
	);
}

export default YearFilter;
