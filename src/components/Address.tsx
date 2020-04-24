import React, {FunctionComponent} from "react";

import {
    useParams,
    Redirect
} from "react-router-dom";

import addresses from "../data/addresses";

const Address: FunctionComponent = () => {

    const { id } = useParams();

    const address =  addresses.find((address) => address.id === Number(id))

    if (!address) {
        return <Redirect to="/404" />
    }

    return (
        <div className="border border-blue-100 rounded mt-8 p-4 overflow-x-auto">
            Hello <strong>{address.address}</strong>
        </div>
    );
};

Address.whyDidYouRender = true

export default Address;
