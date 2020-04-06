import {useState, useMemo} from "react";

export const useAddressStore = () => {
    const [search, setSearch] = useState("");

    const results = useMemo(() => {
        return [];
    }, [search]);

    return {
        search,
        setSearch,
        results
    }
};