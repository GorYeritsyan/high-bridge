const LoginButton = ({children}) => {
  return (
    <button
      className="h-14 rounded-lg bg-[rgb(33,33,33)] hover:bg-[rgb(20,20,20)] font-bold text-xs text-white leading-[22px]"
      type="submit"
    >
      {children.toUpperCase()}
    </button>
  );
};

export default LoginButton;
