import React, { useContext, useEffect, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { getSeriesResults } from "../../../lib/Search/fromTMDB";
import Item from "../../Common/Item";
import Spinner from "../../Common/Spinner";
import { SearchContext, SearchContextState } from "../../helpers/context";

const SeriesResults = () => {
	const { query, filters } = useContext<SearchContextState>(SearchContext);
	const [data, setData] = useState<any>(null);
	const [page, setPage] = useState(1);

	useEffect(() => {
		const wrapper = async () => {
			if (query === "") return;
			const { data: ret } = await getSeriesResults(
				query,
				filters.year.toString(),
				page
			);
			setData(ret);
		};
		wrapper();
	}, [query, filters.year, page]);

	if (!data || !data.items) return <Spinner />;
	const { items, pageInfo } = data;

	if (!pageInfo.totalPage)
		return (
			<div className="text-3xl font-bold text-white">
				No Results for <i>&quot;{query}&quot;</i>
			</div>
		);

	return (
		<div>
			<div className="flex gap-4 justify-center items-center mb-5 text-xl font-bold text-white">
				{page > 1 && (
					<BsChevronLeft
						onClick={() => setPage((prev) => prev - 1)}
						className="cursor-pointer hover:scale-110"
					/>
				)}
				<p>
					{pageInfo.page} - {pageInfo.totalPage}
				</p>
				{page < pageInfo.totalPage && (
					<BsChevronRight
						onClick={() => setPage((prev) => prev + 1)}
						className="cursor-pointer hover:scale-110"
					/>
				)}
			</div>
			<div className="flex flex-wrap gap-5 justify-center py-2">
				{items.map((itm) => (
					<Item {...itm} type="series" key={itm.id} />
				))}
			</div>
			<div className="flex gap-4 justify-center items-center my-5 text-xl font-bold text-white">
				{page > 1 && (
					<BsChevronLeft
						onClick={() => setPage((prev) => prev - 1)}
						className="cursor-pointer hover:scale-110"
					/>
				)}
				<p>
					{pageInfo.page} - {pageInfo.totalPage}
				</p>
				{page < pageInfo.totalPage && (
					<BsChevronRight
						onClick={() => setPage((prev) => prev + 1)}
						className="cursor-pointer hover:scale-110"
					/>
				)}
			</div>
		</div>
	);
};

export default SeriesResults;
