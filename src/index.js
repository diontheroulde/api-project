function displayImage(link) {
  const spaceListItem = document.createElement("li")
  const spaceImage = document.createElement("img")
  const likeBtn = document.createElement("button")
  const imageUl = document.querySelector("ul#image-list")

  spaceImage.src = link.href
  spaceImage.height = 150
  likeBtn.innerHTML = "♥"
  spaceListItem.append(likeBtn)
  spaceListItem.append(spaceImage)
  imageUl.append(spaceListItem)
  likeBtn.addEventListener("click", (event) => {
    event.preventDefault()
    const likedImageUl = document.querySelector("#savedImage-list")
    const likeImageListItem = document.createElement("li")
    const dislikeBtn = document.createElement("button")

    dislikeBtn.innerHTML = "X"
    dislikeBtn.addEventListener("click", (event) => {
      event.preventDefault()
      likeImageListItem.remove()
    })
    
    const saveLikedImage = document.createElement("img")

    saveLikedImage.src = link.href
    saveLikedImage.height = 90
    console.log(saveLikedImage)
    likeImageListItem.insertAdjacentElement("beforeend", saveLikedImage)
    likeImageListItem.insertAdjacentElement("beforeend", dislikeBtn)
    likedImageUl.insertAdjacentElement("beforeend", likeImageListItem)
  })

}










document.addEventListener("DOMContentLoaded", () => {
  const submitBtn = document.querySelector("#search-form")

  submitBtn.addEventListener("submit", (event) => {
    event.preventDefault()
    const searchInput = document.querySelector("input#search").value
    searchInput
    const imageUl = document.querySelector("ul#image-list")

    fetch(`https://images-api.nasa.gov/search?q=${searchInput}&media_type=image`)
      .then(res => res.json())
      .then(res => {
        imageUl.innerHTML = ""
        res.collection.items.slice(0, 20).forEach(item => {
          if (item.links === undefined) { return }
          item.links.slice(0, 20).forEach(link => {
            displayImage(link)
          })
        })
      })
  })
  const updateCommentButton = document.querySelector("#comment-section button")
  updateCommentButton.addEventListener("click", (event) => {
    event.preventDefault()
    const commentTextArea = document.querySelector('textarea')
    const newComment = document.createElement("li")

    newComment.innerHTML = commentTextArea.value
    document.querySelector('.comments').append(newComment)
    commentTextArea.value = ""
    window.scrollTo(0,document.body.scrollHeight);
    
    
    
    
    

  })
})


