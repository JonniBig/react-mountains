import React, { useEffect } from 'react';
import ReactImageGallery from 'react-image-gallery';
import { useParams } from 'react-router-dom';
import { StyledMountDetails } from './styled';
import { usePrismicDocumentByUID } from '@prismicio/react';
import * as prismicH from '@prismicio/helpers';
import MyLoader from 'components/Loader/Loader';

const MountDetails = () => {
  const { mountainName } = useParams();
  const [page, { state }] = usePrismicDocumentByUID(
    'mountain-routes',
    mountainName
  );

  const mountainData = page?.data;

  const galleryImages = mountainData?.gallery?.map(imageObj => ({
    original: prismicH.asImageSrc(imageObj.gallery_img),
    thumbnail: prismicH.asImageSrc(imageObj.gallery_img),
  }));
  const mountainBg = prismicH.asImageSrc(mountainData?.mountain_img);
  const mountainTitle = prismicH.asText(mountainData?.mountain_name);
  const mountainDescription = prismicH.asText(mountainData?.description);

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
                <div className="discription">
                  <h1 className="title">{mountainTitle}</h1>
                  <p>{mountainDescription}</p>
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

export default MountDetails;
