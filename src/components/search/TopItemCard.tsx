import { useRouter } from "next/router";
import React, { FC } from "react";

interface Props {
	id: number;
	poster: string;
	name: string;
	type: "movie" | "serie" | "anime" | "people" | "animeCharacter";
}

const TopItemCard: FC<Props> = ({ id, poster, name, type }) => {
	const router = useRouter();

	const src =
		poster !== ""
			? poster
			: type === "movie" || type === "serie" || type === "anime"
			? "/images/default_poster.png"
			: "/images/default_person.png";

	const handleClick = () => {
		if (type === "people" || type === "animeCharacter") return;
		const t = type === "anime" ? type : type + "s";
		router.push(`/${t}/${id}`);
	};
	return (
		<div
			className="flex gap-2 cursor-pointer hover:bg-white/60"
			onClick={handleClick}
		>
			<img src={src} alt="poster" className="w-[3rem] h-[4rem]" />
			<h3 className="self-center font-bold">{name}</h3>
		</div>
	);
};

export default TopItemCard;
