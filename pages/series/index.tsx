import React from "react";
import ItemsList from "../../src/components/Common/ItemsList";
import { useGetSeriesItems } from "../../src/hooks/seriesData";
import Trailers from "../../src/components/Trailers";

const Series = () => {
	const {
		items: trendingSeries,
		isLoading: trendingLoading,
		isError: trendingError,
	} = useGetSeriesItems("trending/tv/week");
	const {
		items: topSeries,
		isLoading: topLoading,
		isError: topError,
	} = useGetSeriesItems("tv/popular");

	return (
		<div className="flex flex-col gap-[5rem] mt-3">
			<Trailers type="series" />
			<ItemsList
				title="Trending Series"
				data={trendingSeries}
				type="series"
				loading={trendingLoading}
				error={trendingError}
			/>
			<ItemsList
				title="Top Series"
				data={topSeries}
				type="series"
				loading={topLoading}
				error={topError}
			/>
		</div>
	);
};

export default Series;
