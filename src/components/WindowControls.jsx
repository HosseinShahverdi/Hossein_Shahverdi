import PropTypes from "prop-types";
import useWindowStore from "#store/window";

const WindowControls = ({ target }) => {
  const { closeWindow } = useWindowStore();
  return (
    <div id="window-controls">
      <div className="close" onClick={() => closeWindow(target)}></div>
      <div className="minimize" />
      <div className="maximize" />
    </div>
  );
};

WindowControls.propTypes = {
  target: PropTypes.string.isRequired,
};

export default WindowControls;
