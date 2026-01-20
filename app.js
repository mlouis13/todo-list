const form = document.querySelector("#contact");
const btn = document.querySelector("#newmodal");
const modal = document.querySelector("#modal");
const submit = document.querySelector("#submit");
form.addEventListener("submit", (e) => {
	e.preventDefault();
	const data = new FormData(e.currentTarget);
	const email = data.get("adress");
	const doxxing = data.get("code");
	const numero = data.get("numero");
	console.log(email, doxxing, numero);
});
btn.addEventListener("click", () => {
	modal.showModal();
});
submit.addEventListener("click", () => {
	modal.close();
});
