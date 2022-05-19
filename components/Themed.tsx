/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import { 
  Text as DefaultText, 
  View as DefaultView, 
  ScrollView as DefaultScrollView, 
  Button as DefaultButton,
} from 'react-native';
import CustomButton from './CustomButton';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];
export type ScrollViewProps = ThemeProps & DefaultScrollView['props'];
export type ButtonProps = ThemeProps & DefaultButton['props'];
export type ModifiedButtonProps = ThemeProps & CustomButton['props'];

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function ScrollView(props: ScrollViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <DefaultScrollView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function Button(props: ButtonProps) {
  const { color, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'secondary');

  return <DefaultButton color={ backgroundColor } {...otherProps} />;
}

export function ModifiedButton(props: ModifiedButtonProps) {
  const { active, textStyles, buttonStyles, lightColor, darkColor, ...otherProps } = props;
  const txtStyle = {...textStyles, color: useThemeColor({ light: lightColor, dark: darkColor }, 'text')}
  const btnStyle = {
    ...buttonStyles,
    backgroundColor: useThemeColor({ light: lightColor, dark: darkColor }, 
      active ? 'secondary' : 'primary'),
    borderColor: useThemeColor({ light: lightColor, dark: darkColor }, 
      active ? 'secondary' : 'primary'),
  }

  return <CustomButton active={active} textStyles={txtStyle} buttonStyles={btnStyle} {...otherProps} />;
}
