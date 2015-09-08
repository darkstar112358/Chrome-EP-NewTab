function setBackgroundImage()
{
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = function() {
		if(xmlHttp.readyState == 4 && xmlHttp.status == 200) {
			var response = JSON.parse(xmlHttp.response);
			var imageUrl = response.data.children[0].data.preview.images[0].source.url;
			document.body.style.backgroundImage = "url(" + imageUrl + ")";
		}
	}
	xmlHttp.open("GET", "https://www.reddit.com/r/EarthPorn/top/.json?limit=1", true);
	xmlHttp.send(null);
}

setBackgroundImage();
