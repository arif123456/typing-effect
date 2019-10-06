
let app = new Vue({
	el: '#root',
	data: {
		typeText: '',
		typeArray:['Developer','Designer','Photograper'],
		typeArrayIndex: 0,
		typeSpeed: 200,
		eraseSpeed: 100,
		newTextDelay: 2000,
		charIndex: 0
	},

	methods:{
		typeWriter(){
			if(this.charIndex < this.typeArray[this.typeArrayIndex].length){
				this.typeText += this.typeArray[this.typeArrayIndex].charAt(this.charIndex);
				this.charIndex++;
				setTimeout(this.typeWriter, this.typeSpeed);
			}else{
				setTimeout(this.textErase, this.newTextDelay);
			}
		},

		textErase(){
			if(this.charIndex > 0){
				this.typeText = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1);
				this.charIndex--;
				setTimeout(this.textErase, this.eraseSpeed);
			}else{
				this.typeArrayIndex++;
				if(this.typeArrayIndex >= this.typeArray.length)
					this.typeArrayIndex = 0;
				setTimeout(this.typeWriter, this.typeSpeed);
			}
		}
	},

	mounted(){
		this.typeWriter();
	}



})