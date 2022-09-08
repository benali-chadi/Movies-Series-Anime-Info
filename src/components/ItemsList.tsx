import React, { FC } from "react";
import Item from "./Item";

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
		},
	];
}

const ItemsList: FC<Props> = ({ title, data }) => {
	return (
		<div>
			<h2 className="relative z-10 pl-2 text-4xl font-bold text-my-white">
				{title}
			</h2>
			<div className="flex flex-shrink-0 gap-4 p-4 py-8 overflow-x-scroll noScroll">
				{data.map((item) => {
					return (
						<Item
							id={item.id}
							poster={item.poster}
							info={item.info}
							rating={item.rating}
							key={item.info.title}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default ItemsList;
