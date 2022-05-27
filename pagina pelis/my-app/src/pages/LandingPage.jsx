import React from "react"
import { useSearchParams } from "react-router-dom";
import { useDebounce } from "../components/hooks/useDebounce";
import { PelisGrid } from "../components/PelisGrid"
import { Search } from "../components/search"
export function LandingPage(){
    const [query] = useSearchParams();
    const search = query.get("search");
    const debouncedSearch = useDebounce(search, 400);
    return <div> 
        <Search/>
        <PelisGrid key={debouncedSearch} search={debouncedSearch}/>
        </div>
}