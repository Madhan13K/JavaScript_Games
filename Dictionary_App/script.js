const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '',
		'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
	}
};

const url =  "https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=";


const result = document.getElementById("result");

const sound = document.getElementById("sound");

const btn = document.getElementById("search-btn")
btn.addEventListener("click",() => {
    let inpWord = document.getElementById("inp-word").value;
    fetch(`${url}${inpWord}`,options)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        console.log(data[0].defination)
        result.innerHTML=`
        <div class="word">
                <h3>${inpWord}</h3>
                <button>
                    <i class="fa-solid fa-volume-high"></i>
                </button>
            </div>
            <div class="details">
                <p>${data[0].defination}</p>
                <p>/sample/</p>
            </div>
            <p class="word-meaning">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, ex.</p>
            <p class="word-example">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, ea! </p>
        </div>`
        
})
})