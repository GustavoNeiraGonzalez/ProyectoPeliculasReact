import React from "react"
import { useQuery } from "../components/hooks/useQuery";
import { PelisGrid } from "../components/PelisGrid"
import { Search } from "../components/search"
export function LandingPage(){
    const query = useQuery();
    const search = query.get("search");
    return <div> 
        <Search/>
        <PelisGrid key={search} search={search}/></div>
}