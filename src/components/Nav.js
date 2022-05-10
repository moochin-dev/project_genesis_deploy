import { Affix, Button } from 'antd';
import './Nav.css'

const Nav = () => {
  const top = 10;
  return (
    <>
      <Affix offsetTop={top}>
        <Button type="primary">
          통과했수?
        </Button>
      </Affix>
      <br />
    </>
  );
};

export default Nav;
