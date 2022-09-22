import React, { useEffect, useRef, useState } from "react";
import { useContext } from "react";
import { BsChevronDown } from "react-icons/bs";
import { useOutsideClick } from "../../../lib/useOutsideClick";
import { SearchContext, SearchContextState } from "../../helpers/context";
import { DropDownHeader } from "./SortFilter";

const StatusFilter = () => {
	const { filters, setFilters } =
		useContext<SearchContextState>(SearchContext);
	const [toggle, setToggle] = useState(false);
	const [title, setTitle] = useState("status");
	const myRef = useRef(null);

	useOutsideClick(myRef, () => setToggle(false));
	useEffect(() => {
		if (filters.status === "") setTitle("status");
		else setTitle(filters.status);
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
			{/* Status filters */}
			{toggle && (
				<StatusDropDown
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

function StatusDropDown({ setFilters, filters, hide }) {
	return (
		<div
			className={`flex overflow-auto absolute left-0 flex-col gap-2 p-2 w-max bg-gray-200 rounded-xl top-[50px] max-h-[15rem]`}
		>
			<DropDownHeader
				title="airing"
				handleClick={() => {
					setFilters({
						...filters,
						status: "airing",
					});
					hide();
				}}
			/>
			<DropDownHeader
				title="complete"
				handleClick={() => {
					setFilters({
						...filters,
						status: "complete",
					});
					hide();
				}}
			/>
			<DropDownHeader
				title="upcoming"
				handleClick={() => {
					setFilters({
						...filters,
						status: "upcoming",
					});
					hide();
				}}
			/>
		</div>
	);
}

export default StatusFilter;
