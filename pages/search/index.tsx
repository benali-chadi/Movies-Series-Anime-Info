import React, { FormEvent, useEffect, useState } from "react";
import { MdSearch } from "react-icons/md";
import Categories from "../../src/components/search/Categories";
import Filters from "../../src/components/search/Filters";

export interface FilterInter {
	sort:
		| ""
		| "popularityAsc"
		| "popularityDesc"
		| "scoreAsc"
		| "scoreDesc"
		| "startDateAsc"
		| "startDateDesc";
	year: number;
	state: "airing" | "complete" | "upcoming" | "";
	genres: string[];
}

const filtersInitial: FilterInter = {
	sort: "",
	year: new Date().getFullYear(),
	state: "",
	genres: [""],
};

const Index = () => {
	const [text, setText] = useState("");
	const [query, setQuery] = useState("");
	const [category, setCategory] = useState<
		"movie" | "serie" | "anime" | "people" | "animeCharacter"
	>("movie");
	const [filter, setFilter] = useState<FilterInter>(filtersInitial);

	const sumbit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		setQuery(text);
		setText("");
	};
	useEffect(() => console.log(query), [query]);

	return (
		<div className="w-full h-full">
			{/*Search Bar*/}
			<div className="flex justify-center w-full">
				<form
					className="flex gap-2 bg-white p-3 rounded-3xl mb-3 w-[50%] min-w-max"
					onSubmit={sumbit}
				>
					<button type="submit" className="text-2xl">
						<MdSearch />
					</button>
					<input
						type="text"
						placeholder="Enter your search"
						value={text}
						onChange={(e) => setText(e.target.value)}
						className="w-full"
					/>
				</form>
			</div>
			<div className="h-full w-full grid grid-cols-[1fr_3fr_1fr] grid-rows-5 ">
				{/* Categories */}
				<div className="row-[span_2_/_span_4] p-4">
					<Categories category={category} setCategory={setCategory} />
				</div>
				{/* FilterInter */}
				<div className="flex col-span-2 justify-center border-2 border-black md:col-span-1">
					<Filters filters={filter} setFilters={setFilter} />
				</div>
				{/* Search Results */}
				<div className="col-span-2 col-start-2 row-span-3 border-2 border-black md:col-span-1">
					Results
				</div>
				{/* Top 10 */}
				<div className="hidden col-start-3 row-start-1 row-end-4 border-2 border-black md:block">
					Top 10
				</div>
			</div>
		</div>
	);
};

export default Index;
