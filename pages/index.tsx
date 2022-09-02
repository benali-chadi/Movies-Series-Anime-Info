import React from "react";
import RecentlyOut from "../src/components/RecentlyOut";
import Trailers from "../src/components/trailers/Trailers";

const Movies = ({ videosIds, Items }) => {
	return (
		<div className="flex flex-col gap-8 mt-3">
			<Trailers videosIds={videosIds} />
			<RecentlyOut data={Items} />
		</div>
	);
};

export async function getStaticProps({ params }) {
	let url = new URL("https://kitsu.io/api/edge/trending/anime");

	url.searchParams.set("sort", "updatedAt");

	const res = await fetch(url.href);
	const { data } = await res.json();

	const vidIds = data.map((v) => {
		return v.attributes.youtubeVideoId;
	});
	const Itms = await Promise.all(
		data.map(async (itm) => {
			const attr = itm.attributes;
			let genres = await fetch(
				"https://kitsu.io/api/edge/" +
					itm.relationships.genres.links.related,
			)
				.then((r) => r.json())
				.then((gs) => {
					return gs.data.map((g) => {
						return g.attributes.name;
					});
				})
				.catch((e) => console.log(e));

			return {
				poster: attr.posterImage.original ?? "",
				info: {
					title: attr.titles.en ?? "",
					date: attr.startDate.substr(0, 4) ?? "",
					genre: genres ?? [""],
				},
				rating: attr.averageRating,
			};
		}),
	);
	console.log(Itms);

	return {
		props: { videosIds: vidIds, Items: Itms },
	};
}

export default Movies;
