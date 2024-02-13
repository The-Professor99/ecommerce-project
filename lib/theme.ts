'use client';
import { createTheme } from '@mui/material/styles';

// const roboto = Roboto({
//   weight: ['300', '400', '500', '700'],
//   subsets: ['latin'],
//   display: 'swap',
// });

// const rootElement = document.getElementById("__next");
const theme = createTheme({
  // typography: {
  //   fontFamily: roboto.style.fontFamily,
  // },
  // components: {
  //   MuiPopover: {
  //     defaultProps: {
  //       container: rootElement,
  //     },
  //   },
  //   MuiPopper: {
  //     defaultProps: {
  //       container: rootElement,
  //     },
  //   },
  //   MuiDialog: {
  //     defaultProps: {
  //       container: rootElement,
  //     },
  //   },
  //   MuiModal: {
  //     defaultProps: {
  //       container: rootElement,
  //     },
  //   },
  // },
});

export default theme;
