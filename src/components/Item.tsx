// Item = Movie, Serie or Anime

import React, { FC } from 'react'

interface Props {
	poster: string,
	info: {
		title: string,
		date: string,
		genre: string[],
	},
	rating: number,
}

const Item:FC<Props> = ({poster, info, rating}) => {

	const backgroundStyle = {
		background: `url(${poster}) no-repeat`,
		backgroundSize: "12rem 17rem"
	}

	return (
		<div className={`w-[12rem] h-[17rem] rounded-xl relative flex flex-col justify-end shadow-xl hover:shadow-2xl`} style={backgroundStyle}>
			<div className="rounded-full bg-my-yellow w-[2.5rem] h-[2.5rem] flex flex-col items-center drop-shadow- justify-center absolute left-[40%] top-[-1rem] shadow-[inset_-1px_2px_5px_#000000]">
				<p className="font-bold">{rating}</p>
			</div>
			{/* Info */}
			<div className="p-2 pt-0 bg-gradient-to-t from-black rounded-b-xl">
				<h3 className="font-bold text-white">{info.title}</h3>
				<div className="grid grid-cols-[1.5fr_1fr]">
					<h4 className="font-bold text-white">{info.date}</h4>
					<div className="grid grid-cols-2">
						{info.genre.map(g => {
							return (
								<h4 key={g} className="inline-block text-xs pr-[2px] text-white">{g}</h4>
							)
						})}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Item
