import React from "react";
import ItemsList from "../../src/components/Common/ItemsList";
import Trailers from "../../src/components/Trailers";
import {
	getLatestTrailers,
	getPopularSeries,
	getTopSeries,
	getTrendingSeries,
} from "../../src/lib/Series/homePageData";

const Series = ({ trailersIds, topSeries, recentSeries, trendingSeries }) => {
	return (
		<div className="flex flex-col gap-[5rem] mt-3">
			<Trailers videosIds={trailersIds} />
			<ItemsList
				title="Trending Series"
				data={trendingSeries}
				type="series"
			/>
			<ItemsList title="Top Series" data={topSeries} type="series" />
		</div>
	);
};

export async function getStaticProps() {
	const { trailersIds } = await getLatestTrailers();
	const { topSeries } = await getTopSeries();
	const { recentSeries } = await getPopularSeries();
	const { trendingSeries } = await getTrendingSeries();

	return {
		props: { trailersIds, topSeries, recentSeries, trendingSeries },
	};
}

export default Series;
