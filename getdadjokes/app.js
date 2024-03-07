const jokes = document.querySelector('#jokes');
const jokesBtn = document.querySelector('button');

jokesBtn.addEventListener('click', addJokes);

const addJokes = async () => {
    const jokeText = await getJokes();
    const newLi = document.createElement('li');

    newLi.textContent = jokeText;
    jokes.appendChild(newLi);
};

const getJokes = async () => {
    try {
        const config = {
            headers: {
                Accept: 'application/json',
            },
        };
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        console.log(res.data);
        return res.data.joke;
    } catch (error) {
        return 'No Jokes Available';
    }
};
