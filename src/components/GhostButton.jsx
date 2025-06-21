const GhostButton = ({ className, ButtonText }) => {
  return <button className={`${className} inline-block rounded-full bg-transparent hover:bg-accent-hover text-black hover:text-white cursor-pointer transition duration-500 font-poppins font-medium tracking-wide`}>{ButtonText}</button>;
};

export default GhostButton;
