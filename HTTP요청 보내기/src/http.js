export const fetchingAvailablePlaces = async () => {
    // url에 get요청으로 장소를 가져 옵니다
    const response = await fetch("http://localhost:3000/places")
    // 불러온데이터를 json 형식으로 변환합니다
    const resData = await response.json()
    // 응답이 ok가아니면 에러를 만듭니다
    if (!response.ok) {
        throw new Error("사진을 가져오지못했어요")
    }
    return resData.places
}