
function Show(id: string) : void
{
	document.getElementById(id).style.display = "block";
}

function Load()
{
	console.log("Init app");
	Show("Box");
	console.log("Done");
}