export const setSelectedMod = (themeMode) => {
    return {
        type: 'SET_THEME_MODE',
        payload: themeMode,
    };
};

export const setThemeColor = (theme) => {
    return {
      type: 'SET_THEME_COLOR',
      payload: theme,
    };
};

export const setBorderStroke = (stoke) => {
    return {
      type: 'SET_BORDER_STROKE',
      payload: stoke,
    };
};

export const setBodyGradient = (gradientColor) => {
    return {
      type: 'SET_BODY_GRADIENT',
      payload: gradientColor,
    };
};

export const setBoxLayout = (boxLayout) => {
    return {
      type: 'SET_BOX_LAYOUT',
      payload: boxLayout,
    };
};

export const setMonoChrome = (monochrome) => {
    return {
        type: 'SET_MONOCHROME',
        payload: monochrome,
    };
};

export const setBorderRadius = (borderRadius) => {
    return {
        type: 'SET_BORDER_RADIUS',
        payload: borderRadius,
    };
};

export const setIconColor = (iconColor) => {
    return {
        type: 'SET_ICON_COLOR',
        payload: iconColor,
    };
};