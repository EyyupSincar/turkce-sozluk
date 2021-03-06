import { TextInput } from 'react-native';
import styled from 'styled-components'
import {compose, color, size, typography, space, borderRadius, shadow} from 'styled-system'

import Theme from '../utils/theme';

const Input = styled(TextInput).attrs(props=> ({
  placeholderTextColor: Theme.colors[props.placeholderTextColor] || '#999'
}))(
    compose(
        color,
        borderRadius,
        typography,
        space,
        size,
        shadow,
    ),
);

export default Input;
