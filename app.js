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

	// TAB-SWITCH
	const buttons = document.querySelectorAll('.tab-btn')
	const cards = document.querySelectorAll('.portfolio-card')

	buttons.forEach(button => {
		button.addEventListener('click', e => {
			const category = button.getAttribute('data-filter')

			buttons.forEach(btn => {
				btn.classList.remove('active-tab')
				btn.classList.add('text-gray-500', 'dark:text-gray-400')
			})
			button.classList.add('active-tab')
			button.classList.remove('text-gray-500', 'dark:text-gray-400')

			cards.forEach(card => {
				const cardCategory = card.getAttribute('data-category')

				if (category === 'all' || cardCategory === category) {
					card.classList.remove('hidden')
					card.style.display = 'flex'
				} else {
					card.classList.add('hidden')
					card.style.display = 'none'
				}
			})
		})
	})

	// ALL-PORTFOLIO
	let portfolioAllBtn = document.querySelector('.portfolio-all-btn'),
		portfolioInner = document.querySelector('.portfolio-inner')

	function allPortfolio() {
		portfolioInner.style.maxHeight = '100%'
		portfolioInner.classList.add('open')
		portfolioAllBtn.style.display = 'none'
	}

	portfolioAllBtn.addEventListener('click', () => {
		allPortfolio()
	})

	// MOBILE-MENU
	const mobileMenu = document.querySelector('#mobile-menu'),
		navlinks = document.querySelectorAll('.navlink')

	navlinks.forEach(navlink => {
		navlink.addEventListener('click', () => {
			mobileMenu.close()
		})
	})
})
