window.addEventListener('DOMContentLoaded', () => {
	// SCROLL-MENU
	const nav = document.querySelector('#nav-menu')
	const scrollTexts = document.querySelectorAll('.scroll-text')
	const loaderWrapper = document.querySelector('.loader-wrapper')

	function scrollHeight() {
		if (window.scrollY > 0) {
			nav.classList.add('menu-scroll')
			scrollTexts.forEach(scrollText => {
				scrollText.classList.add('scroll-text-active')
			})
		} else {
			nav.classList.remove('menu-scroll')
			scrollTexts.forEach(scrollText => {
				scrollText.classList.remove('scroll-text-active')
			})
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

	// SCROLL-TOP
	let scrollTop = document.querySelector('.scroll-top')

	function toggleScrollTop() {
		if (scrollTop) {
			window.scrollY > 100
				? scrollTop.classList.add('active')
				: scrollTop.classList.remove('active')
		}
	}
	scrollTop.addEventListener('click', e => {
		e.preventDefault()
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	})

	document.addEventListener('scroll', toggleScrollTop)

	// LANG-TOGGLE
	const langToggleDesktop = document.getElementById('langToggle-desktop')
	const langMenuDesktop = document.getElementById('langMenu-desktop')

	langToggleDesktop?.addEventListener('click', () => {
		langMenuDesktop.classList.toggle('hidden')
	})

	// MOBILE TOGGLE
	const langToggleMobile = document.getElementById('langToggle-mobile')
	const langMenuMobile = document.getElementById('langMenu-mobile')

	langToggleMobile?.addEventListener('click', () => {
		langMenuMobile.classList.toggle('hidden')
	})

	window.addEventListener('click', e => {
		if (
			!langToggleDesktop.contains(e.target) &&
			!langMenuDesktop.contains(e.target)
		) {
			langMenuDesktop.classList.add('hidden')
		}
		if (
			!langToggleMobile.contains(e.target) &&
			!langMenuMobile.contains(e.target)
		) {
			langMenuMobile.classList.add('hidden')
		}
	})
})
