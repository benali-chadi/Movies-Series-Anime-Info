import React from "react";
import UpperPart from "../../src/components/itemPage/UpperPart";
import ItemsList from "../../src/components/ItemsList";
import { getNowPlaying } from "../../src/lib/Movies/homePageData";
import {
	getMedia,
	getMovieCast,
	getMovieDetails,
	getSimilarMovies,
} from "../../src/lib/Movies/specifiPageData";

const MoviePage = ({ details, cast, media, similarMovies }) => {
	const { images, videos } = media;
	const upperpartData = {
		id: details.id,
		coverPoster: images.backdrops[0],
		poster: images.posters[0],
		info: {
			title: details.title,
			date: details.date,
			genres: details.genres,
			runtime: details.runtime,
			overview: details.overview,
			rating: details.rating,
			imdb_id: details.imdb_id,
		},
	};

	return (
		<div>
			<UpperPart
				id={upperpartData.id}
				coverPoster={upperpartData.coverPoster}
				poster={upperpartData.poster}
				info={upperpartData.info}
			/>
			<ItemsList title="Similar Movies" data={similarMovies} />
		</div>
	);
};

export async function getStaticPaths() {
	const { upcomingMovies } = await getNowPlaying();

	const paths = upcomingMovies.map((movie) => {
		return {
			params: {
				id: movie.id.toString(),
			},
		};
	});

	return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
	const { data: details } = await getMovieDetails(params.id);
	const { data: cast } = await getMovieCast(params.id);
	const { data: media } = await getMedia(params.id);
	const { data: similarMovies } = await getSimilarMovies(params.id);

	return { props: { details, cast, media, similarMovies } };
}

export default MoviePage;
