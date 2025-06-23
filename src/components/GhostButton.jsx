const GhostButton = ({ className, ButtonText }) => {
  return <button className={`${className} inline-block rounded-full bg-transparent border-2 border-dashed border-transparent hover:border-accent-hover text-black cursor-pointer transition duration-500 font-poppins font-medium tracking-wide`}>{ButtonText}</button>;
};

export default GhostButton;
