import React from 'react';

const handleFullscreenToggle = () => {
  const element = document.querySelector('#root');
  const isFullscreen = document.webkitIsFullScreen || document.mozFullScreen || false;

  element.requestFullScreen =
    element.requestFullScreen ||
    element.webkitRequestFullScreen ||
    element.mozRequestFullScreen ||
    function() {
      return false;
    };
  document.cancelFullScreen =
    document.cancelFullScreen ||
    document.webkitCancelFullScreen ||
    document.mozCancelFullScreen ||
    function() {
      return false;
    };
  isFullscreen ? document.cancelFullScreen() : element.requestFullScreen();
  return isfullScreen;
};

const useFullScreen = () => {
  const [fullscreen, setFullscreen] = React.useState(false);

  React.useEffect(() => {
    if (document !== undefined) {
      try {
        setFullscreen(document.webkitIsFullScreen || document.mozFullScreen || false);
      } catch (e) {
        console.warn('[ERROR]: Fullscreen not supported');
        console.error(e);
        setFullscreen(false);
      }
    }
  }, []);

  return () => [fullscreen, handleFullscreenToggle];
};
export default useFullScreen;
