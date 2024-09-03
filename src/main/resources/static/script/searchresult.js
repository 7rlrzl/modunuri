document.addEventListener('DOMContentLoaded', function() {
    // Initialize the Kakao Map
    var mapContainer = document.getElementById('map');
    var mapOption = {
        center: new kakao.maps.LatLng(37.5665, 126.9780), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

    var map = new kakao.maps.Map(mapContainer, mapOption);

    // 장소 마커 표시
    var markerPosition  = new kakao.maps.LatLng(37.5665, 126.9780);
    var marker = new kakao.maps.Marker({
        position: markerPosition
    });

    marker.setMap(map);
});
