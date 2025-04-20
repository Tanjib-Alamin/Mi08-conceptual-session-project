export const getfavorites = () => {
    const favorites = localStorage.getItem('favorites');
    if (favorites) return JSON.parse(favorites);
    return [];
}

export const addFavorite = phone => {
    const favorites = getfavorites();
    const isExist = favorites.find(p => p.id === phone.id);
    if(isExist) return console.log("alredy exist");
    favorites.push(phone);
    localStorage.setItem('favorites', JSON.stringify(favorites));
}