import React, { useContext, useEffect, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { getPeopleResults } from "../../../lib/Search/fromTMDB";
import PersonCard from "../../Common/PersonCard";
import Spinner from "../../Common/Spinner";
import { SearchContext, SearchContextState } from "../../helpers/context";

const PeopleResults = () => {
	const { query } = useContext<SearchContextState>(SearchContext);
	const [data, setData] = useState<any>(null);
	const [page, setPage] = useState(1);

	useEffect(() => {
		const wrapper = async () => {
			const { data: ret } = await getPeopleResults(query, page);
			setData(ret);
		};
		wrapper();
	}, [query, page]);

	if (!data || !data.people) return <Spinner />;
	const { people, pageInfo } = data;

	return (
		<div>
			<div className="flex gap-4 justify-center items-center mb-5 text-xl font-bold text-white">
				{page > 1 && (
					<BsChevronLeft
						onClick={() => setPage((prev) => prev - 1)}
						className="cursor-pointer hover:scale-125"
					/>
				)}
				<p>
					{pageInfo.page} - {pageInfo.totalPage}
				</p>
				{page < pageInfo.totalPage && (
					<BsChevronRight
						onClick={() => setPage((prev) => prev + 1)}
						className="cursor-pointer hover:scale-125"
					/>
				)}
			</div>

			<div className="flex flex-wrap gap-5 justify-center py-2">
				{people.map((person) => (
					<PersonCard {...person} />
				))}
			</div>
			<div className="flex gap-4 justify-center items-center my-5 text-xl font-bold text-white">
				{page > 1 && (
					<BsChevronLeft
						onClick={() => setPage((prev) => prev - 1)}
						className="cursor-pointer hover:scale-125"
					/>
				)}
				<p>
					{pageInfo.page} - {pageInfo.totalPage}
				</p>
				{page < pageInfo.totalPage && (
					<BsChevronRight
						onClick={() => setPage((prev) => prev + 1)}
						className="cursor-pointer hover:scale-125"
					/>
				)}
			</div>
		</div>
	);
};

export default PeopleResults;