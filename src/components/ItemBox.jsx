import Flex from './Flex';
import SubText from './SubText';

const ItemBox = ({ className, Icon, Title, Description }) => {
  return (
    <Flex className={'flex-col justify-center text-center py-12 px-8 rounded-3xl shadow-lg hover:bg-off-white transition duration-300'}>
      {Icon}
      <h4 className={`${className} font-poppins font-medium text-xl tracking-wide pt-10 pb-3`}>{Title}</h4>
      <SubText Text={Description} className={'max-w-[19.5rem] text-gray-below opacity-70'} />
    </Flex>
  );
};

export default ItemBox;
