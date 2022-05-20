import React from "react"
import { useDebounce } from "../components/hooks/useDebounce";
import { useQuery } from "../components/hooks/useQuery";
import { PelisGrid } from "../components/PelisGrid"
import { Search } from "../components/search"
export function LandingPage(){
    const query = useQuery();
    const search = query.get("search");
    const debouncedSearch = useDebounce(search, 400);
    return <div> 
        <Search/>
        <PelisGrid key={debouncedSearch} search={debouncedSearch}/>
        </div>
}