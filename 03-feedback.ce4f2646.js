!function(){var e={form:document.querySelector(".feedback-form"),textarea:document.querySelector(".feedback-form textarea"),input:document.querySelector(".feedback-form input")},t="feedback-form-state",a={};!function(){if(localStorage.getItem(t)){var r=localStorage.getItem(t);a=JSON.parse(r),console.log(r),e.form.email.value=a.email?a.email:"",e.form.message.value=a.message?a.message:""}}(),e.form.addEventListener("submit",(function(e){e.preventDefault();var r=e.currentTarget.elements,o=r.email,l=r.message;if(""===o.value||""===l.value)return alert("Все поля должны быть заполнены!");JSON.parse(localStorage.getItem(t)),console.log(a),e.currentTarget.reset(),localStorage.removeItem(t)})),e.form.addEventListener("input",throttle((function(e){a[e.target.name]=e.target.value;var r=JSON.stringify(a);localStorage.setItem(t,r)}),500))}();
//# sourceMappingURL=03-feedback.ce4f2646.js.map