// EMAIL-SUBMIT
;(function () {
	emailjs.init({
		publicKey: 'AXhT2PSqgoDSTsCFH',
	})
})()

window.onload = function () {
	document.querySelector('.form').addEventListener('submit', function (event) {
		event.preventDefault()
		const formName = document.querySelector('.f-name'),
			formEmail = document.querySelector('.f-email'),
			formTitle = document.querySelector('.f-title'),
			formMessage = document.querySelector('.f-message'),
			formLoading = document.querySelector('.loading'),
			formError = document.querySelector('.error-message'),
			formSent = document.querySelector('.sent-message')

		if (
			formName.value == '' ||
			formEmail.value == '' ||
			formTitle.value == '' ||
			formMessage.value == ''
		) {
			alert('Please input your information!')
		} else {
			// these IDs from the previous steps
			emailjs.sendForm('service_dgom0o4', 'template_smmipsu', this).then(
				() => {
					formLoading.style.display = 'none'
					formSent.style.display = 'block'

					setTimeout(() => {
						formSent.style.display = 'none'
					}, 5000)
				},
				error => {
					formLoading.style.display = 'none'
					formError.style.display = 'block'

					setTimeout(() => {
						formError.style.display = 'none'
					}, 5000)
				}
			)

			// Input value clear
			formName.value = ''
			formEmail.value = ''
			formTitle.value = ''
			formMessage.value = ''
		}
	})
}
