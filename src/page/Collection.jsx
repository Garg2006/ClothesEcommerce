import { useState } from "react";
import Filters from "../../components/CollectionPageComponent/Filters";
import Footer from "../../components/footer";
import { useOutletContext } from "react-router";
import ClothesCollection from "../../components/CollectionPageComponent/ClothesCollection";
import SearchFilter from "../../components/CollectionPageComponent/SearchFilter";

const Collection = () => {
  const [filter, setFilter] = useState({
    type: [],
    category: [],
  });

  const [searchFilter, setSearchFilter] = useState("");

  const { search, setSearch } = useOutletContext();

  return (
    <div className="max-w-6xl m-auto">
      {search ? (
        <SearchFilter setSearch={setSearch} setSearchFilter={setSearchFilter} />
      ) : (
        ""
      )}
      <div className="flex flex-col md:flex-row gap-1 sm:gap-10 pt-10">
        <Filters setFilter={setFilter} />
        <ClothesCollection filter={filter} searchFilter={searchFilter} />
      </div>
      <Footer />
    </div>
  );
};

export default Collection;
