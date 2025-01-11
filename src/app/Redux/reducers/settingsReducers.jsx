const initialState = {
    themeMode: '',
    themeColor: '',
    borderStroke: '',
    boxLayout: '',
    borderRadius: '',
    iconColor: '',
    gradientColor: '',
  };

export const themeModeReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_THEME_MODE':
        return {
          ...state,
          themeMode: action.payload,
        };
      default:
        return state;
    }
};

export const themeReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_THEME_COLOR':
        return {
          ...state,
          themeColor: action.payload,
        };
      default:
        return state;
    }
};

export const strokeReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_BORDER_STROKE':
        return {
          ...state,
          borderStroke: action.payload,
        };
      default:
        return state;
    }
};

export const bodyGradientReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_BODY_GRADIENT':
        return {
            ...state,
            gradientColor: action.payload,
        };
        default:
        return state;
    }
};

export const boxLayoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_BOX_LAYOUT':
        return {
            ...state,
            boxLayout: action.payload,
        };
        default:
        return state;
    }
};

export const monochromeReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_MONOCHROME':
        return {
          ...state,
          monochrome: action.payload,
        };
      default:
        return state;
    }
};

export const borderRadiusReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_BORDER_RADIUS':
        return {
          ...state,
          borderRadius: action.payload,
        };
      default:
        return state;
    }
};

export const iconColorReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_ICON_COLOR':
        return {
          ...state,
          iconColor: action.payload,
        };
      default:
        return state;
    }
};