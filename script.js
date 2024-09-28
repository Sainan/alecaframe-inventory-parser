function get_uploaded()
{
	return new Promise((resolve, reject) => {
		if (document.querySelector("input").files.length)
		{
			document.querySelector("input").files[0].arrayBuffer().then(ab => {
				pluto_give_file("lastData.dat", new Uint8Array(ab));
				resolve(true);
			});
		}
		else
		{
			resolve(false);
		}
	});
}
