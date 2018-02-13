import * as Lib from "./lib.js";

class App
{
	id: string;
	constructor(id:string) { 
		this.id = id;
		this.start();
	}
	
	start()
	{
		let lib = new Lib.MyLib(this.id);
		lib.show();
	}
	
	hello()
	{
	}
}

function Pippo()
{
	console.log("Pippo");
}


/*declare global {
    interface Window { app: any; }
}*/
//window.app = new App("Box");



(<any>window).app = new App("Box");
(<any>window).app.start();

