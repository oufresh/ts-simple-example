import "./index.css";
import "./AwesomeCardComponent";
import "./AwesomeDropdown";

const root = document.getElementById("root");
if (root)
  root.innerHTML = `<div class="container"><h1>Hello web components</h1><awesome-card greeting="Hello world!"></awesome-card>
  <awesome-dropdown /></div>`;

const dropdwon: any | null = document.querySelector("awesome-dropdown");
if (dropdwon) {
  dropdwon.options = {
    option1: { label: "Option 1" },
    option2: { label: "Option 2" }
  };
  dropdwon.addEventListener("onChange", (event: Event) => console.log(event));
}
