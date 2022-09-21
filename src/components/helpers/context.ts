import { createContext } from "react";

export interface FilterState {
	sort:
		| ""
		| "popularityAsc"
		| "popularityDesc"
		| "scoreAsc"
		| "scoreDesc"
		| "startDateAsc"
		| "startDateDesc";
	year: number | "";
	state: "airing" | "complete" | "upcoming" | "";
	genre: string;
}

export const filtersInitialState: FilterState = {
	sort: "",
	year: "",
	state: "",
	genre: "",
};

export interface FilterContextState {
	filters: FilterState;
	setFilters:
		| React.Dispatch<React.SetStateAction<FilterState>>
		| (() => void);
}
export const initialState: FilterContextState = {
	filters: filtersInitialState,
	setFilters: () => {},
};

export const FilterContext = createContext<FilterContextState>(initialState);
