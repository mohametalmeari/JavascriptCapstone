const getGameId = async (newGame) => {
    if (newGame) {
        const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/', {
          method: 'POST',
        });
        const data = await response.text();
        return data;
    }else{
        return 'TdwdZGs8O01Fy9Rblj8S'
    }
};

export default getGameId;