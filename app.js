const translate = document.querySelectorAll(".translate");
const big_title = document.querySelector(".big-title");

const header = document.querySelector("header");
const shadow = document.querySelector(".shadow");
const content = document.querySelector(".content");
const section = document.querySelector("section");
const image_container = document.querySelector(".imgContainer");
const opacity = document.querySelectorAll(".opacity");
const border = document.querySelector(".border"); 
let header_height = header.offsetHeight;
let section_height = section.offsetHeight; window.addEventListener('scroll', () => { 
let scroll = window.pageYOffset; 
let sectionY = section.getBoundingClientRect();
 translate.forEach(element => { 
let speed = element.dataset.speed; element.style.transform = `translateY(${scroll * speed}px)`; });
 opacity.forEach(element => { element.style.opacity = scroll / (sectionY.top + section_height); }) 
 big_title.style.opacity = - scroll / (header_height / 2) + 1; 
 shadow.style.height = `${scroll * 0.5 + 300}px`; 
 content.style.transform = `translateY(${scroll / (section_height + sectionY.top) * 50 - 50}px)`; 
 image_container.style.transform = `translateY(${scroll / (section_height + sectionY.top) * -50 + 50}px)`; border.style.width = `${scroll / (sectionY.top + section_height) * 30}%`;})






//var close=document.querySelector('.close')
//var menu=document.querySelector('.menu')
function onn(){
				alert('you clicked')
}




$(document).ready(function(){
				$('.menu img').click(function(){
								$('.menu img').fadeOut(1000)
								$('.close img').fadeIn(1000)
								$('.navig').fadeIn(1000)
								$('.navbox2').hide()
								$('.head').hide()
								$('.cw').hide()
								$('.goo img').hide()
								$('.fbb img').hide()
								$('.line').hide()
								$('.or').hide()
								$('.line2').hide()
								$('.twitterr img').hide()
								$('.email').hide()
								$('.pass').hide()
								$('.login').hide()
		  					$('.foot').hide()
		  					$('.close2 img').fadeOut(100)
		  					$('.user img').fadeIn(1000)
		  					$('.home a').fadeIn(1000)
		  					$('.acc a').fadeIn(1000)
		  					$('.about a').fadeIn(1000)
		  					$('.wallet a').fadeIn(1000)
		  					$('.referral a').fadeIn(1000)
		  					$('.redeem a').fadeIn(1000)
		  					$('.ps a').fadeIn(1000)
		  					$('.contact button').fadeIn(1000)
		  					$('.hd button').fadeIn(1000)
				})
})


$(document).ready(function(){
				$('.close img').click(function(){
								$('.menu img').fadeIn(1000)
								$('.close img').fadeOut(1000)
								$('.navig').fadeOut(1000)
								$('.navbox2').hide()
								$('.head').hide()
								$('.cw').hide()
								$('.goo img').hide()
								$('.fbb img').hide()
								$('.line').hide()
								$('.or').hide()
								$('.line2').hide()
								$('.twitterr img').hide()
								$('.email').hide()
								$('.pass').hide()
								$('.login').hide()
		  					$('.foot').hide()
								$('.home a').hide()
		  					$('.acc a').hide()
		  					$('.about a').hide()
		  					$('.wallet a').hide()
		  					$('.referral a').hide()
		  					$('.redeem a').hide()
		  					$('.ps a').hide()
		  					$('.contact button').hide()
		  					$('.hd button').hide()
							
								
				})
})

$(document).ready(function(){
				$('.user img').click(function(){
				$('.close2 img').fadeIn(1000)
				$('.user img').fadeOut(1000)
				$('.head').fadeIn(1000).delay(1000)
				$('.fbb img').fadeIn(1000).delay(1000)
				$('.goo img').fadeIn(1000).delay(1000)
				$('.twitterr img').fadeIn(1000).delay(1000)
				$('.cw').fadeIn(1000).delay()
				$('.line').fadeIn(1000).delay()
				$('.or').fadeIn(1000).delay()
				$('.line2').fadeIn(1000).delay()
				$('.email').fadeIn(1000).delay()
				$('.pass').fadeIn(1000).delay()
				$('.login').fadeIn(1000).delay()
				$('.foot').fadeIn(1000).delay()
				$('.foot a').fadeIn(1000).delay()
				$('.navbox2').fadeIn(1000)
				$('.menu img').fadeIn()
				$('.close img').fadeOut()
				$('.navig').hide()
				$('.home a').hide()
		  					$('.acc a').hide()
		  					$('.about a').hide()
		  					$('.wallet a').hide()
		  					$('.referral a').hide()
		  					$('.redeem a').hide()
		  					$('.ps a').hide()
		  					$('.contact button').hide()
		  					$('.hd button').hide()
				})
})

$(document).ready(function(){
				$('.close2 img').click(function(){
								$('.user img').fadeIn(1000)
								$('.close2 img').fadeOut()
								$('.navbox2').hide()
								$('.head').hide()
								$('.cw').hide()
								$('.fbb img').hide()
								$('.goo img').hide()
								$('.twitterr img').hide()
								$('.line').hide()
								$('.or').hide()
								$('.line2').hide()
								$('.email').hide()
								$('.pass').hide()
								$('.login').hide()
								$('.foot').hide()
								$('.foot a').hide()
				})
})

$(document).ready(function(){
				$('.email').click(function(){
								$('.head').hide()
								$('.cw').hide()
								$('.fbb img').hide()
								$('.goo img').hide()
								$('.twitterr img').hide()
								$('.line').hide()
								$('.or').hide()
								$('.line2').hide()
								$('.foot').hide()
								$('.foot a').hide()
								$('.email').animate({
												width:"90%",
												height:"50px",
												top :'20%',
												left:"2.5%"
								})
								$('.pass').animate({
												top:'58%',
												width:"80%",
												height:'40px',
												left:'7.5%'
								})
				})
})
$(document).ready(function(){
				$('.pass').click(function(){
								$('.head').hide()
								$('.cw').hide()
								$('.fbb img').hide()
								$('.goo img').hide()
								$('.twitterr img').hide()
								$('.line').hide()
								$('.or').hide()
								$('.line2').hide()
								$('.foot').hide()
								$('.foot a').hide()
								$('.pass').animate({
												width:"90%",
												height:"50px",
												top :'20%',
												left:"2.5%"
								})
								$('.email').animate({
												top:'58%',
												width:"80%",
												height:'40px',
												left:'7.5%'
								})
				})
})

$(document).ready(function(){
				$('.navbox2').click(function(){
								$('.head').fadeIn()
								$('.cw').fadeIn()
								$('.fbb img').fadeIn()
								$('.twitterr img').fadeIn()
								$('.goo img').fadeIn()
								$('.line').fadeIn()
								$('.or').fadeIn()
								$('.line2').fadeIn()
								$('.foot').fadeIn()
								$('.foot a').fadeIn()
								$('.email').animate({
												width:'80%',
												height:'40px',
												left:'7.5%',
												top:'55%'
								})
								$('.pass').animate({
												width:'80%',
												height:'40px',
												left:'7.5%',
												top:'64%'
								})
				})
})

$(document).ready(function(){
				$(".close2 img").click(function(){
								$('.email').css({"width":"80%","top":"55%","height":"40px","left":"7.5%"})
								
				})
				})
$(document).ready(function(){
				$('.close2 img').click(function(){
								$('.pass').css({"width":"80%","top":"64%","height":"40px","left":"7.5%"})
								$('.pass').dequeue()
									
								
				})
})
