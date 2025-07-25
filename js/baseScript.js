document.addEventListener('scroll', function () {
    const inviteBox = document.querySelector('.inviteExplainBox');
    const rect = inviteBox.getBoundingClientRect();
    const windowHeight = window.innerHeight;
  
    const boxHeight = rect.height;
    const visibleTop = Math.max(0, windowHeight - rect.top); 
    const visibleHeight = Math.min(boxHeight, visibleTop); 
    let visibleRatio = visibleHeight / boxHeight; 
  
    if (visibleRatio < 0) visibleRatio = 0;
    if (visibleRatio > 1) visibleRatio = 1;
  
    let progress = visibleRatio / 0.7; // 0% 노출일 때 0, n0% 노출일 때 1
    if (progress > 1) progress = 1;    // 50% 이상이면 1로 고정
  
    const startColor = [0, 53, 255]; 
    const endColor   = [255, 255, 255];
  
    const currentColor = startColor.map((start, i) => {
      return Math.round(start + (endColor[i] - start) * progress);
    });
  
    document.body.style.backgroundColor = `rgb(${currentColor[0]}, ${currentColor[1]}, ${currentColor[2]})`;
});


window.addEventListener('load', function() {
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667), //여기부분이 좌표임임
      level: 3
    };
  
    // 지도 생성
    var map = new kakao.maps.Map(container, options);
  
    // 마커 생성
    var marker = new kakao.maps.Marker({
      position: new kakao.maps.LatLng(33.450701, 126.570667)
    });
    marker.setMap(map);
});
  