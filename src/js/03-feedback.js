import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form')
let dataForm = JSON.parse(localStorage.getItem("feedback-form-state")) || {};
const { email, message } = form.elements;
loadPage();

const checkFields = () => {
	dataForm = { email: email.value, message: message.value };
	localStorage.setItem("feedback-form-state", JSON.stringify(dataForm));
}

function loadPage() {
	if (dataForm) {
		email.value = dataForm.email || '';
		message.value = dataForm.message || '';
	}
}

const onFormSubmit = (event) => {
	event.preventDefault();
	if (email.value !== "" || message.value !== "") {
		console.log({ email: email.value, message: message.value })
	}
	event.currentTarget.reset();
	localStorage.removeItem("feedback-form-state");
	dataForm = {};
}

form.addEventListener("input", throttle(checkFields, 500));
form.addEventListener('submit', onFormSubmit);



