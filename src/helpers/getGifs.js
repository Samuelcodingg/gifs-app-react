export const getGifs = async(value) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(value)}&limit=10&api_key=Go035p8RbUXUKt0jsbcAHnMcqc9GfWss`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(gif => {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images?.downsized_medium.url
        }
    });

    return gifs;
}
