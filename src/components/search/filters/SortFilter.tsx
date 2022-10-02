import React, { FC, useEffect, useRef, useState } from "react";
import { useContext } from "react";
import { BsChevronDown } from "react-icons/bs";
import { useOutsideClick } from "../../../hooks/useOutsideClick";
import { SearchContext, SearchContextState } from "../../helpers/context";
const SortFilter = () => {
	const { filters, setFilters } =
		useContext<SearchContextState>(SearchContext);
	const [toggle, setToggle] = useState(false);
	const [title, setTitle] = useState("sort");
	const myRef = useRef(null);

	useOutsideClick(myRef, () => setToggle(false));
	useEffect(() => {
		switch (filters.sort) {
			case "asc":
				setTitle("ascending");
				break;
			case "desc":
				setTitle("descending");
				break;
			default:
				setTitle("sort");
		}
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
				<SortDropDown
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

export const DropDownHeader = ({ title, handleClick }) => (
	<h3 className="text-lg hover:bg-gray-300" onClick={handleClick}>
		{title}
	</h3>
);
function SortDropDown({ setFilters, filters, hide }) {
	return (
		<div
			className={`flex overflow-auto absolute left-0 flex-col gap-2 p-2 w-max bg-gray-200 rounded-xl top-[50px] max-h-[15rem]`}
		>
			<DropDownHeader
				title="ascending"
				handleClick={() => {
					setFilters({
						...filters,
						sort: "asc",
					});
					hide();
				}}
			/>
			<DropDownHeader
				title="descending"
				handleClick={() => {
					setFilters({
						...filters,
						sort: "desc",
					});
					hide();
				}}
			/>
		</div>
	);
}

export default SortFilter;
