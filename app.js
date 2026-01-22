const form = document.querySelector("#contact");
const btn = document.querySelector("#newmodal");
const modal = document.querySelector("#modal");
const submit = document.querySelector("#submit");
const section = document.querySelector("#todo");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const data = new FormData(e.currentTarget);
	const email = data.get("adress");

	console.log(email);
});
btn.addEventListener("click", () => {
	modal.showModal();
});
submit.addEventListener("click", () => {
	modal.close();
	const p = document.createElement("p");
	const div = document.createElement("div");
	div.classList.add("section");
	p.classList.add("resultat");
	section.appendChild(div);
	div.appendChild(p);
	p.textContent = "neuille";
});
