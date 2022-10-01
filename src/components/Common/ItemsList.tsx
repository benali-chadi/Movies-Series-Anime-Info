import React, { FC, useEffect, useRef, useState } from "react";
import { useSlider } from "../../hooks/useSlider";
import Item from "./Item";
import ScrollButton from "./ScrollButton";
import Spinner from "./Spinner";

interface Props {
	title: string;
	data: [
		{
			id: number;
			poster: string;
			info: {
				title: string;
				date: string;
			};
			rating: number;
		}
	];
	type: string;
	loading: boolean;
	error: boolean;
}

const ItemsList: FC<Props> = ({ title, data, type, loading, error }) => {
	const { containerRef, hasNext, hasPrev, scrollDown, scrollUp } =
		useSlider();

	if (loading) return <Spinner />;
	if (error) return null;
	return (
		<div>
			<h2 className="relative z-10 pl-2 text-4xl font-bold text-my-white">
				{title}
			</h2>
			<ScrollButton up onClick={scrollUp} active={hasPrev} />
			{/* <div className="flex overflow-x-scroll flex-shrink-0 gap-4 p-4 py-8 noScroll"> */}
			<div
				className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 md:max-h-[18rem] max-h-[16rem] overflow-hidden gap-4 p-5"
				ref={containerRef}
			>
				{data.map((item) => {
					return (
						<Item
							id={item.id}
							poster={item.poster}
							info={item.info}
							rating={item.rating}
							type={type}
							key={item.id}
						/>
					);
				})}
			</div>

			<ScrollButton up={false} onClick={scrollDown} active={hasNext} />
		</div>
	);
};

export default ItemsList;
