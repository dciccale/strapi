'use strict';

module.exports = function (strapi) {
  const hook = {

    /**
     * Default options
     */

    defaults: {
      enabled: true
    },

    /**
     * Initialize the hook
     */

    initialize: function (cb) {
      cb();
    }
  };

  return hook;
};
