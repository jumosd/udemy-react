import { useRef, useState, useCallback } from 'react';

import Places from './components/Places.jsx';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import AvailablePlaces from './components/AvailablePlaces.jsx';
import { fetchingUserPlaces, updateUserPlaces } from './http.js';
import Error from './components/Error.jsx';
import { useEffect } from 'react';


function App() {
  const selectedPlace = useRef();
  const [userPlaces, setUserPlaces] = useState([]);
  const [isFetchingData, setIsFetchingData] = useState(false)
  const [error, setError] = useState()


  const [errorUpdatingPlaces, setErrorUpdatingPlaces] = useState()
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      setIsFetchingData(true)
      try {
        const userPlaces = await fetchingUserPlaces()
        setUserPlaces(userPlaces)
      }
      catch (error) {
        setError({ message: error.message || '사용자 장소를 가져오는데 실패했어요' })
      }
      setIsFetchingData(false)
    }
    fetchUserData()
  }, [])

  function handleStartRemovePlace(place) {
    setModalIsOpen(true);
    selectedPlace.current = place;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

  async function handleSelectPlace(selectedPlace) {
    setUserPlaces((prevPickedPlaces) => {
      if (!prevPickedPlaces) {
        prevPickedPlaces = [];
      }
      if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
        return prevPickedPlaces;
      }
      return [selectedPlace, ...prevPickedPlaces];
    })
    try {
      await updateUserPlaces([selectedPlace, ...userPlaces])
    }
    catch (error) {
      setUserPlaces(userPlaces)
      setErrorUpdatingPlaces({
        message: error.message ||
          '장소 수정에 실패했습니다'
      })
    }
  }

  const handleRemovePlace = useCallback(async function handleRemovePlace() {
    setUserPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current.id)
    );
    try {
      await updateUserPlaces(
        userPlaces.filter(place => place.id !== selectedPlace.current.id)
      )
    } catch (error) {
      setUserPlaces(userPlaces)
      setErrorUpdatingPlaces({
        message: error.message || '장소 삭제가 안됬어요'
      })
    }

    setModalIsOpen(false);
  }, []);

  function errorHandler() {
    setErrorUpdatingPlaces(null)
  }

  return (
    <>

      <Modal open={errorUpdatingPlaces} onClose={errorHandler}>
        {errorUpdatingPlaces &&
          <Error
            title="에러가 발생했어요"
            message={errorUpdatingPlaces.message}
            onConfirm={errorHandler}
          />
        }
      </Modal>
      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
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
        {error && <Error title='에러입니다!' message={error.message}></Error>}
        {!error &&
          <Places
            title="I'd like to visit ..."
            fallbackText="Select the places you would like to visit below."
            isLoading={isFetchingData}
            loadingText='잠시만기다려주세요'
            places={userPlaces}
            onSelectPlace={handleStartRemovePlace}
          />
        }

        <AvailablePlaces onSelectPlace={handleSelectPlace} />
      </main>
    </>
  );
}

export default App;
