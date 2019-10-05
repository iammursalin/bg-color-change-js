const colorBtn = document.querySelector('.colorBtn');
		const bodyBcg = document.querySelector('body');
		const colors = ['crimson','purple','green','red','blue','#3498db','#2980b9','#ecf0f1','#d35400','#f1c40f'];
		colorBtn.addEventListener('click',function(){
			// bodyBcg.style.backgroundColor = colors[2];
			let random = Math.floor(Math.random() * colors.length);
			bodyBcg.style.backgroundColor = colors[random];
		});