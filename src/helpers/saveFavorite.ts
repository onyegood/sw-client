const saveFavoriteInLocalStorage = (item: any) => {
  let data:any = [];
  const stored: any = localStorage.getItem("favs") || [];
  
if (stored && stored.length > 0) {
  console.log('Hello bro!')
}

  data.push(item);

  // localStorage.setItem("favs", JSON.stringify(data));

  console.log(data)
}

export {saveFavoriteInLocalStorage};