import React, { useEffect } from 'react';
import ReactImageGallery from 'react-image-gallery';
import { useParams } from 'react-router-dom';
import { StyledMountDetails } from './styled';
import { mountains } from 'db/data';

const MountDetails = () => {
  const { mountainName } = useParams();
  const mountainData = mountains.find(
    mountain => mountainName === mountain.mountainName
  );
  console.log('mountainData: ', mountainData);
  const galleryImages = mountainData.gallery?.map(image => ({
    original: image,
    thumbnail: image,
  }));
  console.log('galleryImages: ', galleryImages);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div>
      <StyledMountDetails $backgroundimg={mountainData.thumbs[0]}>
        {mountainData !== undefined && (
          <div className="gallery">
            <div className="innerContent">
              <div className="discription">
                <h1 className="title">{mountainName}</h1>
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
            {galleryImages.map(i => (
              <img width="250" src={i.original} alt={'Imagecvccb'} />
            ))}
          </div>
        )}
      </StyledMountDetails>
    </div>
  );
};

export default MountDetails;
