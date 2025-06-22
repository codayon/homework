import Flex from './Flex';

const NumberBox = ({ className, Number, Label }) => {
  return (
    <Flex className={'flex-col gap-y-2 font-poppins px-20'}>
      <h4 className={`${className} font-semibold tracking-wide text-5xl`}>{Number}</h4>
      <p className={`${className} font-medium text-gray-number opacity-70`}>{Label}</p>
    </Flex>
  );
};

export default NumberBox;
