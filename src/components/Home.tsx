import React, {FunctionComponent, useEffect, useState} from "react";

import Search from "./Search"
import Result from "./Result"
import {fetchResults} from "../helpers/fetchResults";
import {defaultEmpty} from "../helpers/defaultEmpty";

const Home: FunctionComponent = () => {
    const [search, setSearch] = useState("");

    const [results, setResults] = useState(defaultEmpty);

    const [loading, setLoading] = useState(false);

    const [status, setStatus] = useState("");

    useEffect(
        () => {

            setLoading(true);

            const handler = setTimeout(async () => {
                try {
                    const {status, data} = await fetchResults(search)

                    if (results.map(r => r.id).join('-') !== data.map(r => r.id).join('-')) {
                        setResults(data)
                    }

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
                    {
                        search && (
                            results.length ? (
                                <ul className="border-t border-gray-100 rounded-b">
                                    {results.map((result, key) => <Result address={result.address} id={result.id}
                                                                          key={result.id}
                                                                          search={search}
                                                                          last={(key + 1) === results.length}/>)}
                                </ul>

                            ) : (
                                <div className="border-t border-gray-100 rounded-b p-4 text-center text-gray-500">
                                    Nothing found :(
                                </div>
                            )
                        )
                    }
                    {search ? (
                        <div
                            className="border-t border-gray-100 shadow-sm rounded p-4 ml-auto text-center text-sm text-gray-500">
                            Status: {  loading ? "Loading" :  status }
                        </div>
                    ) : null}
                </div>
            </div>
        </>
    );

};

Home.whyDidYouRender = true

export default Home;
