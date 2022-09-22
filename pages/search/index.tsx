import React, { FormEvent, useEffect, useState } from "react";
import { MdSearch } from "react-icons/md";
import {
	SearchContext,
	filtersInitialState,
	FilterState,
} from "../../src/components/helpers/context";
import Categories from "../../src/components/search/Categories";
import Filters from "../../src/components/search/Filters";
import MovieResults from "../../src/components/search/results/MovieResults";
import {
	getMoviesResults,
	getPeopleResults,
	getSeriesResults,
} from "../../src/lib/Search/fromTMDB";

const Index = () => {
	// Add page state management
	const [query, setQuery] = useState("");
	// const [update, setUpdate] = useState(false);
	const [category, setCategory] = useState<
		"movie" | "serie" | "anime" | "people" | "animeCharacter"
	>("movie");
	const [filters, setFilters] = useState<FilterState>(filtersInitialState);
	const [text, setText] = useState("");

	const sumbit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		setQuery(text);
		// setText("");
	};

	// const updateResults = () => {
	// 	switch (category) {
	// 		case "movie":
	// 			{
	// 				setResults(
	// 					getMoviesResults(query, filters.year.toString())
	// 				);
	// 			}
	// 			break;
	// 		case "serie":
	// 			{
	// 				setResults(
	// 					getSeriesResults(query, filters.year.toString())
	// 				);
	// 			}
	// 			break;
	// 		case "people":
	// 			{
	// 				setResults(getPeopleResults(query));
	// 			}
	// 			break;
	// 		default:
	// 			break;
	// 	}
	// };

	useEffect(() => {
		if (query !== "") {
		}
	}, [query]);

	return (
		<SearchContext.Provider
			value={{ filters, setFilters, category, query }}
		>
			<div className="w-full h-full">
				{/*Search Bar*/}
				<div className="flex justify-center w-full">
					<form
						className="flex gap-2 bg-white p-3 rounded-3xl mb-3 w-[50%] min-w-max"
						onSubmit={sumbit}
					>
						<button
							type="submit"
							className="text-2xl"
							id="submit-search"
						>
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
						<Categories
							category={category}
							setCategory={setCategory}
						/>
					</div>
					{/* FilterInter */}
					<div className="flex col-span-2 p-4 md:col-span-1">
						<Filters />
					</div>
					{/* Search Results */}
					<div className="overflow-auto col-span-2 col-start-2 row-span-3 border-2 border-black md:col-span-1">
						{category === "movie" && query !== "" && (
							<MovieResults />
						)}
					</div>
					{/* Top 10 */}
					<div className="hidden col-start-3 row-start-1 row-end-4 border-2 border-black md:block">
						Top 10
					</div>
				</div>
			</div>
		</SearchContext.Provider>
	);
};

export default Index;
