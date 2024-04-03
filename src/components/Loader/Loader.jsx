import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = props => (
  <ContentLoader
    speed={2}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="76" y="1" rx="2" ry="2" width="221" height="16" />
    <rect x="116" y="41" rx="2" ry="2" width="140" height="10" />
    <rect x="68" y="161" rx="2" ry="2" width="256" height="256" />
    <rect x="28" y="100" rx="2" ry="2" width="46" height="46" />
    <rect x="98" y="100" rx="2" ry="2" width="46" height="46" />
    <rect x="165" y="100" rx="2" ry="2" width="46" height="46" />
    <rect x="243" y="100" rx="2" ry="2" width="46" height="46" />
    <rect x="318" y="100" rx="2" ry="2" width="46" height="46" />
    <rect x="70" y="61" rx="2" ry="2" width="228" height="7" />
    <rect x="71" y="78" rx="2" ry="2" width="228" height="7" />
  </ContentLoader>
);

export default MyLoader;
