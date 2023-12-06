import React from 'react';
import { useParams } from 'react-router-dom';
import { mountains } from 'db/data';
import { StyledMountDetails } from './MountDetails.styled';

const MountDetails = () => {
  const { mountainName } = useParams();
  const mountainData = mountains.find(
    mountain => mountainName === mountain.mountainName
  );
  console.log(mountainData);
  return (
    <StyledMountDetails $backgroundimg={mountainData.thumbs[0]}>
      {mountainData !== undefined && (
        <div>
          <div className="innerContent">
            <img
              className="titleImg"
              src={mountainData.thumbs[0]}
              alt={mountainData.mountainName}
            />
            <div className="discription">
              <h1>{mountainName}</h1>
              <p>
                Lorem ipsum dolor sanimi, quo magnam expedita perferendis
                assumenda.
              </p>
            </div>
          </div>
          <div>
            {mountainData.gallery?.map(picture => (
              <img src={picture} alt={mountainName} />
            ))}
            {/* <Gallery /> */}
          </div>
        </div>
      )}
    </StyledMountDetails>
  );
};

export default MountDetails;
