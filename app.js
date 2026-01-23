const form = document.querySelector("#contact");
const btn = document.querySelector("#newmodal");
const modal = document.querySelector("#modal");
const submit = document.querySelector("#submit");
const section = document.querySelector("#todo");
const checkbox1 = document.querySelector("#checkbox1");
const checkbox2 = document.querySelector("#checkbox2");
function createCard(name, dure) {
	const div = document.createElement("div");
	const input = document.createElement("input");
	const h4 = document.createElement("h4");
	const p = document.createElement("p");
	const result = document.createElement("p");
	const button = document.createElement("button");
	input.setAttribute("type", "checkbox");

	input.classList.add("done-or-not");
	div.classList.add("section");
	h4.classList.add("resultat");
	p.classList.add("milieu");
	result.classList.add("result");

	h4.textContent = name;
	p.textContent = "todo";
	p.style.backgroundColor = "#D73C3C";
	p.style.padding = "8px 24px";
	p.style.color = "white";
	button.textContent = "supprimer";
	result.textContent = dure;

	let change = true;

	input.addEventListener("change", (e) => {
		if (e.isTrusted === change) {
			p.textContent = "DONE";
			p.style.backgroundColor = "#21B867";
			change = false;
		} else {
			p.textContent = "TODO";
			p.style.backgroundColor = "#D73C3C";
			change = true;
		}
	});
	div.appendChild(input);
	div.appendChild(p);
	div.appendChild(h4);
	div.appendChild(result);
	div.appendChild(button);

	return div;
}

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const data = new FormData(form);
	const email = data.get("adress");
	let duree = data.get("duree");
	console.log(duree);
	let test = createCard(email, duree);
	section.appendChild(test);
});
btn.addEventListener("click", () => {
	modal.showModal();
});
submit.addEventListener("click", () => {
	modal.close();
});
