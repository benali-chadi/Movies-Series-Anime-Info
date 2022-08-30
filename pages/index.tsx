import React, { useEffect, useRef, useState } from "react";
import YouTube, {
	YouTubeProps,
} from "../node_modules/react-youtube/dist/YouTube";
import Item from "../src/components/Item";
import Trailers from "../src/components/Trailers";

const Movies = ({ data }) => {
	console.log(data);

	const videoIds = data.map((v) => {
		console.log(v.attributes.updatedAt);
		return v.attributes.youtubeVideoId;
	});

	return (
		<div className="mt-3">
			{/* <Item
				poster="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wW5WW34KhCDNGRs3gnzqrzQeiEB.jpg"
				info={{
					title: "House of the Dragon",
					date: "2022",
					genre: ["drama", "action"],
				}}
				rating={9.5}
			/> */}
			<Trailers videsIds={videoIds} />
		</div>
	);
};

export async function getStaticProps({ params }) {
	let url = new URL("https://kitsu.io/api/edge/trending/anime");
	url.searchParams.set("sort", "updatedAt");

	const res = await fetch(url.href);
	const { data } = await res.json();

	return {
		props: { data: data },
	};
}

export default Movies;
