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
        res.collection.items.slice(0,10).forEach(item => {
          if(item.links === undefined) {return}
            item.links.slice(0,10).forEach(link => {
                const imageList = document.createElement('li')
                const spaceImage = document.createElement('img')
                spaceImage.src = link.href
                spaceImage.height = 100
                const likeBtn = document.createElement("button")
                likeBtn.innerHTML = "$"
                likeBtn.addEventListener("click", (event) => {
                    event.preventDefault()
                    const likedImageUl = document.querySelector("#savedImage-list")
                    const likedImageList = document.createElement("li")
                    const saveLikedImage = document.querySelector("img")
                    saveLikedImage.src = spaceImage.src
                    likedImageList.append(saveLikedImage)
                    likedImageUl.append(likedImageList)
                })
               
            imageList.append(spaceImage, likeBtn)
            imageUl.append(imageList)
            })
        })
        
    })
 })

        



    


    

})



//♥

