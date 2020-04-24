import React, {FunctionComponent} from "react";

import {
    Link
} from "react-router-dom";

interface ResultsProps {
    address: string,
    id: Number,
    search: string,
    last: boolean
}

const Result: FunctionComponent<ResultsProps> = React.memo(({ id, address, last, search }) => {

    const from = address.toLowerCase().indexOf(search)

    const to = from + search.length

    const firstPart =  address.substring(0,from)
    const mainPart =  address.substring(from,to)
    const secondPart =  address.substring(to)

    return (
        <li>
            <Link to={ `/address/${id}` } className={"duration-75 block border-gray-100 p-4 hover:bg-gray-200 " + ( (last) ? "" : "border-b" )}>
                {firstPart}<span className={"bg-gray-300"}>{mainPart}</span>{secondPart}
            </Link>
        </li>
    );
});

Result.whyDidYouRender = true;

export default Result;
