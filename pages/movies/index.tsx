import React from "react";
import ItemsList from "../../src/components/ItemsList";
import Trailers from "../../src/components/trailers/Trailers";
import {
	getLatestTrailers,
	getNowPlaying,
	getTopMovies,
} from "../../src/lib/Movies/homePageData";

const Movies = ({ upcomingMovies, trailersIds, topMovies }) => {
	// console.log(trailersIds);
	return (
		<div className="flex flex-col gap-[5rem] mt-3">
			<Trailers videosIds={trailersIds} />
			<ItemsList title="Recent Movies" data={upcomingMovies} />
			<ItemsList title="Top Movies" data={topMovies} />
		</div>
	);
};

export async function getStaticProps() {
	const { upcomingMovies } = await getNowPlaying();
	const { trailersIds } = await getLatestTrailers();
	const { topMovies } = await getTopMovies();

	return {
		props: { upcomingMovies, trailersIds, topMovies },
	};
}

export default Movies;
