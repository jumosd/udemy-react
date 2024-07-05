// 주어진 값(degree)을 라디안(radian)으로 변환하는 함수
function toRad(value) {
  return (value * Math.PI) / 180;
}

// 두 지점 간의 거리를 계산하는 함수
// Haversine formula를 사용하여 두 좌표 간의 거리를 구합니다.
function calculateDistance(lat1, lng1, lat2, lng2) {
  const R = 6371; // 지구의 반지름 (단위: km)
  const dLat = toRad(lat2 - lat1); // 위도 차이를 라디안으로 변환
  const dLon = toRad(lng2 - lng1); // 경도 차이를 라디안으로 변환
  const l1 = toRad(lat1); // 시작 지점의 위도를 라디안으로 변환
  const l2 = toRad(lat2); // 도착 지점의 위도를 라디안으로 변환

  // Haversine formula 계산
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(l1) * Math.cos(l2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c; // 두 지점 간의 거리 (단위: km)
  return d;
}

// 주어진 위치로부터의 거리에 따라 장소들을 정렬하는 함수
export function sortPlacesByDistance(places, lat, lon) {
  // 원본 배열을 변경하지 않기 위해 배열을 복사
  const sortedPlaces = [...places];

  // 거리 기준으로 배열을 정렬
  sortedPlaces.sort((a, b) => {
    // 각 장소까지의 거리를 계산
    const distanceA = calculateDistance(lat, lon, a.lat, a.lon);
    const distanceB = calculateDistance(lat, lon, b.lat, b.lon);

    // 거리를 비교하여 정렬 순서를 결정
    return distanceA - distanceB;
  });

  // 정렬된 배열을 반환
  return sortedPlaces;
}