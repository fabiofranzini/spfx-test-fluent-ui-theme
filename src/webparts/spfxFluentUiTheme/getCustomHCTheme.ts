import { ITheme, createTheme } from "office-ui-fabric-react/lib/Styling";

export const getCustomHCTheme = (): ITheme => {

    const hcTheme = createTheme({
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

    hcTheme.semanticColors.buttonBackgroundDisabled = "#3ff23f";
    hcTheme.semanticColors.buttonTextDisabled = "#000000";
    hcTheme.semanticColors.primaryButtonBackgroundDisabled = "#3ff23f";
    hcTheme.semanticColors.primaryButtonTextDisabled = "#000000";

    hcTheme.semanticColors.link = "#ffff00";
    hcTheme.semanticColors.linkHovered = "#ffff00";

    return hcTheme;
};