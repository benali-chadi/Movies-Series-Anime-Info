import React, { FC, useRef, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { FilterInter } from "../../../../pages/search";
import { useOutsideClick } from "../../../lib/useOutsideClick";
interface Props {
	setFilters: React.Dispatch<React.SetStateAction<FilterInter>>;
	filters: FilterInter;
}

const SortFilter: FC<Props> = ({ setFilters, filters }) => {
	const [toggle, setToggle] = useState(false);
	const [title, setTitle] = useState("sort");
	const myRef = useRef(null);

	useOutsideClick(myRef, () => setToggle(false));

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
					changeTitle={setTitle}
				/>
			)}
		</div>
	);
};

const Header = ({ title, handleClick }) => (
	<h3
		className="text-lg border-b-2 border-black hover:bg-gray-300"
		onClick={handleClick}
	>
		{title}
	</h3>
);
function SortDropDown({ setFilters, filters, hide, changeTitle }) {
	return (
		<div className={`absolute top-10 p-2 bg-gray-200 rounded-xl h-max`}>
			<Header
				title="popularity ascending"
				handleClick={() => {
					setFilters({
						...filters,
						sort: "popularityAsc",
					});
					changeTitle("popularity ascending");
					hide();
				}}
			/>
			<Header
				title="popularity descending"
				handleClick={() => {
					setFilters({
						...filters,
						sort: "popularityDesc",
					});
					changeTitle("popularity descending");
					hide();
				}}
			/>
			<Header
				title="score ascending"
				handleClick={() => {
					setFilters({
						...filters,
						sort: "scoreAsc",
					});
					changeTitle("score ascending");
					hide();
				}}
			/>
			<Header
				title="score descending"
				handleClick={() => {
					setFilters({
						...filters,
						sort: "scoreDesc",
					});
					changeTitle("score descending");
					hide();
				}}
			/>
			<Header
				title="start date ascending"
				handleClick={() => {
					setFilters({
						...filters,
						sort: "startDateAsc",
					});
					changeTitle("start date ascending");
					hide();
				}}
			/>
			<Header
				title="start date descending"
				handleClick={() => {
					setFilters({
						...filters,
						sort: "startDateDesc",
					});
					changeTitle("start date descending");
					hide();
				}}
			/>
		</div>
	);
}

export default SortFilter;
