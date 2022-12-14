import React, { FC } from "react";
import Spinner from "../Common/Spinner";

interface Props {
	status: string;
	productionCompanies: [
		{
			id: number;
			poster: string;
			name: string;
		}
	];
	originalLanguage: string;
	budget: number;
	revenue: number;
	watchProviders:
		| [
				{
					poster: string;
					name: string;
				}
		  ]
		| null;
	loading: boolean;
	error: boolean;
}

const MoviesInfoPart: FC<Props> = ({
	status,
	productionCompanies,
	originalLanguage,
	budget,
	revenue,
	watchProviders,
	loading,
	error,
}) => {
	if (loading) return <Spinner />;
	if (error) return <div>Error Loading info part</div>;

	return (
		<div className="flex flex-col gap-2 text-white">
			<h2 className="mb-4 text-4xl font-bold">Info</h2>

			<div>
				<h3 className="text-xl font-bold">Status</h3>
				<p className="pl-2">{status}</p>
			</div>
			<div>
				<h3 className="text-xl font-bold">Original Language</h3>
				<p className="pl-2">{originalLanguage}</p>
			</div>
			<div>
				<h3 className="text-xl font-bold">Budget</h3>
				<p className="pl-2">
					{budget ? "$" + budget.toLocaleString() : "-"}
				</p>
			</div>
			<div>
				<h3 className="text-xl font-bold">Revenue</h3>
				<p className="pl-2">
					{revenue ? "$" + revenue.toLocaleString() : "-"}
				</p>
			</div>
			{/* Production Companies */}
			<h3 className="text-xl font-bold">Production Companies</h3>
			<div className="flex flex-wrap gap-4 w-full">
				{productionCompanies.map((company) => (
					<div
						key={company.id}
						className={`${
							company.poster !== ""
								? "w-[6rem] h-[6rem] rounded-full flex justify-center items-center bg-gradient-to-b from-white/70 to-white/20"
								: "w-[6rem]"
						}`}
					>
						{company.poster !== "" ? (
							<img
								title={company.name}
								src={company.poster}
								alt="Production company poster"
								className="w-[5rem] h-[3rem]"
							/>
						) : (
							<p className="pt-2">{company.name}</p>
						)}
					</div>
				))}
			</div>
			{/* Watch providers */}
			{watchProviders && (
				<>
					<h3 className="text-xl font-bold">Watch Providers</h3>
					<div className="flex flex-wrap gap-2">
						{watchProviders.map((w) => (
							<div key={w.name}>
								{w.poster !== "" ? (
									<img
										title={w.name}
										src={w.poster}
										alt="watch provider poster"
										className="w-[3rem] h-[3rem] rounded-full"
									/>
								) : (
									<p className="pt-2">{w.name}</p>
								)}
							</div>
						))}
					</div>
				</>
			)}
		</div>
	);
};

export default MoviesInfoPart;
