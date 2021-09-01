import { useEffect, useState } from 'react'

 const useFavorites = (key: string) => {
    // Get favorites from localstorage if it exists 
    const storedData: any = localStorage.getItem("favorites") || [];
    // Transform favorites into array of JSON objects
    const storedJSON = storedData && storedData.length > 0 ? JSON.parse(storedData) : [];
    // Store favorites in a component state
    const [favorites, setFavorites] = useState(storedJSON);
    // Selected favorite name
    const [name, setName] = useState("");

    const saveFavorite = (item: any) => {
      const payload = {
        ...item,
        name: item?.name || item?.title
      }
      const title = item?.name || item?.title
      setName(title);

      setFavorites(favorites.concat(payload));
    }

    const isFavorite = (key: string, name: string) => {
      return favorites.map((x: any) => x[key]).includes(name)
    }

    useEffect(() => {
      if (storedJSON && storedJSON.length > 0) {
        if (!storedJSON.map((x: any) => x[key]).includes(name)) {
          localStorage.setItem("favorites", JSON.stringify(favorites));
        }else{
          const updatedData = favorites.filter((x: any) => x[key] !== name);
          setFavorites(updatedData);
          localStorage.setItem("favorites", JSON.stringify(favorites));
        }
      }else{
        localStorage.setItem("favorites", JSON.stringify(favorites));
      }
    }, [favorites, name, key, storedJSON]);
    
  return {
    saveFavorite,
    favorites,
    isFavorite
  }
}

export default useFavorites