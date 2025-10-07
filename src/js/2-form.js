const formData = {
    email: "",
    message: ""
};
const form = document.querySelector('.feedback-form')
form.addEventListener('input', formChange);
function formChange(event) {
    const { name, value } = event.target;
  formData[name] = value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
const savedData = localStorage.getItem('feedback-form-state');
if (savedData) {
  const parsedData = JSON.parse(savedData);
  form.elements.email.value = parsedData.email || '';
  form.elements.message.value = parsedData.message || '';
  formData.email = parsedData.email || '';
  formData.message = parsedData.message || '';
};
form.addEventListener('submit', formSubmit);
function formSubmit(event) {
    event.preventDefault();
    if (!formData.email.trim() || !formData.message.trim()) {
        alert("Fill please all fields");
        return; 
    } 
console.log(formData);
localStorage.removeItem('feedback-form-state');
formData.email = "";
formData.message = "";
form.reset();
}
