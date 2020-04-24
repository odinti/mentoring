import addresses from "../data/addresses";
import Address from "../types/Address";
import {defaultEmpty} from "./defaultEmpty";

const cache = {
    _local: {},
    save(key: string, value: Array<Address>) {
        window.localStorage.setItem(key, JSON.stringify(value))
        this._local[key] = value;
    },
    restore(key: string) {
        if (key in  this._local) {
            return this._local[key]
        } else {
            return JSON.parse(window.localStorage.getItem(key));
        }
    }
}

const callAPI = async (query: string) => {
    return new Promise<Array<Address>>((resolve, reject) => {
        setTimeout(() => {
            const found = addresses.filter(({address}) => {
                return address.toLowerCase().indexOf(query.toLowerCase()) !== -1
            })

            resolve(found);
        }, Math.random() * 2000)
    })
};

type Response = {
    data: Array<Address>,
    status: string
}

    export const fetchResults = async (query: string) : Promise<Response>  => {

    if (query === "") {
        return {
            data: defaultEmpty,
            status: "Empty"
        };
    }

    // try cache

    const inCache = cache.restore(query);

    if (inCache) {
        return {
            data: inCache,
            status: "Cache Hit"
        };
    }

    // fetch from API

    const data = await callAPI(query)

    if (!data.length) return { status: "API Hit, Not Saved", data: defaultEmpty };

    cache.save(query, data);

    return {
        data,
        status: "API Hit, Saved"
    };
};