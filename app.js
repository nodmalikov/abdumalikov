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
		telegramTokenBot = '8426007615:AAGBbdQj68tlYu9laGIGV9B1k0sMB34o3LE',
		chatId = '7599400224'

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
				alert('Xabar muvaffaqiyatli yuborildi!')
			})
			.catch(() => {
				alert('Xatolik, qaytadan urinib ko‘ring!')
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

	// NAV-ITEM
	const navItems = document.querySelectorAll('#nav-menu a')
	navItems.forEach(navItem => {
		navItem.addEventListener('click', () => {
			navItems.forEach(item => item.classList.remove('nav-item-active'))

			navItem.classList.add('nav-item-active')
		})
	})

	//BORDER-NAV
	document.querySelector('.nav').addEventListener('click', e => {
		if (e.target.classList.contains('navlink')) {
			document
				.querySelectorAll('.navlink')
				.forEach(item => item.classList.remove('border-active'))
			e.target.classList.add('border-active')
		}
	})
})
