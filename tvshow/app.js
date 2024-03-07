const form = document.querySelector('#search-form');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    document.querySelectorAll('img').forEach((img) => img.remove());
    const headings = document.querySelectorAll('h2');
    headings.forEach((h2) => h2.remove());

    const response = await getTvShow();
    if (response) {
        const message = document.createElement('h2');
        message.textContent = response;
        document.body.appendChild(message);
    }

    form.elements.query.value = '';
});

const getTvShow = async () => {
    try {
        const keyword = form.elements.query.value;
        const config = {
            params: {
                q: keyword,
            },
        };
        const res = await axios.get('https://api.tvmaze.com/search/shows', config);

        if (res.data.length === 0) throw new Error();

        return getImages(res.data);
    } catch (error) {
        return 'Could not get the tv show!';
    }
};

const getImages = (shows) => {
    for (const result of shows) {
        const tvImg = result.show.image;
        if (tvImg) {
            const img = document.createElement('img');
            img.src = tvImg.medium;
            document.body.appendChild(img);
        }
    }
};
