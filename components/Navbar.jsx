
import Link from 'next/link';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer } from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';

const Navbar = () => {
  return (
    <Flex p="2" borderBottem="1px" borderColor="gray.100">
      <Box fontSize="3xl" color="blue.400" fontWeight="bold">
        <Link href="/" paddingLeft="2">
          Emlak Evim
        </Link>
      </Box>
      <Spacer />
      <Box>
        <Menu>
          <MenuButton
            as={IconButton}
            icon={<FcMenu />}
            variant="outlined"
            color="red.400"
          />
          <MenuList>
            <Link href="/"  passHref>
            <MenuItem icon={<FcHome />}>Ana Sayfa</MenuItem>
            </Link>
            <Link href="/search"  passHref>
            <MenuItem icon={<BsSearch />}>İlan Arama</MenuItem>
            </Link>
            <Link href="/search?purpose=for-sale"  passHref>
            <MenuItem icon={<FcAbout />}>Mülk Satın Al</MenuItem>
            </Link>
            <Link href="/search?purpose=for-rent"  passHref>
            <MenuItem icon={<FiKey />}>Mülk Kiralayın</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
};

export default Navbar;
