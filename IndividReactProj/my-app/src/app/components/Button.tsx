const Button = (props) => {
    return (
      <button className="button px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        type={props.type || 'button'}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    );
  };
  
  export default Button;