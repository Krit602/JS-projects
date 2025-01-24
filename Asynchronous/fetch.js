const URL = 'https://bhagavad-gita3.p.rapidapi.com/v2/chapters/?skip=0&limit=18';

const btn = document.querySelector(".btn")

const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '0e502988c2mshaedf7b209385628p113819jsn54fa17a775f6',
		'x-rapidapi-host': 'bhagavad-gita3.p.rapidapi.com'
	}
};

const box1 = document.querySelector(".box1")

const getData = async()=>{
    const response = await fetch(URL, options);
    const data = await response.json();

    box1.textContent = data[0].chapter_summary_hindi;    ;
    console.log(data[0]);
}

btn.addEventListener("click", getData)