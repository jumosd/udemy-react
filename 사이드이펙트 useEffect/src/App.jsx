import { useEffect, useRef, useState } from 'react';

import Places from './components/Places.jsx';
import { AVAILABLE_PLACES } from './data.js';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import { sortPlacesByDistance } from './loc.js'

// 선택했던 장소들 로컬스토리지에서 다시부르는 코드
// useEffect()훅으로하면 불필요함 그냥 APP 컴포넌트 밖으로 빼버려 코드가 읽어질떄한번실행하게하면됨
// 이 코드는 콜백함수나, 비동기적으로 실행된느것이 아닌 코드이기에 이렇게 사용함
const sortedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || []
const sortedPlaces = sortedIds.map((id) => (AVAILABLE_PLACES.find((place) => (place.id === id))))


function App() {
  const modal = useRef();
  const selectedPlace = useRef();
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [pickedPlaces, setPickedPlaces] = useState(sortedPlaces);
  const [availablePlaces, setAvailablePlaces] = useState([])

  //사용자 주소를 얻을때 성공,실패 함수들
  const successPosition = (position) => {
    const sortedPlaces = sortPlacesByDistance(AVAILABLE_PLACES, position.coords.latitude, position.coords.longitude) //장소배열,위도,경도
    setAvailablePlaces(sortedPlaces)

  }
  const errorPosition = (error) => { console.log(error) }
  //사용자 주소를 얻는 코드
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(successPosition, errorPosition)
  }, [])


  function handleStartRemovePlace(id) {
    setModalIsOpen(true)
    selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false)
  }

  function handleSelectPlace(id) {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      return [place, ...prevPickedPlaces];
    });

    const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || []
    // indexOf()메소드는 -1과 같을경우 배열에서 찾을수없음을 의미함
    if (storedIds.indexOf(id) === -1) {
      localStorage.setItem('selectedPlaces', JSON.stringify([id, ...storedIds]))
    }
  }

  function handleRemovePlace() {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );
    setModalIsOpen(false)
    const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || []
    localStorage.setItem('selectedPlaces', JSON.stringify(storedIds.filter((id) => (
      id !== selectedPlace.current))
    ))

  }

  return (
    <>
      <Modal isOpen={modalIsOpen} >
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={'Select the places you would like to visit below.'}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          places={availablePlaces}
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}

export default App;
