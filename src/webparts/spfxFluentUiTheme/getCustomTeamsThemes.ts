import { ITheme, createTheme } from "office-ui-fabric-react/lib/Styling";
import { IReadonlyTheme } from '@microsoft/sp-component-base';

export const getFromPartialTheme = (partialTheme: IReadonlyTheme | undefined): ITheme => {
    const theme = createTheme({
        palette: partialTheme.palette,
        isInverted: false
    });

    return theme;
};

export const getLightTheme = (): ITheme => {
    const theme = createTheme({
        palette: {
            themePrimary: "#6264A7",
            themeLighterAlt: "#f7f7fb",
            themeLighter: "#e1e1f1",
            themeLight: "#c8c9e4",
            themeTertiary: "#989ac9",
            themeSecondary: "#7173b0",
            themeDarkAlt: "#585a95",
            themeDark: "#4a4c7e",
            themeDarker: "#37385d",
            neutralLighterAlt: "#eeeeee",
            neutralLighter: "#eaeaea",
            neutralLight: "#e1e1e1",
            neutralQuaternaryAlt: "#d1d1d1",
            neutralQuaternary: "#c8c8c8",
            neutralTertiaryAlt: "#c0c0c0",
            neutralTertiary: "#acacac",
            neutralSecondary: "#919191",
            neutralPrimaryAlt: "#767676",
            neutralPrimary: "#0b0b0b",
            neutralDark: "#404040",
            black: "#252525",
            white: "#F5F5F5"
        },
        isInverted: false
    });

    return theme;
};

export const getDarkTheme = (): ITheme => {
    const theme = createTheme({
        palette: {
            themePrimary: "#7f85f5",
            themeLighterAlt: "#05050a",
            themeLighter: "#141527",
            themeLight: "#262849",
            themeTertiary: "#4c5093",
            themeSecondary: "#7075d7",
            themeDarkAlt: "#8c91f6",
            themeDark: "#9da2f7",
            themeDarker: "#b6baf9",
            neutralLighterAlt: "#282828",
            neutralLighter: "#313131",
            neutralLight: "#3f3f3f",
            neutralQuaternaryAlt: "#484848",
            neutralQuaternary: "#4f4f4f",
            neutralTertiaryAlt: "#6d6d6d",
            neutralTertiary: "#c8c8c8",
            neutralSecondary: "#d0d0d0",
            neutralPrimaryAlt: "#dadada",
            neutralPrimary: "#ffff",
            neutralDark: "#f4f4f4",
            black: "#ffffff",
            white: "#1f1f1f"
        },
        isInverted: true
    });

    return theme;
};

export const getHCTheme = (): ITheme => {
    const theme = createTheme({
        palette: {
            themePrimary: "#00ebff",
            themeLighterAlt: "#0a0a00",
            themeLighter: "#292900",
            themeLight: "#4d4d00",
            themeTertiary: "#999900",
            themeSecondary: "#e0e000",
            themeDarkAlt: "#ffff19",
            themeDark: "#ffff3d",
            themeDarker: "#ffff70",
            neutralLighterAlt: "#0b0b0b",
            neutralLighter: "#151515",
            neutralLight: "#252525",
            neutralQuaternaryAlt: "#2f2f2f",
            neutralQuaternary: "#373737",
            neutralTertiaryAlt: "#595959",
            neutralTertiary: "#fafafa",
            neutralSecondary: "#fbfbfb",
            neutralPrimaryAlt: "#fcfcfc",
            neutralPrimary: "#f8f8f8",
            neutralDark: "#fdfdfd",
            black: "#fefefe",
            white: "#000000"
        },
        isInverted: true
    });

    theme.semanticColors.buttonBackgroundDisabled = "#3ff23f";
    theme.semanticColors.buttonTextDisabled = "#000000";
    theme.semanticColors.primaryButtonBackgroundDisabled = "#3ff23f";
    theme.semanticColors.primaryButtonTextDisabled = "#000000";

    theme.semanticColors.link = "#ffff00";
    theme.semanticColors.linkHovered = "#ffff00";

    return theme;
};