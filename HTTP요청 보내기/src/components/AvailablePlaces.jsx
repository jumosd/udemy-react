import { useState } from 'react';
import Places from './Places.jsx';
import { useEffect } from 'react';
import Error from './Error.jsx';

import { sortPlacesByDistance } from '../loc.js'

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetchingData, setIsFetchingData] = useState(false)
  const [availablePlaces, setAvailablePlaces] = useState([])
  const [error, setError] = useState()



  //브라우저가 실행된후 바로 사진을 가져옵니다
  useEffect(() => {
    // 비동기 처리를 위한 장소불러오기 함수를 만듬니다
    const fetchPlace = async () => {
      // try, catch 문을 통한 에러처리를 함니다
      try {
        // 데이터가져오기 상태를 1로 바꿉니다
        setIsFetchingData(true)
        // url에 get요청으로 장소를 가져 옵니다
        const response = await fetch("http://localhost:3000/places")
        // 불러온데이터를 json 형식으로 변환합니다
        const resData = await response.json()
        // 응답이 ok가아니면 에러를 만듭니다
        if (!response.ok) {
          throw new Error("사진을 가져오지못했어요")
        }

        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(resData.places,
            position.coords.latitude,
            position.coords.longitude
          )

          //json형식으로 만든데이터에 places(장소) 부분을 선택가능한장소로 변환해줍니다.
          setAvailablePlaces(sortedPlaces)
          setIsFetchingData(false)
        })
        //요청자체가 실패하는경우 (네트워크오류, url오류, 등등) 해당 에러를 error상태에 저장합니다.
      } catch (error) {
        setError({
          'message': error.message || "장소를 찾지 못하고있어요"
        })
        setIsFetchingData(false)
      }
      // 데이터가져오기상태를 0으로 바꿉니다.
    }
    fetchPlace()
  }, [])

  console.log(error)
  if (error) {
    return <Error title="에러가 발생했어요" message={error.message} />
  }

  return (
    <Places
      title="Available Places"
      isLoading={isFetchingData}
      loadingText="데이터 가져오는중"
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
