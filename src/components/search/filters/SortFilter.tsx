import React, { FC, useEffect, useRef, useState } from "react";
import { useContext } from "react";
import { BsChevronDown } from "react-icons/bs";
// import { FilterInter } from "../../../../pages/search";
import { useOutsideClick } from "../../../lib/useOutsideClick";
import { FilterContext, FilterContextState } from "../../helpers/context";
const SortFilter = () => {
	const { filters, setFilters } =
		useContext<FilterContextState>(FilterContext);
	const [toggle, setToggle] = useState(false);
	const [title, setTitle] = useState("sort");
	const myRef = useRef(null);

	useOutsideClick(myRef, () => setToggle(false));
	useEffect(() => {
		switch (filters.sort) {
			case "popularityAsc":
				setTitle("popularity ascending");
				break;
			case "popularityDesc":
				setTitle("popularity descending");
				break;
			case "scoreAsc":
				setTitle("score ascending");
				break;
			case "scoreDesc":
				setTitle("score descending");
				break;
			case "startDateAsc":
				setTitle("start date ascending");
				break;
			case "startDateDesc":
				setTitle("start date descending");
				break;
			default:
				setTitle("sort");
		}
	}, [filters]);

	return (
		<div
			className="flex relative flex-col p-2 text-black bg-white rounded-xl cursor-pointer hover:bg-white/80"
			ref={myRef}
		>
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
				title="popularity ascending"
				handleClick={() => {
					setFilters({
						...filters,
						sort: "popularityAsc",
					});
					hide();
				}}
			/>
			<DropDownHeader
				title="popularity descending"
				handleClick={() => {
					setFilters({
						...filters,
						sort: "popularityDesc",
					});
					hide();
				}}
			/>
			<DropDownHeader
				title="score ascending"
				handleClick={() => {
					setFilters({
						...filters,
						sort: "scoreAsc",
					});
					hide();
				}}
			/>
			<DropDownHeader
				title="score descending"
				handleClick={() => {
					setFilters({
						...filters,
						sort: "scoreDesc",
					});
					hide();
				}}
			/>
			<DropDownHeader
				title="start date ascending"
				handleClick={() => {
					setFilters({
						...filters,
						sort: "startDateAsc",
					});
					hide();
				}}
			/>
			<DropDownHeader
				title="start date descending"
				handleClick={() => {
					setFilters({
						...filters,
						sort: "startDateDesc",
					});
					hide();
				}}
			/>
		</div>
	);
}

export default SortFilter;
