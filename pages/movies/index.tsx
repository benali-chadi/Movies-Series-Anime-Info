import React from "react";
import ItemsList from "../../src/components/Common/ItemsList";
import Trailers from "../../src/components/Trailers";
import { useGetMoviesItems } from "../../src/hooks/movieData";

const Movies = () => {
	const {
		items: trendingMovies,
		isLoading: trendingLoading,
		isError: trendingError,
	} = useGetMoviesItems("trending/movie/week");
	const {
		items: arabicMovies,
		isLoading: arLoading,
		isError: arError,
	} = useGetMoviesItems("discover/movie", {
		with_original_language: "ar",
		"release_date.gte": `${new Date().getFullYear()}-01-01`,
		language: "ar",
	});
	const {
		items: topMovies,
		isLoading: topLoading,
		isError: topError,
	} = useGetMoviesItems("movie/top_rated");

	return (
		<div className="flex flex-col gap-[5rem] mt-3">
			<Trailers type="movies" />
			<ItemsList
				title="Trending Movies"
				data={trendingMovies}
				type="movies"
				loading={trendingLoading}
				error={trendingError}
			/>
			<ItemsList
				title="آخر الأفلام العربية"
				data={arabicMovies}
				type="movies"
				loading={arLoading}
				error={arError}
			/>
			<ItemsList
				title="Top Movies"
				data={topMovies}
				type="movies"
				loading={topLoading}
				error={topError}
			/>
		</div>
	);
};

export default Movies;
