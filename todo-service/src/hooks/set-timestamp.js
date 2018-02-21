const setTimestamp = name => {
  return async context => {
    context.data[name] = new Date();

    return context;
  };
};

module.exports = setTimestamp;