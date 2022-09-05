import React from "react";
import ItemsList from "../src/components/ItemsList";
import Trailers from "../src/components/trailers/Trailers";
import {
	getLatestTrailers,
	getUpcomingMovies,
} from "../src/lib/Movies/homePageData";

const Movies = ({ upcomingMovies, trailersIds }) => {
	// console.log(trailersIds);
	return (
		<div className="flex flex-col gap-[5rem] mt-3">
			<Trailers videosIds={trailersIds} />
			<ItemsList title="Now Playing" data={upcomingMovies} />
		</div>
	);
};

export async function getStaticProps() {
	const { upcomingMovies } = await getUpcomingMovies();
	const { trailersIds } = await getLatestTrailers();

	return {
		props: { upcomingMovies, trailersIds },
	};
}

export default Movies;
