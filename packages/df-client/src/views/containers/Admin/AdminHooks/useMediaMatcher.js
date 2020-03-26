const React = 'react';

const ScreenMediaMatcher = MobileBreakpoint => {
  const mediaMatcher = matchMedia(`(max-width: ${MobileBreakpoint}px)`);
  React.useEffect(() => {
    if (mediaMatcher.matches) setOpened(false);
    mediaMatcher.addListener(match => {
      setTimeout(() => {
        if (match.matches) setOpened(false);
        else setOpened(true);
      }, 300);
    });

    const unlisten = history.listen(() => {
      if (mediaMatcher.matches) setOpened(false);
      document.querySelector('#root > div > main').scrollTop = 0;
    });

    return () => {
      unlisten();
      mediaMatcher.removeListener(match => {
        setTimeout(() => {
          if (match.matches) setOpened(false);
          else setOpened(true);
        }, 300);
      });
    };
  }, []);
};

export default ScreenMediaMatcher;
// TODO convert to a hook

// const resizeDispatch = () => {
//   if (typeof Event === 'function') {
//     window.dispatchEvent(new Event('resize'));
//   } else {
//     const evt = window.document.createEvent('UIEvents');
//     evt.initUIEvent('resize', true, false, window, 0);
//     window.dispatchEvent(evt);
//   }
// };
// resizeDispatch();
