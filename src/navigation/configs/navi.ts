import * as Types from "./types";

export const initRouteNameNotAuth = "Home";
export const initRouteNameAuth = "Article";

export interface TabBarIcon {
  focused: boolean;
  color: string;
  size: number;
}

export const colors: Types.ColorsType = {
  active: "#5B9EE1",
  inactive: "gray",
};

export const tabConfigs: Types.TabConfigsType = {
  iconActiveTintColor: colors.active,
  iconInactiveTintColor: colors.inactive,
  tabBarActiveTintColor: colors.active,
  tabBarInactiveTintColor: colors.inactive,
  tabBarLabelStyle: { fontSize: 12, textTransform: "uppercase" },
  tabBarBadgeStyle: { fontSize: 10, backgroundColor: "pink" },
};
