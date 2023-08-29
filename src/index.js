// write your code here
fetch('http://localhost:3000/ramens')
.then((resp)=>resp.json())
.then(data=>renderRamens(data))

function renderRamens(ramens){
ramens.forEach(renderRamen)
}

function renderRamen(ramen){
    const imageRamen = document.createElement("img");
    imageRamen.src = ramen.image
    const menuDiv = document.getElementById("ramen-menu"); 
    menuDiv.append(imageRamen)

    imageRamen.addEventListener("click", e => { renderDetails(ramen) })
    
    function renderDetails(ramen){
        const detailImage = document.getElementById("detail-Image")
        const rameName = document.getElementById("name-ramen")
        const restntName = document.getElementById("restaurantName")
        const ramenRating = document.getElementById("rating-display")
        const ramenComment = document.getElementById("comment-display")

        detailImage.src = ramen.image
        detailImage.alt = ramen.name
        rameName.textContent = ramen.name
        restntName.textContent = ramen.restaurant
        ramenRating.textContent= ramen.rating
        ramenComment.textContent = ramen.comment
    }


}

const form = document.getElementById("new-ramen")
form.addEventListener("submit", e =>{
    e.preventDefault()
    const newRamen = {
        name: e.target.name.value,
        restaurant: e.target.restaurant.value,
        image: e.target.image.value,
        rating: e.target.rating.value,
        comment: e.target["new-comment"].value
        
       
    };
    renderRamen(newRamen)

})
