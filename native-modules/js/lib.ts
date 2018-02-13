export class MyLib
{
	greeting: string;
	
	constructor(greeting:string)
	{
		this.greeting = greeting;
	}
	
	show()
	{
		document.getElementById(this.greeting).style.display = "block";
		console.log(this.greeting);
	}
}