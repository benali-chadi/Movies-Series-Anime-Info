import React from "react";
import ItemsList from "../../src/components/Common/ItemsList";
import Trailers from "../../src/components/Trailers";
import { useGetSeriesItems } from "../../src/lib/Series/SeriesData";
// import {
// 	getLatestTrailers,
// 	getPopularSeries,
// 	getTopSeries,
// 	getTrendingSeries,
// } from "../../src/lib/Series/homePageData";

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

// export async function getStaticProps() {
// 	const { trailersIds } = await getLatestTrailers();
// 	const { topSeries } = await getTopSeries();
// 	const { recentSeries } = await getPopularSeries();
// 	const { trendingSeries } = await getTrendingSeries();

// 	return {
// 		props: { trailersIds, topSeries, recentSeries, trendingSeries },
// 	};
// }

export default Series;
