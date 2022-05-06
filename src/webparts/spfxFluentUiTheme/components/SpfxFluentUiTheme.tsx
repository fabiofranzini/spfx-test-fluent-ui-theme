import { IReadonlyTheme } from '@microsoft/sp-component-base';
import { getTheme, initializeIcons } from 'office-ui-fabric-react';
import * as React from 'react';
import { getDarkTheme, getFromPartialTheme, getHCTheme, getLightTheme } from '../getCustomTeamsThemes';
import { FluentComponents } from './FluentComponents';

export interface ISpfxFluentUiThemeProps {
  currentTheme: IReadonlyTheme | undefined;
}

export default class SpfxFluentUiTheme extends React.Component<ISpfxFluentUiThemeProps, {}> {
  public render(): React.ReactElement<ISpfxFluentUiThemeProps> {
    const {
      currentTheme
    } = this.props;

    initializeIcons();

    return (
      <div style={{ margin: "10px" }}>
        <FluentComponents theme={getFromPartialTheme(currentTheme)} />
        <FluentComponents theme={getLightTheme()} />
        <FluentComponents theme={getDarkTheme()} />
        <FluentComponents theme={getHCTheme()} />
      </div>
    );
  }
}