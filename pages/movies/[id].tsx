import React from "react";
import { useRouter } from "../../node_modules/next/router";
import UpperPart from "../../src/components/itemPage/UpperPart";
import ItemsList from "../../src/components/ItemsList";
import PersonCard from "../../src/components/PersonCard";
import PersonList from "../../src/components/PersonList";
import { getNowPlaying } from "../../src/lib/Movies/homePageData";
import {
	getMedia,
	getMovieCast,
	getMovieDetails,
	getSimilarMovies,
} from "../../src/lib/Movies/specifiPageData";

const MoviePage = ({ details, cast, images, videos, similarMovies }) => {
	const router = useRouter();
	if (router.isFallback) return <div>Loading...</div>;

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
			<UpperPart {...upperpartData} />
			<PersonList title="Cast" data={cast} />
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
	console.log("id =", params.id);
	const { data: details } = await getMovieDetails(params.id);
	const { data: cast } = await getMovieCast(params.id);
	const { data: media } = await getMedia(params.id);
	const { data: similarMovies } = await getSimilarMovies(params.id);

	return {
		props: {
			details,
			cast,
			images: media.images,
			videos: media.videos,
			similarMovies,
		},
	};
}

export default MoviePage;
