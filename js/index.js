function initMap() {
    const loc = { lat: 50.619900, lng: 26.251617 };
    const map = new google.maps.Map(document.querySelector('.map')
    , {
        zoom: 14,
        center: loc
    });
    const marker = new google.maps.Marker({ position: loc, map: map});
}