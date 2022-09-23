import React, { useContext, useEffect, useState } from "react";
import { getAnimeCharsResults } from "../../../lib/Search/fromJIKAN";
import PersonCard from "../../Common/PersonCard";
import Spinner from "../../Common/Spinner";
import { SearchContext, SearchContextState } from "../../helpers/context";

const AnimeCharsResults = () => {
	const { query, filters } = useContext<SearchContextState>(SearchContext);
	const [data, setData] = useState<any>(null);
	useEffect(() => {
		const wrapper = async () => {
			const { data: ret } = await getAnimeCharsResults(query, filters);
			setData(ret);
		};
		wrapper();
	}, [query]);

	if (!data || !data.people) return <Spinner />;
	return (
		<div className="flex flex-wrap gap-5 justify-center py-2">
			{data.people.map((person) => (
				<PersonCard {...person} />
			))}
		</div>
	);
};

export default AnimeCharsResults;
