
const isPlainObject = function (obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
};

module.exports = {
  absoluteFill: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  flatten: (stylesArray) => {
    const mainStyleObj = {};
    if (Array.isArray(stylesArray)) {
      for (const styleObj of stylesArray) {
        Object.assign(mainStyleObj, styleObj);
      }
    }
    return mainStyleObj;
  },
  create: (styles = {}) => {
    const stylesheet = isPlainObject(styles) ? styles : {};
    return {
      styles: stylesheet,
      get: (styleName, params = {}) => {
        if (!styleName || !stylesheet.hasOwnProperty(styleName)) {
          return {}
        }
        const currentStyle = stylesheet[styleName];

        if (typeof currentStyle === "function") {
          return currentStyle(params);
        }
        return currentStyle;
      }
    }
  }
};


