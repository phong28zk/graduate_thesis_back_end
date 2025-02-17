'use strict';
import _ from 'lodash';

const getInfoData = ({ fields = [], object = {} }) => {
  return _.pick(object, fields);
};

module.exports = {
  getInfoData,
};
