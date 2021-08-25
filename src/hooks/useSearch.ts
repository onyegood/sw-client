import React from 'react'

const useSearch = () => {
  // @ts-ignore
  const filteredData = (payload, searchQuery) => {
    if (!searchQuery) return
    const result = payload.filter((item: any) => {
      let regex = new RegExp(searchQuery, "gi");

      return (
        item.name.match(regex) ||
        item.title.match(regex)
      );
    });
    return result
  };

  return { filteredData }
}

export default useSearch;