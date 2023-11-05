import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Sort
        </MenuButton>
        <MenuList>
          <MenuItem>name</MenuItem>
          <MenuItem>name</MenuItem>
          <MenuItem>namename</MenuItem>
          <MenuItem>name</MenuItem>
          <MenuItem>name</MenuItem>
          <MenuItem>name</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default SortSelector;
