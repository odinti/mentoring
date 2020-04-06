import React, {FunctionComponent, useMemo, useState} from "react";

import Search from "./Search"
import Results from "./Results"

const Home: FunctionComponent = () => {
    const [search, setSearch] = useState("");

    const results = useMemo(() => {
        return fetchResults(search);
    }, [search]);

    return (
        <>
            <Search setSearch={setSearch} search={search}/>
            <Results results={results}/>
        </>
    );
};
export default Home;
