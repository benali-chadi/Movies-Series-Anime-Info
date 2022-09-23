import React, { useContext, useEffect, useState } from "react";
import { getSeriesResults } from "../../../lib/Search/fromTMDB";
import Item from "../../Common/Item";
import Spinner from "../../Common/Spinner";
import { SearchContext, SearchContextState } from "../../helpers/context";

const SeriesResults = () => {
	const { query, filters } = useContext<SearchContextState>(SearchContext);
	const [data, setData] = useState<any>(null);
	useEffect(() => {
		const wrapper = async () => {
			const { data: ret } = await getSeriesResults(
				query,
				filters.year.toString()
			);
			setData(ret);
		};
		wrapper();
	}, [query, filters.year]);

	if (!data || !data.items) return <Spinner />;
	return (
		<div className="flex flex-wrap gap-5 justify-center py-2">
			{data.items.map((itm) => (
				<Item {...itm} type="series" key={itm.id} />
			))}
		</div>
	);
};

export default SeriesResults;
