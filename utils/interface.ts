import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export interface IIProps {
  title: string;
  screen: any;
  color: string;
  requiresPro?: boolean;
  icon?: any;
  vertical?: boolean;
}

export type NavigationProps = {
  Home: undefined;
  Demo: undefined;
  Paywall: undefined;
};

export type NavigationIProps = NativeStackNavigationProp<
  NavigationProps,
  "Home"
>;

export type NavigationIIProps = NativeStackNavigationProp<
  NavigationProps,
  "Demo"
>;
