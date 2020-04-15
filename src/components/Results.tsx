import React, {FunctionComponent} from "react";
import Address from "../types/Address";

import {
    Link
} from "react-router-dom";

interface ResultsProps {
    results: Array<Address>,
    loading: boolean
}

const Results: FunctionComponent<ResultsProps> = ({ results, loading }) => {

    if (loading) {
        return (
            <div className="border-t border-gray-100 rounded-b p-4 text-center text-gray-500">
                Loading ...
            </div>
        )
    }

    if (!results.length) {
        return (
            <div className="border-t border-gray-100 rounded-b p-4 text-center text-gray-500">
                Nothing found :(
            </div>
        )
    }

    return (
        <ul className="border-t border-gray-100 rounded-b">
            { results.map((result, index) => <li key={result.id}>
                <Link to={ `/address/${result.id}` } className={"duration-75 block border-gray-100 p-4 hover:bg-gray-200 " + ( ((index + 1) === results.length) ? "" : "border-b" )}>
                    {result.address}
                </Link>
            </li>) }
        </ul>
    );
};
export default Results;
