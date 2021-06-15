document.addEventListener("DOMContentLoaded", () => {

const submitBtn = document.querySelector("#search-form")
const submitBox = document.querySelector("input#search")
const imageUl = document.querySelector("ul#image-list")


submitBtn.addEventListener("submit", (event) => {
    event.preventDefault()
    const searchInput =  submitBox.value 
    searchInput

    
fetch(`https://images-api.nasa.gov/search?q=${searchInput}&media_type=image`)
    .then(res => res.json())
    .then(res => {
        imageUl.innerHTML = ""
        res.collection.items.slice(0,10).forEach(item => {
          if(item.links === undefined) {return}
            item.links.slice(0,10).forEach(link => {
                const spaceListItem = document.createElement('li')
                const spaceImage = document.createElement('img')
                spaceImage.src = link.href
                spaceImage.height = 100
                const likeBtn = document.createElement("button")
                likeBtn.innerHTML = "♥"
                spaceListItem.append(likeBtn)
                spaceListItem.append(spaceImage)
                imageUl.append(spaceListItem)
                likeBtn.addEventListener("click", (event) => {
                    event.preventDefault()
                    const likedImageUl = document.querySelector("#savedImage-list")
                    const likeImageListItem = document.createElement("li")
                    const dislikeBtn = document.createElement('button')
                    dislikeBtn.innerHTML = "X"
                    dislikeBtn.addEventListener("click", (event) => {
                        event.preventDefault()
                        likeImageListItem.remove()
                    })
                    
                    const saveLikedImage = document.createElement("img")
                    saveLikedImage.src = link.href
                    saveLikedImage.height = 100
                    console.log(saveLikedImage)
                    likeImageListItem.insertAdjacentElement("beforeend", saveLikedImage)
                    likeImageListItem.insertAdjacentElement("beforeend", dislikeBtn)
                    likedImageUl.insertAdjacentElement("beforeend", likeImageListItem)
                 })
               
            
            })
        })
        
    })
 })
    

})



//♥

