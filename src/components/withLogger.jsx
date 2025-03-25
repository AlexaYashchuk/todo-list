const withLogger = (ComponentWithLogs) => {
  return (props) => {
    const log = (effect) => {
      console.log(effect);
    };
    return <ComponentWithLogs {...props} log={log} />;
  };
};

export { withLogger };
