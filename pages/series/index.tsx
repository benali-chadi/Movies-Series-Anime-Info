import React from "react";
import ItemsList from "../../src/components/ItemsList";
import Trailers from "../../src/components/trailers/Trailers";
import {
	getLatestTrailers,
	getPopularSeries,
	getTopSeries,
} from "../../src/lib/Series/homePageData";

const Series = ({ trailersIds, topSeries, recentSeries }) => {
	return (
		<div className="flex flex-col gap-[5rem] mt-3">
			<Trailers videosIds={trailersIds} />
			<ItemsList title="Popular Series" data={recentSeries} />
			<ItemsList title="Top Series" data={topSeries} />
		</div>
	);
};

export async function getStaticProps() {
	const { trailersIds } = await getLatestTrailers();
	const { topSeries } = await getTopSeries();
	const { recentSeries } = await getPopularSeries();

	return {
		props: { trailersIds, topSeries, recentSeries },
	};
}

export default Series;
