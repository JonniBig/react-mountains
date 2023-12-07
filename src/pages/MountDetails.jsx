import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { mountains } from 'db/data';
import { StyledMountDetails } from './MountDetails.styled';
import ReactImageGallery from 'react-image-gallery';

const MountDetails = () => {
  const { mountainName } = useParams();
  const mountainData = mountains.find(
    mountain => mountainName === mountain.mountainName
  );
  const galleryImages = mountainData.gallery?.map(image => ({
    original: image,
    thumbnail: image,
  }));
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <StyledMountDetails $backgroundimg={mountainData.thumbs[0]}>
      {mountainData !== undefined && (
        <div className="gallery">
          <div className="innerContent">
            {/* <img
              className="titleImg"
              src={mountainData.thumbs[0]}
              alt={mountainData.mountainName}
            /> */}
            <div className="discription">
              <h1>{mountainName}</h1>
              <p>
                Lorem ipsum dolor sanimi, quo magnam expedita perferendis
                assumenda.
              </p>
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
        </div>
      )}
    </StyledMountDetails>
  );
};

export default MountDetails;
