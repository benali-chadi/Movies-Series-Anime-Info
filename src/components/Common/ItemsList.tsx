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
		}
	];
	type: string;
}

const ItemsList: FC<Props> = ({ title, data, type }) => {
	return (
		<div>
			<h2 className="relative z-10 pl-2 text-4xl font-bold text-my-white">
				{title}
			</h2>
			<div className="flex overflow-x-scroll flex-shrink-0 gap-4 p-4 py-8 noScroll">
				{data.map((item) => {
					return (
						<Item
							id={item.id}
							poster={item.poster}
							info={item.info}
							rating={item.rating}
							type={type}
							key={item.info.title}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default ItemsList;
