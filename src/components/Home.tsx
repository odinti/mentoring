import React, {FunctionComponent, useEffect, useState} from "react";

import Search from "./Search"
import Results from "./Results"
import { fetchResults } from "../helpers/fetchResults";

const Home: FunctionComponent = () => {
    const [search, setSearch] = useState("");

    const [results, setResults] = useState([]);

    const [loading, setLoading] = useState(false);

    const [status, setStatus] = useState("");

    useEffect(
        () => {

            setLoading(true);

            const handler = setTimeout(async () => {
                try {
                    const {status, data} = await fetchResults(search)
                    setResults(data)
                    setStatus(status)
                } catch (e) {
                    console.error(e)
                } finally {
                    setLoading(false);
                }
            }, 200);
            return () => {
                clearTimeout(handler);
            };
        },
        [search]
    );

    return (
        <>
            <div className={"shadow relative"}>
                <Search setSearch={setSearch} search={search}/>
                <div className="absolute shadow w-full  bg-white">
                    { search ? <Results results={results} loading={loading}/> : null }
                    { search ? (
                        <div className="border-t border-gray-100 shadow-sm rounded p-4 ml-auto text-center text-sm text-gray-500">
                            Status: { status }
                        </div>
                    ) : null }
                </div>
            </div>
        </>
    );

};
export default Home;
