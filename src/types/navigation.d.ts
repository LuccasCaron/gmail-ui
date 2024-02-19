import { DrawerNavigationOptions } from "@react-navigation/drawer";
import { iconNameProps } from "@/components/drawer-button";

interface CustomOptions extends DrawerNavigationOptions {
  iconName: iconNameProps;
  isDivider?: boolean;
  notifications?: number;
  sectionTitle?: string;
}
