export const fetchingAvailablePlaces = async () => {
    // url에 get요청으로 장소를 가져 옵니다
    const response = await fetch("http://localhost:3000/places")
    // 불러온데이터를 json 형식으로 변환합니다
    const resData = await response.json()
    // 응답이 ok가아니면 에러를 만듭니다
    if (!response.ok) {
        throw new Error("장소을 가져오지 못했어요")
    }
    return resData.places
}

export const fetchingUserPlaces = async () => {
    // url에 get요청으로 유저 장소를 가져 옵니다
    const response = await fetch("http://localhost:3000/user-places")
    // 불러온데이터를 json 형식으로 변환합니다
    const resData = await response.json()
    // 응답이 ok가아니면 에러를 만듭니다
    if (!response.ok) {
        throw new Error("유저 장소를 가져오지 못했어요")
    }
    return resData.places
}

export const updateUserPlaces = async (places) => {
    const response = await fetch('http://localhost:3000/user-places', {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ places })
    })
    const resData = await response.json()
    if (!response.ok) {
        throw new Error("사용자 데이터 업데이트에 실패했어요")
    }
    return resData.message

}
