import { createTheme, IPartialTheme, ITheme } from "office-ui-fabric-react/lib/Styling";
import { teamsLightTheme, teamsDarkTheme, teamsHighContrastTheme, Theme as Fluent9Theme } from '@fluentui/react-theme';

// https://fluentuipr.z22.web.core.windows.net/heads/master/public-docsite-v9/storybook/index.html?path=/docs/concepts-upgrading-from-v8-color-mapping--page
export const getThemeFromFluent9Theme = (type: "default" | "dark" | "contrast"): ITheme => {
    let fluent9Theme: Fluent9Theme;
    let fluent7Theme: ITheme;

    switch (type) {
        case "default": fluent9Theme = teamsLightTheme; break;
        case "dark": fluent9Theme = teamsDarkTheme; break;
        case "contrast": fluent9Theme = teamsHighContrastTheme; break;
        default: fluent9Theme = teamsLightTheme; break;
    }

    let partialTheme: IPartialTheme = {
        palette: {
            black: fluent9Theme.colorNeutralForeground1,
            neutralDark: fluent9Theme.colorNeutralForeground1,
            neutralPrimary: fluent9Theme.colorNeutralForeground1,
            neutralPrimaryAlt: fluent9Theme.colorNeutralForeground1,
            neutralSecondary: fluent9Theme.colorNeutralForeground2,
            neutralSecondaryAlt: fluent9Theme.colorNeutralForeground2,
            neutralTertiary: fluent9Theme.colorNeutralForegroundDisabled,
            neutralTertiaryAlt: fluent9Theme.colorNeutralForegroundDisabled,
            neutralQuaternary: fluent9Theme.colorNeutralForegroundDisabled,
            neutralQuaternaryAlt: fluent9Theme.colorNeutralBackground1Selected,
            neutralLight: fluent9Theme.colorNeutralBackground1Pressed,
            neutralLighter: fluent9Theme.colorNeutralBackground1Hover,
            neutralLighterAlt: fluent9Theme.colorNeutralBackground2,
            accent: fluent9Theme.colorBrandBackground,
            white: fluent9Theme.colorNeutralForegroundOnBrand,

            themeDarker: fluent9Theme.colorBrandForegroundLink,
            themeDark: fluent9Theme.colorBrandBackgroundPressed,
            themeDarkAlt: fluent9Theme.colorBrandBackgroundHover,
            themePrimary: fluent9Theme.colorBrandBackground,
            themeSecondary: fluent9Theme.colorBrandBackgroundHover,
            themeTertiary: fluent9Theme.colorBrandBackgroundPressed,
            themeLight: fluent9Theme.colorBrandBackgroundInvertedSelected,
            themeLighter: fluent9Theme.colorBrandBackgroundInvertedSelected,
            themeLighterAlt: fluent9Theme.colorBrandBackgroundInvertedSelected,

            yellowDark: "#d39300",
            yellow: "#fde300",
            yellowLight: "#fef7b2",
            orange: "#f7630c",
            orangeLight: "#f98845",
            orangeLighter: "#fdcfb4",
            redDark: "#750b1c",
            red: "#d13438",
            magentaDark: "#6b0043",
            magenta: "#bf0077",
            magentaLight: "#d957a8",
            purpleDark: "#401b6c",
            purple: "#5c2e91",
            purpleLight: "#c6b1de",
            blueDark: "#003966",
            blueMid: "#004e8c",
            blue: "#0078d4",
            blueLight: "#3a96dd",
            tealDark: "#006666",
            teal: "#038387",
            tealLight: "#00b7c3",
            greenDark: "#0b6a0b",
            green: "#107c10",
            greenLight: "#13a10e",
        },
        semanticColors: {
            accentButtonBackground: fluent9Theme.colorBrandBackground,
            accentButtonText: fluent9Theme.colorNeutralForegroundOnBrand,
            actionLink: fluent9Theme.colorNeutralForeground1,
            actionLinkHovered: fluent9Theme.colorNeutralForeground1Hover,
            bodyBackground: fluent9Theme.colorNeutralBackground1,
            bodyBackgroundChecked: fluent9Theme.colorNeutralBackground1Selected,
            bodyBackgroundHovered: fluent9Theme.colorNeutralBackground1Hover,
            bodyDivider: fluent9Theme.colorNeutralStroke2,
            bodyFrameBackground: fluent9Theme.colorNeutralBackground1,
            bodyFrameDivider: fluent9Theme.colorNeutralStroke2,
            bodyStandoutBackground: fluent9Theme.colorNeutralBackground2,
            bodySubtext: fluent9Theme.colorNeutralForeground2,
            bodyText: fluent9Theme.colorNeutralForeground1,
            bodyTextChecked: fluent9Theme.colorNeutralForeground1Selected,
            buttonBackground: fluent9Theme.colorNeutralBackground1,
            buttonBackgroundChecked: fluent9Theme.colorNeutralBackground1Selected,
            buttonBackgroundCheckedHovered: fluent9Theme.colorNeutralBackground1Hover,
            buttonBackgroundDisabled: fluent9Theme.colorNeutralBackgroundDisabled,
            buttonBackgroundHovered: fluent9Theme.colorNeutralBackground1Hover,
            buttonBackgroundPressed: fluent9Theme.colorNeutralBackground1Pressed,
            buttonBorder: fluent9Theme.colorNeutralStroke1,
            buttonBorderDisabled: fluent9Theme.colorNeutralStrokeDisabled,
            buttonText: fluent9Theme.colorNeutralForeground1,
            buttonTextChecked: fluent9Theme.colorNeutralForeground1,
            buttonTextCheckedHovered: fluent9Theme.colorNeutralForeground1,
            buttonTextDisabled: fluent9Theme.colorNeutralForegroundDisabled,
            buttonTextHovered: fluent9Theme.colorNeutralForeground1,
            buttonTextPressed: fluent9Theme.colorNeutralForeground1,
            cardStandoutBackground: fluent9Theme.colorNeutralBackground1,
            defaultStateBackground: fluent9Theme.colorNeutralBackground2,
            disabledBackground: fluent9Theme.colorNeutralBackgroundDisabled,
            disabledBodySubtext: fluent9Theme.colorNeutralForegroundDisabled,
            disabledBodyText: fluent9Theme.colorNeutralForegroundDisabled,
            disabledBorder: fluent9Theme.colorNeutralStrokeDisabled,
            disabledSubtext: fluent9Theme.colorNeutralForegroundDisabled,
            disabledText: fluent9Theme.colorNeutralForegroundDisabled,
            focusBorder: fluent9Theme.colorStrokeFocus2,
            inputBackground: fluent9Theme.colorNeutralBackground1,
            inputBackgroundChecked: fluent9Theme.colorCompoundBrandBackground,
            inputBackgroundCheckedHovered: fluent9Theme.colorCompoundBrandBackgroundHover,
            inputBorder: fluent9Theme.colorNeutralStrokeAccessible,
            inputBorderHovered: fluent9Theme.colorNeutralStrokeAccessibleHover,
            inputFocusBorderAlt: fluent9Theme.colorCompoundBrandStroke,
            inputForegroundChecked: fluent9Theme.colorNeutralForegroundOnBrand,
            inputIcon: fluent9Theme.colorNeutralForeground3,
            inputIconDisabled: fluent9Theme.colorNeutralForegroundDisabled,
            inputIconHovered: fluent9Theme.colorNeutralForeground3,
            inputPlaceholderBackgroundChecked: fluent9Theme.colorBrandBackgroundInvertedSelected,
            inputPlaceholderText: fluent9Theme.colorNeutralForeground4,
            inputText: fluent9Theme.colorNeutralForeground1,
            inputTextHovered: fluent9Theme.colorNeutralForeground1Hover,
            link: fluent9Theme.colorBrandForegroundLink,
            linkHovered: fluent9Theme.colorBrandForegroundLinkHover,
            listBackground: fluent9Theme.colorNeutralBackground1,
            listHeaderBackgroundHovered: fluent9Theme.colorNeutralBackground1Hover,
            listHeaderBackgroundPressed: fluent9Theme.colorNeutralBackground1Pressed,
            listItemBackgroundChecked: fluent9Theme.colorNeutralBackground1Selected,
            listItemBackgroundCheckedHovered: fluent9Theme.colorNeutralBackground1Selected,
            listItemBackgroundHovered: fluent9Theme.colorNeutralBackground1Hover,
            listText: fluent9Theme.colorNeutralForeground1,
            listTextColor: fluent9Theme.colorNeutralForeground1,
            menuBackground: fluent9Theme.colorNeutralBackground1,
            menuDivider: fluent9Theme.colorNeutralStroke2,
            menuHeader: fluent9Theme.colorNeutralForeground3,
            menuIcon: fluent9Theme.colorNeutralForeground1,
            menuItemBackgroundChecked: fluent9Theme.colorNeutralBackground1,
            menuItemBackgroundHovered: fluent9Theme.colorNeutralBackground1Hover,
            menuItemBackgroundPressed: fluent9Theme.colorNeutralBackground1Hover,
            menuItemText: fluent9Theme.colorNeutralForeground1,
            menuItemTextHovered: fluent9Theme.colorNeutralForeground2Hover,
            messageLink: fluent9Theme.colorBrandForegroundLink,
            messageLinkHovered: fluent9Theme.colorBrandForegroundLinkHover,
            messageText: fluent9Theme.colorNeutralForeground1,
            primaryButtonBackground: fluent9Theme.colorBrandBackground,
            primaryButtonBackgroundDisabled: fluent9Theme.colorNeutralBackgroundDisabled,
            primaryButtonBackgroundHovered: fluent9Theme.colorBrandBackgroundHover,
            primaryButtonBackgroundPressed: fluent9Theme.colorBrandBackgroundPressed,
            primaryButtonBorder: fluent9Theme.colorTransparentStroke,
            primaryButtonText: fluent9Theme.colorNeutralForegroundOnBrand,
            primaryButtonTextDisabled: fluent9Theme.colorNeutralForegroundDisabled,
            primaryButtonTextHovered: fluent9Theme.colorNeutralForegroundOnBrand,
            primaryButtonTextPressed: fluent9Theme.colorNeutralForegroundOnBrand
        }
    };

    fluent7Theme = createTheme(partialTheme);

    return fluent7Theme;
};