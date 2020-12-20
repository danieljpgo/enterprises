import styled from 'styled-components';
import { Form } from 'formik';

export const Container = styled(Form)`
  width: 100%;
  display: grid;
  gap: ${(props) => props.theme.unit * 1.75}px;
  
  > div:first-child{
    display: grid;
    gap: ${(props) => props.theme.unit * 3.25}px;
    padding-top: ${(props) => props.theme.unit * 2.5}px;
    padding-bottom: ${(props) => props.theme.unit / 2}px;
  }

  p{
    min-height: 14px;
  }

  > div:last-child{
    width: 100%;
    padding: 0 ${(props) => props.theme.unit * 2}px;
  }
`;
