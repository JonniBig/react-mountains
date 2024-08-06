import React, { useEffect, useState } from 'react';
import ReactImageGallery from 'react-image-gallery';
import { useParams } from 'react-router-dom';
import { StyledMountDetails } from '../MountDetails/MountDetails.styled';
import MyLoader from 'components/Loader/Loader';
import { ReactComponent as UserIcon } from 'assets/images/user.svg';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from 'auth/base';

const GuestRouteDetails = () => {
  const { mountainName } = useParams();

  const [state, setState] = useState('loading');
  const [mountainData, setMountainData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setState('loading');
      const q = query(
        collection(db, 'guestRoutes'),
        where('routeName', '==', mountainName)
      );
      const querySnapshot = await getDocs(q);
      const guestRoute = querySnapshot.docs[0].data();
      console.log('guestRoutes: ', guestRoute);
      setState('loaded');
      setMountainData(guestRoute);
    };
    fetchData();
  }, [mountainName]);

  const galleryImages = mountainData?.gallery?.map(imageObj => ({
    original: imageObj,
    thumbnail: imageObj,
  }));
  const mountainBg = mountainData?.backgroundImg;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div>
      <StyledMountDetails $backgroundimg={mountainBg}>
        <div className="gallery">
          {state === 'loading' && <MyLoader />}
          {state === 'loaded' && (
            <>
              <div className="innerContent">
                <div className="authorWrapper">
                  <UserIcon />
                  <p className="author">
                    Автор: <span className="authorName">John Smith</span>
                  </p>
                  <p className="date">
                    Дата публікації: {mountainData.publicationDate}
                  </p>
                </div>
                <div className="discription">
                  <h1 className="title">{mountainData.routeName}</h1>
                  <p>{mountainData.mainDescription}</p>
                </div>
              </div>
              <div>
                <ReactImageGallery
                  autoPlay={false}
                  showPlayButton={false}
                  slideOnThumbnailOver={true}
                  lazyLoad={true}
                  disableKeyDown={false}
                  slideDuration={1000}
                  thumbnailPosition="top"
                  items={galleryImages}
                />
              </div>
            </>
          )}
        </div>
      </StyledMountDetails>
    </div>
  );
};

export default GuestRouteDetails;
