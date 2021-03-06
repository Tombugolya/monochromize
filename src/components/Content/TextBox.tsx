/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx, useTheme } from '@emotion/react';
import { FC, memo, useContext } from 'react';
import { Col } from 'react-bootstrap';
import { DataContext, DataState } from '../../contexts/DataContext';
import { ThemeProps } from '../../contexts/ThemeContext';

type TTextBox = FC<{ val: keyof DataState }>;
const TextBox: TTextBox = ({ val }) => {
  const { data } = useContext(DataContext);
  const theme = useTheme() as ThemeProps;
  function getTitle(key: keyof DataState): string {
    if (key === 'albumName') return 'Album Title';
    if (key === 'albumDescription') return 'Description';
  }

  return (
    <Col>
      <div
        css={{ textAlign: 'center', color: theme.colors.secondary }}
        className="d-block w-75"
      >
        {data[val] && <h3>{getTitle(val)}</h3>}
        <h4>{data[val]}</h4>
      </div>
    </Col>
  );
};

export default memo(TextBox);
