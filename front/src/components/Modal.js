import {clss} from "../util/funcs";

const Modal = ({children, title = "", stShow, ...rest}) => {
  const className = clss("modal", ["show", stShow[0]]);
  const onClose = () => stShow[1](false);
  return (
    <div {...rest} className={className}>
      <div className="panel round-2">
        <div className="header">
          <h2>{title}</h2>
          <button onClick={onClose}>Close</button>
        </div>
        <div className="body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
