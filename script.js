let baseUrl = "https://api.jikan.moe/v3";


document.getElementById('button').addEventListener('click', (e) =>{
    e.preventDefault();
    const input = document.getElementById('searchbar').value;
    $.getJSON(`${baseUrl}/search/anime?q=${input}&page=1`, function(data){

    console.log(data);
    
    var image = data.results[0].image_url;
    var title = data.results[0].title;
    var episodes = data.results[0].episodes;
    var isAiring = data.results[0].airing;
    if(isAiring == false)
    {
        $('.airing').append("This show is no longer running");
    }
    else if(isAiring == true)
    {
        $('.airing').append("This show is currently running");

    }
    
    
    

    $('.icon').attr('src', image);
    $('.title').append(title);
    $('.episodes').append("This show has " + episodes + " episodes");            
    

});




