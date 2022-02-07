import React from 'react';
import * as AntDesignIcons from 'react-icons/ai';
import * as FontAwesome from 'react-icons/fa';
import * as MaterialDesignIcons from 'react-icons/md';
import * as DevIcons from 'react-icons/di';
import * as FeatherIcons from 'react-icons/fi';
import * as IonIcons from 'react-icons/io5';
import * as WeatherIcons from 'react-icons/wi';

import './Icon.css';

export interface IIconProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  iconSet?: 'FontAwesome' | 'MaterialDesignIcons' | 'AntDesignIcons' | 'DevIcons' | 'FeatherIcons' | 'IonIcons' | 'WeatherIcons';
  iconName: string;
  size?: number;
}

export const Icon: React.FunctionComponent<IIconProps> = (props) => {
  const { iconName, size = 32, style, iconSet = 'FontAwesome' } = props;
  let icon: React.CElement<{}, React.Component<{}, any, any>>;
  let _style: React.CSSProperties = style ?? {};

  const ICON_SET_MAP = {
    FontAwesome: FontAwesome,
    MaterialDesignIcons: MaterialDesignIcons,
    AntDesignIcons: AntDesignIcons,
    DevIcons: DevIcons,
    FeatherIcons: FeatherIcons,
    IonIcons: IonIcons,
    WeatherIcons: WeatherIcons
  };

  if (!(iconName in ICON_SET_MAP[iconSet])) {
    return (
      <div className="ui-icon" style={{ fontSize: size, ..._style }}>
        {React.createElement((MaterialDesignIcons as any)['MdDisabledVisible'])}
      </div>
    );
  }

  switch (iconSet) {
    case 'MaterialDesignIcons':
      icon = React.createElement((MaterialDesignIcons as any)[iconName]);
      break;
    case 'AntDesignIcons':
      icon = React.createElement((AntDesignIcons as any)[iconName]);
      break;
    case 'DevIcons':
      icon = React.createElement((DevIcons as any)[iconName]);
      break;
    case 'FeatherIcons':
      icon = React.createElement((FeatherIcons as any)[iconName]);
      break;
    case 'IonIcons':
      icon = React.createElement((IonIcons as any)[iconName]);
      break;
    case 'WeatherIcons':
      icon = React.createElement((WeatherIcons as any)[iconName]);
      break;
    default:
      icon = React.createElement((FontAwesome as any)[iconName]);
      break;
  }

  return (
    <div className="ui-icon" style={{ fontSize: size, ..._style }}>
      {icon}
    </div>
  );
};
