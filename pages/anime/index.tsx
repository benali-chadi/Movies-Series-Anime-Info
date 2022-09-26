import React from "react";
import ItemsList from "../../src/components/Common/ItemsList";
import Trailers from "../../src/components/Trailers";
import { useGetAnimeItems } from "../../src/lib/Anime/animeData";
// import {
// 	getLatestAnime,
// 	getLatestEpisodes,
// 	getLatestTrailers,
// 	getTopAnime,
// } from "../../src/lib/Anime/homePageData";

const Anime = () => {
	const {
		items: latestItems,
		isLoading: latestLoading,
		isError: latestError,
	} = useGetAnimeItems("top/anime", { filter: "airing" });
	const {
		items: topAnime,
		isLoading: topLoading,
		isError: topError,
	} = useGetAnimeItems("top/anime", { filter: "bypopularity" });

	return (
		<div className="flex flex-col gap-[5rem] mt-3">
			<Trailers type="anime" />
			<ItemsList
				title="Top Airing Anime"
				data={latestItems}
				type="anime"
				loading={latestLoading}
				error={latestError}
			/>
			<ItemsList
				title="Top of All Time Anime"
				data={topAnime}
				type="anime"
				loading={topLoading}
				error={topError}
			/>
			{/* <div className="flex gap-4">
				<h2 className="text-3xl text-white">LATEST EPISODES </h2>
			</div> */}
		</div>
	);
};

// export async function getStaticProps() {
// 	const { episodesUrl, ok: ok1 } = await getLatestEpisodes();
// 	const { items, ok: ok2 } = await getTopAnime();
// 	const { trailersIds: videosIds, ok: ok3 } = await getLatestTrailers();
// 	const { items: latestItems, ok: ok4 } = await getLatestAnime();

// 	if (!ok1 || !ok2 || !ok3 || !ok4) console.log("NOT OK");

// 	return {
// 		props: { videosIds, items, episodesUrl, latestItems },
// 	};
// }

export default Anime;
