/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it
 const path = require('path');
 const fs = require('fs');
 const lessToJs = require('less-vars-to-js');
 
 const themeVariables = lessToJs(
    fs.readFileSync(path.join(__dirname, './antd-theme-overrides.less'), 'utf8')
  );
themeVariables['@icon-url'] = "'/iconfont/iconfont'";
exports.modifyWebpackConfig = ({ config, stage }) => {
    switch (stage) {
      case 'develop':
        config.loader('less', current => {
          // hey, we have to do this for build as well.
          const newConfig = current;
          newConfig.loaders[2] = `less?${JSON.stringify({
            modifyVars: themeVariables
          })}`;
          return newConfig;
        });
        break;
      case 'build-css':
        config.loader('less', current => {
          const newConfig = current;
          newConfig.loader = `${current.loader}?${JSON.stringify({
            modifyVars: themeVariables
          })}`;
          return newConfig;
        });
        break;
      default:
        break;
    }
    return config;
  };
  