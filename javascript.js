const search = document.querySelector('.search-gif');
const reset = document.querySelector('#reset-button');

var gif_index = 0;
var num_gifs = 0;

function getGif(e) {
    e.preventDefault();
    const text = (this.querySelector('.search')).value.replace(/ +/g, '%20');
                                  
    const url = `http://api.giphy.com/v1/gifs/search?q=${text}&api_key=8tjJZZLZEcvoH8qh1QFAJmpAMz6G2yCa&limit=6`
            var xhr = new XMLHttpRequest();
            xhr.onload = function() {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    var response = JSON.parse(xhr.responseText);
                    var data = response.data;

                    data.forEach(function(image) { 
                        console.log(image.images.downsized_medium.url); 
                        var image = image.images.downsized_medium.url;
                        var img = document.createElement('img');
                        img.src = image;
                        $(img).appendTo('#gif');
                    });
                    }
                }
            xhr.open('GET', url, true); 
            xhr.send(); 
        }

function resetSearch(){
        $('img').remove();
        }

search.addEventListener('submit', getGif);
reset.addEventListener('click', resetSearch);



    
