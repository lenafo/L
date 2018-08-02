var c = function(position) {
    
    var lat = position.coords.latitude,
        long = position.coords.longitude,
        coords = lat +', '+ long;

    document.getElementById('google_map').setAttribute('src', 'https://www.google.com/maps/embed?q='+ coords +'&z=60&pb=!1m18!1m12!1m3!1d4042248.3456219495!2d-87.0533435482772!3d8.351567512848574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f92e56221acc925%3A0x6254f72535819a2b!2sCosta+Rica!5e0!3m2!1ses-419!2scr!4v1533241889667');

}

document.getElementById('get_location').onclick = function(){
    navigator.geolocation.getCurrentPosition(c)
    return false;
}