import React, { FC } from "react";
import { useRouter } from "../../node_modules/next/router";

interface Props {
	id: number;
	poster: string;
	info: {
		title: string;
		date: string;
	};
	rating: number;
}

const Item: FC<Props> = ({ id, poster, info, rating }) => {
	const router = useRouter();
	const backgroundStyle = {
		background: `url(${poster}) no-repeat`,
		backgroundSize: "12rem 17rem",
	};

	const handleClick = () => {
		const pathname = "/" + router.pathname.split("/")[1];
		router.push(`${pathname}/${id}`);
	};
	return (
		<div
			className={`min-w-[12rem] h-[17rem] rounded-xl relative flex flex-col justify-end shadow-xl hover:shadow-2xl hover:scale-105 cursor-pointer`}
			style={backgroundStyle}
			onClick={handleClick}
		>
			<div className="rounded-full bg-my-yellow w-[2.5rem] h-[2.5rem] flex flex-col items-center drop-shadow- justify-center absolute left-[40%] top-[-1rem] shadow-[inset_-1px_2px_5px_#000000]">
				<p className="font-bold">{!!rating && rating.toFixed(1)}</p>
			</div>
			{/* Info */}
			<div className="p-2 pt-0 bg-gradient-to-t from-black rounded-b-xl">
				<h3 className="font-bold text-white">{info.title}</h3>
				<h4 className="font-bold text-white">{info.date}</h4>
			</div>
		</div>
	);
};

export default Item;
