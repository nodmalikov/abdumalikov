window.addEventListener('DOMContentLoaded', () => {
	// SCROLL-MENU
	const nav = document.querySelector('#nav-menu')
	const loaderWrapper = document.querySelector('.loader-wrapper')

	function scrollHeight() {
		if (window.scrollY > 0) {
			nav.classList.add('menu-scroll')
		} else {
			nav.classList.remove('menu-scroll')
		}
	}

	// LOADER
	setTimeout(() => {
		loaderWrapper.style.display = 'none'

		scrollHeight()
		window.addEventListener('scroll', scrollHeight)
	}, 1500)

	// FORM
	const form = document.querySelector('form'),
		telegramTokenBot = '7712362635:AAEsc4ysR8uaniRRNMTWWRiDVIJj3lxNRkY',
		chatId = '7344685069'

	form.addEventListener('submit', event => {
		event.preventDefault()

		const formData = new FormData(form)

		const object = {}
		formData.forEach((value, key) => {
			object[key] = value
		})

		fetch(`https://api.telegram.org/bot${telegramTokenBot}/sendMessage`, {
			method: 'POST',
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify({
				chat_id: chatId,
				text: `Name: ${object.ism}. Surname: ${object.familiya}. Email: ${object.pochta}. Message: ${object.message}`,
			}),
		})
			.then(() => {
				alert('Message sent successfully!')
			})
			.catch(() => {
				alert('An error occurred. Please try again!')
			})
			.finally(() => {
				form.reset()
			})
	})
})
