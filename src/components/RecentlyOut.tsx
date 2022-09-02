import React, { FC } from "react";
import Item from "./Item";

interface Props {
	data: [
		{
			poster: string;
			info: {
				title: string;
				date: string;
				genre: string[];
			};
			rating: number;
		},
	];
}

const RecentlyOut: FC<Props> = ({ data }) => {
	return (
		<div className="flex flex-shrink-0 gap-2 overflow-x-auto overflow-y-visible noScroll">
			{data.map((item) => {
				return (
					<Item
						poster={item.poster}
						info={item.info}
						rating={item.rating}
					/>
				);
			})}
		</div>
	);
};

export default RecentlyOut;
