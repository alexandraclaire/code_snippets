			el = document.querySelector('h2');
			el.classList.add('accessibly-hidden');
			document.querySelector('something').addEventListener('click', function() {
				el.classList.remove('accessibly-hidden');
			});