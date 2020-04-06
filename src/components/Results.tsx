import React, {FunctionComponent} from "react";
import Result from "../types/Result";

interface ResultsProps {
    results: Array<Result>
}

const Results: FunctionComponent<ResultsProps> = ({ results }) => {
    return (
        <ul>
            { results.map(result => <li>{result.address}</li>) }
        </ul>
    );
};
export default Results;
