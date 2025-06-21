const Button = ({ className, ButtonText }) => {
  return <button className={`${className} inline-block rounded-full bg-accent hover:bg-accent-hover text-white cursor-pointer transition duration-300 font-poppins font-medium tracking-wide`}>{ButtonText}</button>;
};

export default Button;
