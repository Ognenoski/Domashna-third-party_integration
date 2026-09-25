const getCharacters = async () => {
    try {
        const response = await fetch("https://rickandmortyapi.com/api/character");

        const data = await response.json();

        console.log(data);
    } catch (err) {
        console.log("Error:", err);
    }
};

getCharacters();