import React, { useContext, useEffect, useState } from "react";
import useSWR from "swr";
import { getMoviesResults } from "../../../lib/Search/fromTMDB";
import Item from "../../Common/Item";
import Spinner from "../../Common/Spinner";
import { SearchContext, SearchContextState } from "../../helpers/context";

const MovieResults = () => {
	const { query, filters } = useContext<SearchContextState>(SearchContext);
	const [data, setData] = useState<any>(null);

	useEffect(() => {
		const wrapper = async () => {
			const { data: ret } = await getMoviesResults(
				query,
				filters.year.toString()
			);
			setData(ret);
		};
		wrapper();
	}, [query, filters.year]);

	if (!data || !data.items) return <Spinner />;
	// const { data, isLoading, isError } = getMoviesResults(
	// 	category === "movie" && query !== "",
	// 	query,
	// 	filters.year.toString()
	// );
	// if (category !== "movie" || query === "")
	// 	return <div className="hidden"></div>;
	// if (isLoading) return <Spinner />;
	// if (isError) return <div>Error loading Movies results</div>;

	return (
		<div className="flex flex-wrap gap-5 justify-center py-2">
			{data.items.map((itm) => (
				<Item {...itm} type="movies" key={itm.id} />
			))}
		</div>
	);
};

export default MovieResults;
