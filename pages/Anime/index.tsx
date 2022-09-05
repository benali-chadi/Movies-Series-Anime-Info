import React from "react";
import ItemsList from "../../src/components/ItemsList";
import Trailers from "../../src/components/trailers/Trailers";
import {
	getAnimeHomeData,
	getLatestAnime,
	getLatestEpisodes,
	getLatestTrailers,
	getTopAnime,
} from "../../src/lib/Anime/homePageData";

const Anime = ({ videosIds, items, episodesUrl, latestItems }) => {
	return (
		<div className="flex flex-col gap-[5rem] mt-3">
			<Trailers videosIds={videosIds} />
			<ItemsList title="Latest Anime" data={latestItems} />
			<ItemsList title="Top Anime" data={items} />
			{/* <div className="flex gap-4">
				<h2 className="text-3xl text-white">LATEST EPISODES </h2>
			</div> */}
		</div>
	);
};

export async function getStaticProps() {
	const { episodesUrl, ok: ok1 } = await getLatestEpisodes();
	const { items, ok: ok2 } = await getTopAnime();
	const { trailersIds: videosIds, ok: ok3 } = await getLatestTrailers();
	const { items: latestItems, ok: ok4 } = await getLatestAnime();

	if (!ok1 || !ok2 || !ok3 || !ok4) console.log("NOT OK");

	return {
		props: { videosIds, items, episodesUrl, latestItems },
	};
}

export default Anime;
