import React, { useContext, useEffect, useState } from "react";
import { getAnimeResults } from "../../../lib/Search/fromJIKAN";
import Item from "../../Common/Item";
import Spinner from "../../Common/Spinner";
import { SearchContext, SearchContextState } from "../../helpers/context";

const AnimeResults = () => {
	const { query, filters } = useContext<SearchContextState>(SearchContext);
	const [data, setData] = useState<any>(null);
	useEffect(() => {
		const wrapper = async () => {
			const { data: ret } = await getAnimeResults(query, filters);
			setData(ret);
		};
		wrapper();
	}, [query, filters]);

	if (!data || !data.items) return <Spinner />;
	return (
		<div className="flex flex-wrap gap-5 justify-center py-2">
			{data.items.map((itm) => (
				<Item {...itm} type="anime" key={itm.id} />
			))}
		</div>
	);
};

export default AnimeResults;
