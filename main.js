const button = document.querySelector("button");
const resContainer = document.querySelector("section");

const clicked = () => {
    axios.get("https://swapi.dev/api/planets/2")
        .then(res => {
            const {residents} = res.data
            for (let i = 0; i < residents.length; i++){
                axios.get(residents[i])
                    .then(res => {  
                        let resident = document.createElement('div')
                        resident.innerHTML = res.data.name
                        resContainer.appendChild(resident)
                    })
                    .catch (error => console.log(error));
                };
        })
        .catch (error => console.log(error));
    };
button.addEventListener(`click`, clicked);
