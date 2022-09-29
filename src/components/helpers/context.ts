import { createContext } from "react";

export interface FilterState {
	sort: "" | "asc" | "desc";
	year: number | "";
	status: "airing" | "complete" | "upcoming" | "";
	genre: { id: number; name: string };
}

export const filtersInitialState: FilterState = {
	sort: "",
	year: "",
	status: "",
	genre: { id: -1, name: "" },
};

export interface SearchContextState {
	filters: FilterState;
	setFilters:
		| React.Dispatch<React.SetStateAction<FilterState>>
		| (() => void);
	category: "movie" | "serie" | "anime" | "people" | "animeCharacter";
	query: string;
	animeGenres: [{ id: number; name: string }];
}
export const initialState: SearchContextState = {
	filters: filtersInitialState,
	setFilters: () => {},
	category: "movie",
	query: "",
	animeGenres: [{ id: -1, name: "" }],
};

export const SearchContext = createContext<SearchContextState>(initialState);
