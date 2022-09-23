import React, { FormEvent, useEffect, useState } from "react";
import { MdSearch } from "react-icons/md";
import {
	SearchContext,
	filtersInitialState,
	FilterState,
} from "../../src/components/helpers/context";
import Categories from "../../src/components/search/Categories";
import Filters from "../../src/components/search/Filters";
import AnimeResults from "../../src/components/search/results/AnimeResults";
import MovieResults from "../../src/components/search/results/MovieResults";
import PeopleResults from "../../src/components/search/results/PeopleResults";
import SeriesResults from "../../src/components/search/results/SeriesResults";

const Index = () => {
	// Add page state management
	const [query, setQuery] = useState("");
	const [results, setResults] = useState<any>(null);
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

	const updateResults = () => {
		switch (category) {
			case "movie":
				setResults(<MovieResults />);
				break;
			case "serie":
				setResults(<SeriesResults />);
				break;
			case "people":
				setResults(<PeopleResults />);
				break;
			case "anime":
				setResults(<AnimeResults />);
				break;
			default:
				setResults(null);
				break;
		}
	};

	useEffect(() => {
		if (query !== "") {
			updateResults();
		}
	}, [query, category]);

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
					<div className="flex z-10 col-span-2 p-4 md:col-span-1">
						<Filters />
					</div>
					{/* Search Results */}
					<div className="col-span-full col-start-2 row-span-3 md:col-span-1">
						{results}
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
