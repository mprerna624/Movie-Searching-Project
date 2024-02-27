const input = document.querySelector('input');
const btn = document.querySelector('button');
const container = document.querySelector('.container')

btn.addEventListener('click', function() {
    while(container.firstElementChild) { //to make the container empty before the next search
        container.firstElementChild.remove();
    }

    axios.get(`https://api.tvmaze.com/search/shows?q=${input.value}`)
    .then(function(res){
        for(let responseData of res.data) {
            container.innerHTML += `
            <figure>
                <img alt="image" src=${responseData.show.image.medium}>
                <figcaption>${responseData.show.genres}</figcaption>
            </figure>
            `;
        }
    })
    .catch(function(err){
        console.log(err)
    })

})