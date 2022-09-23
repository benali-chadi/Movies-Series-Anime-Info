import React, { useContext, useEffect, useState } from "react";
import { getPeopleResults } from "../../../lib/Search/fromTMDB";
import PersonCard from "../../Common/PersonCard";
import Spinner from "../../Common/Spinner";
import { SearchContext, SearchContextState } from "../../helpers/context";

const PeopleResults = () => {
	const { query } = useContext<SearchContextState>(SearchContext);
	const [data, setData] = useState<any>(null);
	useEffect(() => {
		const wrapper = async () => {
			const { data: ret } = await getPeopleResults(query);
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

export default PeopleResults;
