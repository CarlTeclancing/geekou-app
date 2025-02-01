/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */
import { Dimensions } from "react-native";
const {width, height } = Dimensions.get('window');

export const Colors = {
  //base colors
  primary: '#0065FF', //blue
  background: '#FFFFFF',
  btnColor: '#4893FF',
  hColor: '#101828',
  tColor: '#475467',
  success: '#027A48',
  successBg: '#ECFDF3',
  danger: '#F04438',
  dangerBg: '#'
}

export const Sizes = {
  //global sizes
  base:8,
  font:14,
  radius:6,
  padding:10,
  padding2:12,



  //fonst sizes
  largTitle: 44,
  h1:30,
  h2:24,
  h3:20,
  body:16,
  formText:14,
  tableText:12,


  //app dimensions

  width, 
  height
}


const appTheme = {Colors, Sizes};

export default appTheme;