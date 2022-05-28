const Input = ({className = '', onChange, type = 'text', ...rest}) => (
  <input {...rest} className={`d-block w10 my1 ${className}`.trimEnd()}
    onChange={onChange} type={type} />
);

export default Input;
