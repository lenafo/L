var c = function(position) {
    
    var lat = position.coords.latitude,
        long = position.coords.longitude,
        coords = lat +', '+ long;

    document.getElementById('google_map').setAttribute('src', 'https://www.google.com/maps/embed?q='+ coords +'&z=60&pb=!1m10!1m8!1m3!1d15717.402523736862!2d-84.0114542!3d9.98786775!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2scr!4v1533000870361');

}

document.getElementById('get_location').onclick = function(){
    navigator.geolocation.getCurrentPosition(c)
    return false;
}