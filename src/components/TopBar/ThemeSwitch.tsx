import { MoonFill, SunFill } from 'react-bootstrap-icons';
import { ThemeContext } from '../../contexts/ThemeContext';
import { useContext } from 'react';
import { Button } from 'react-bootstrap';

const ThemeSwitch = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      {theme === 'light' ? (
        <Button variant="light" onClick={() => setTheme('dark')}>
          <MoonFill size={15} />
        </Button>
      ) : (
        <Button variant="dark" onClick={() => setTheme('light')}>
          <SunFill size={15} />
        </Button>
      )}
    </div>
  );
};

export default ThemeSwitch;
