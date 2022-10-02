import React from "react";
import ItemsList from "../../src/components/Common/ItemsList";
import Trailers from "../../src/components/Trailers";
import { useGetAnimeItems } from "../../src/hooks/animeData";

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
		</div>
	);
};

export default Anime;
