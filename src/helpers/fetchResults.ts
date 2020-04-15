import addresses from "../data/addresses";
import Address from "../types/Address";

const cache = {
    save(key: string, value: Array<Address>) {
        window.localStorage.setItem(key, JSON.stringify(value))
    },
    restore(key: string) {
        return JSON.parse(window.localStorage.getItem(key));
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
            data: [],
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

    if (!data.length) return { status: "API Hit, Not Saved", data: [] };

    cache.save(query, data);

    return {
        data,
        status: "API Hit, Saved"
    };
};