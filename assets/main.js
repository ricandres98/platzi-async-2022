const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UC9k0tTsh_qStx0HPuPftSsg&part=snippet%2Cid&order=date&maxResults=50';
const content = document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7527dbdd24msh7d5df332c0237f9p1e0ac0jsn534aaa24b8d7',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
    try {
        const response = await fetch(urlApi, options);
        const data = await response.json();
        return data;
    }catch (err) {
        console.error(err);
    }
}

(async () => {
    try {
        const videos = await fetchData(API);
        let view = `
        ${videos.items.map(video => `
            <div class="group relative">
                <div
                    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                        <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        ${video.snippet.title}
                    </h3>
                </div>
            </div>`
        ).slice(0,4).join('')}`;
        console.log('hehehehe')
        content.innerHTML = view;

    } catch(err) {
        console.error(err)
        content.innerHTML = `
            <p>No hay videos disponibles en este momento</p>
        `
    }
})();