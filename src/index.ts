const urls = ["https://discit-api.fly.dev/health"];

const checkUrl = async (url: string) => {
	try {
		console.log(`Checking ${url}...`);
		const res = await fetch(url);
		console.log(`Status: ${res.status} ${res.statusText}`);
		if (!res.ok) {
			// send email notification
		}
	} catch (error) {
		console.error(error);
	}
};

console.log(new Date().toISOString());
await Promise.all(urls.map(checkUrl));
