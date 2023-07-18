// const whole = document.getElementById('class');

// const displayTVSeries = (series) => {
//   whole.innerHTML = '';
//   if (series) {
//     const seriesElement = document.createElement('div');
//     const titleElement = document.createElement('h3');
//     titleElement.textContent = series.l;
//     titleElement.style.fontSize = '1.2em';
//     titleElement.style.color = 'blue';
//     titleElement.style.marginBottom = '5px';
//     seriesElement.appendChild(titleElement);

//     const castElement = document.createElement('p');
//     castElement.textContent = 'Cast: ' + series.s;
//     seriesElement.appendChild(castElement);

//     const yearElement = document.createElement('p');
//     yearElement.textContent = 'Year: ' + series.y;
//     seriesElement.appendChild(yearElement);

//     const rankElement = document.createElement('p');
//     rankElement.textContent = 'Rank: ' + series.rank;
//     seriesElement.appendChild(rankElement);

//     whole.appendChild(seriesElement);
//   }
// };






// // Javascript
// const settings = {
// 	async: true,
// 	crossDomain: true,
// 	url: 'https://online-movie-database.p.rapidapi.com/auto-complete?q=game%20',
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '0fe6a835ccmsheab5fe0047c92c9p1112ffjsn1c2f4860e263',
// 		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
// 	}
// };

// $.ajax(settings).done(function (response) {
// 	// Displaying the response on the website
// 	const movies = response.d;
	
// 	// Loop through each movie and display the image, title, and ID
// 	movies.forEach(movie => {
// 		const image = movie.i.imageUrl;
// 		const title = movie.l;
// 		const id = movie.id;
//         const series=movie.s; 
		
// 		// Create HTML elements to display the movie information
// 		const movieContainer = document.createElement('div');
// 		const imageElement = document.createElement('img');
// 		const titleElement = document.createElement('h2');
// 		const idElement = document.createElement('p');
//         const seriesElement=document.createElement('p')
		
// 		// Set the attributes and content of the HTML elements
// 		imageElement.src = image;
// 		titleElement.textContent = title;
// 		idElement.textContent = `ID: ${id}`;
		
// 		// Append the HTML elements to the movie container
// 		movieContainer.appendChild(imageElement);
// 		movieContainer.appendChild(titleElement);
// 		movieContainer.appendChild(idElement);
//         movieContainer.appendChild(seriesElement)
		
// 		// Append the movie container to the website
// 		document.body.appendChild(movieContainer);
// 	});
// });

let menu=document.querySelector('.menu-icon');
let navbar=document.querySelector('.menu')
 menu.onclick=()=>{
    navbar.classList.toggle('active')
    menu.classList.toggle('move');
    bell.classList.remove('active');
 }

 let bell=document.querySelector('.notification');

 document.querySelector('#bell-icon').onclick=()=>{
    bell.classList.toggle('active');
 }

 var swiper = new Swiper(".trending-content", {
   slidesPerView: 1,
   spaceBetween: 10,
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   autoplay:{
      delay:5000,
      disableOnInteraction:false,
   },
   breakpoints: {
     640: {
       slidesPerView: 2,
       spaceBetween: 10,
     },
     768: {
       slidesPerView: 3,
       spaceBetween: 15,
     },
     1068: {
       slidesPerView: 4,
       spaceBetween: 20,
     },
   },
 });

 window,onscroll=function(){mufunction()};

 function mufunction(){
   var winscroll=document.body.scrollTop || document.documentElement.scrollTop;
   var height=document.documentElement.scrollHeight-document.documentElement.clientHeight;
   var scrolled=(winscroll/height)*100;
   document.getElementById('#scroll-bar').style.width=scrolled + '%';
 }