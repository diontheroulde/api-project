document.addEventListener("DOMContentLoaded", () => {

const submitBtn = document.querySelector("#search-form")
const submitBox = document.querySelector("input#search")
    

submitBtn.addEventListener("submit", (event) => {
    event.preventDefault()
    const searchInput =  submitBox.value 
    searchInput

    
fetch(`https://images-api.nasa.gov/search?q=${searchInput}&media_type=image`)
    .then(res => res.json())
    .then(res => {
        
        
        res.collection.items.forEach(item => {
          if(item.links === undefined) {return}
            item.links.forEach(link => {
                const imageUl = document.querySelector("ul#image-list")
                const imageList = document.createElement('li')
                const spaceImage = document.createElement('img')
                spaceImage.src = link.href
                spaceImage.height = 100
            imageList.append(spaceImage)
            imageUl.append(imageList)
            })
            for (let i = 0; i < 10; i ++){
         return item}
            
        })
        
    })

 })

})





