import getGameId from "./gamaId";

const addLike = async (index) => {
    const appId = await getGameId(false);
    const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`;
      const data = {
        item_id: index.toString(),
      };
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.ok;
}

const getLikes = async () => {
    const appId = await getGameId(false);
    const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`;
    const response = await fetch(url);
    const data = await response.json();
    const likesArray = [];
    data.forEach(e => {
        likesArray[parseInt(e.item_id)]=e.likes;
    });
    return likesArray;
}

export {addLike, getLikes};