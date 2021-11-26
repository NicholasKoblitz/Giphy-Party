const $form = $("#search-form");
const $input = $("#search");
const token = "UMtzstOrkcp6yXBX2KY6O81EJ392YPiG"


function appendGif(data) {

    const gifArr = data.data
    const randomNum = Math.floor(Math.random() * gifArr.length + 1)
    const gifUrl = gifArr[randomNum].images.original.url
    
    $("#gif-area").append(`<img src="${gifUrl}" class="size">`)

}


$form.on('submit', async function(e) {
    e.preventDefault();
    const search = $input.val();
    const res = await axios.get("http://api.giphy.com/v1/gifs/search", {params: {q: search, api_key: token}});

    appendGif(res.data);
    $input.val('');

})

$("#delete-gifs").on('click', function() {
    $("#gif-area").empty();
})
