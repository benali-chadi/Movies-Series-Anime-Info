import { useRouter } from "next/router";
import React, { FormEvent, useEffect, useState } from "react";
import { MdSearch } from "react-icons/md";
import {
	SearchContext,
	filtersInitialState,
	FilterState,
	SearchContextState,
} from "../../src/components/helpers/context";
import Categories from "../../src/components/search/Categories";
import Filters from "../../src/components/search/Filters";
import AnimeCharsResults from "../../src/components/search/results/AnimeCharsResults";
import AnimeResults from "../../src/components/search/results/AnimeResults";
import MovieResults from "../../src/components/search/results/MovieResults";
import PeopleResults from "../../src/components/search/results/PeopleResults";
import SeriesResults from "../../src/components/search/results/SeriesResults";
import TopItemCard from "../../src/components/search/TopItemCard";
import { getTopAnime } from "../../src/lib/Anime/homePageData";
import { getTopMovies } from "../../src/lib/Movies/homePageData";
import { getPopularCharacters } from "../../src/lib/People/charactesData";
import { getPopularPeople } from "../../src/lib/People/peopleData";
import { getTopSeries } from "../../src/lib/Series/homePageData";

const Index = ({
	topMovies,
	topSeries,
	topAnime,
	popularPeople,
	popularCharacters,
}) => {
	const [query, setQuery] = useState("");
	const [results, setResults] = useState<any>(null);

	const [category, setCategory] = useState<
		"movie" | "serie" | "anime" | "people" | "animeCharacter"
	>("movie");
	const [filters, setFilters] = useState<FilterState>(filtersInitialState);

	const [topPart, setTopPart] = useState(topMovies);
	const [topTitle, setTopTitle] = useState("Movies");
	const [text, setText] = useState("");

	const sumbit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setQuery(text);
	};

	const updateResults = () => {
		if (query === "") return;
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
			case "animeCharacter":
				setResults(<AnimeCharsResults />);
				break;
			default:
				setResults(null);
				break;
		}
	};

	const updateTop = () => {
		switch (category) {
			case "movie":
				setTopTitle("Movies");
				setTopPart(topMovies);
				break;
			case "serie":
				setTopTitle("Series");
				setTopPart(topSeries);
				break;
			case "people":
				setTopTitle("People");
				setTopPart(popularPeople);
				break;
			case "anime":
				setTopTitle("Anime");
				setTopPart(topAnime);
				break;
			case "animeCharacter":
				setTopTitle("Anime Characters");
				setTopPart(popularCharacters);
				break;
		}
	};

	// useEffect(() => {
	// 	let qs = router.query;
	// 	console.log("qs =", qs.c);
	// 	if (Object.keys(qs).length > 0) {
	// 		const q = qs.q as string;
	// 		const c = qs.c ? (qs.c as SearchContextState["category"]) : "movie";
	// 		const sort = qs.sort ? (qs.sort as FilterState["sort"]) : "";
	// 		const status = qs.status
	// 			? (qs.status as FilterState["status"])
	// 			: "";
	// 		const year = qs.year ? (qs.year as FilterState["year"]) : "";
	// 		setQuery(q);
	// 		setCategory(c);
	// 		setFilters({ ...filters, sort });
	// 		setFilters({ ...filters, status });
	// 		setFilters({ ...filters, year });
	// 	}
	// }, []);

	useEffect(() => {
		updateTop();
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
					<div className="hidden col-start-3 row-start-1 row-end-4 rounded-xl md:block bg-my-white h-max">
						<div className="p-4 rounded-t-xl bg-my-blue">
							<h3 className="text-2xl font-bold text-white">
								Top 10 {topTitle}
							</h3>
						</div>
						<div className="flex flex-col gap-2 p-2">
							{topPart.map((m) => (
								<TopItemCard
									{...m}
									type={category}
									key={m.id}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</SearchContext.Provider>
	);
};

export async function getStaticProps() {
	const { topMovies } = await getTopMovies();
	const { topSeries } = await getTopSeries();
	const { items: topAnime } = await getTopAnime();
	const { popularPeople } = await getPopularPeople();
	const { popularCharacters } = await getPopularCharacters();

	return {
		props: {
			topMovies: topMovies.splice(0, 10).map((m) => ({
				id: m.id,
				poster: m.poster,
				name: m.info.title,
			})),
			topSeries: topSeries.splice(0, 10).map((s) => ({
				id: s.id,
				poster: s.poster,
				name: s.info.title,
			})),
			topAnime: topAnime.splice(0, 10).map((a) => ({
				id: a.id,
				poster: a.poster,
				name: a.info.title,
			})),
			popularPeople,
			popularCharacters,
		},
	};
}

export default Index;
