import React from "react";
import ItemsList from "../../src/components/ItemsList";
import Trailers from "../../src/components/Trailers";
import {
	getDiscoverAr,
	getLatestTrailers,
	getNowPlaying,
	getTopMovies,
	getTrendingMovies,
} from "../../src/lib/Movies/homePageData";

const Movies = ({
	upcomingMovies,
	trailersIds,
	topMovies,
	arabicMovies,
	trendingMovies,
}) => {
	return (
		<div className="flex flex-col gap-[5rem] mt-3">
			<Trailers videosIds={trailersIds} />
			<ItemsList title="Trending Movies" data={trendingMovies} />
			<ItemsList title="آخر الأفلام العربية" data={arabicMovies} />
			<ItemsList title="Top Movies" data={topMovies} />
		</div>
	);
};

export async function getStaticProps() {
	const { upcomingMovies } = await getNowPlaying();
	const { trailersIds } = await getLatestTrailers();
	const { topMovies } = await getTopMovies();
	const { arabicMovies } = await getDiscoverAr();
	const { trendingMovies } = await getTrendingMovies();

	return {
		props: {
			upcomingMovies,
			trailersIds,
			topMovies,
			arabicMovies,
			trendingMovies,
		},
	};
}

export default Movies;
