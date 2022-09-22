import { createContext } from "react";

export interface FilterState {
	sort: "" | "asc" | "desc";
	year: number | "";
	status: "airing" | "complete" | "upcoming" | "";
	genre: string;
}

export const filtersInitialState: FilterState = {
	sort: "",
	year: "",
	status: "",
	genre: "",
};

export interface SearchContextState {
	filters: FilterState;
	setFilters:
		| React.Dispatch<React.SetStateAction<FilterState>>
		| (() => void);
	category: "movie" | "serie" | "anime" | "people" | "animeCharacter";
	query: string;
}
export const initialState: SearchContextState = {
	filters: filtersInitialState,
	setFilters: () => {},
	category: "movie",
	query: "",
};

export const SearchContext = createContext<SearchContextState>(initialState);
