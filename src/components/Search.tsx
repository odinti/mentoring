import React, {FunctionComponent, Dispatch, SetStateAction} from "react";

interface SearchProps {
    setSearch: Dispatch<SetStateAction<string>>,
    search: string,
}

const Search: FunctionComponent<SearchProps> = React.memo(({ setSearch, search }) => {
    return (
        <form>
            <input value={search} onChange={(event) => setSearch(event.target.value)} type="search"
                   className="rounded p-4 font-xl w-full" placeholder="Search an address"/>
        </form>
    );
});

Search.whyDidYouRender = true

export default Search;
