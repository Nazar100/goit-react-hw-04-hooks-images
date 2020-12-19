import React, { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import Searchbar from './components/Searchbar/Searchbar';
import requestApi from './services/searchPhotos';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';

function App() {
  const [photos, setPhotos] = useState([]);
  const [crntPage, setCrntPage] = useState(1);
  const [query, setQuery] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [largeUrl, setLargeUrl] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchPhotos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  async function fetchPhotos() {
    if (!query) return;

    const options = { query, crntPage };

    setIsLoading(true);

    try {
      const newPhotos = await requestApi(options);
      setPhotos(prevState => {
        return [...prevState, ...newPhotos];
      });
      setCrntPage(prevState => {
        return prevState + 1;
      });
    } catch {
      setError(error);
    } finally {
      setIsLoading(false);
      scrollDown();
    }
  }

  const onChangeQuery = query => {
    setQuery(prevState => {
      if (prevState !== query) {
        setPhotos([]);
      }
      return query;
    });

    setCrntPage(1);

    setError(null);
  };

  const toggleModal = () => {
    setShowModal(prevState => {
      return !prevState;
    });
  };

  const openLargePhoto = ({ target }) => {
    const url = target.dataset.url;

    setLargeUrl(url);
  };

  function scrollDown() {
    if (crntPage > 1) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  const shouldRenderLoadMoreButton = photos.length > 0 && !isLoading;

  return (
    <>
      <Searchbar onSubmit={onChangeQuery} />
      <ImageGallery
        photos={photos}
        openModal={toggleModal}
        openLargePhoto={openLargePhoto}
      />
      {isLoading && (
        <Loader
          className="Loader"
          type="Audio"
          color="#00BFFF"
          height={100}
          width={100}
        />
      )}
      {error && (
        <p className="error">Whoops, something went wrong: {error.message}</p>
      )}
      {shouldRenderLoadMoreButton && <Button onClick={fetchPhotos} />}
      {showModal && <Modal largeUrl={largeUrl} onClose={toggleModal} />}
      <ToastContainer />
    </>
  );
}

export default App;
