const url = 'https://spotify-downloader9.p.rapidapi.com/downloadSong?songId=https%3A%2F%2Fopen.spotify.com%2Ftrack%2F7jT3LcNj4XPYOlbNkPWNhU';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'a681a3b637mshc19f49e1527d179p17cca0jsn6fa875eb8e3f',
		'x-rapidapi-host': 'spotify-downloader9.p.rapidapi.com',
		'Content-Type': 'application/json'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}