import {
  Button,
} from '@remax/components';

import React from 'react';
import classnames from 'classnames';

import weuiStyles from '../../weui.mod.less';
import styles from './index.mod.less';

export default (props) => {
  const {
    type = '',
    size = '',
    className = '',
    style = '',
    children = '',
    loading = '',
    onClick = '',
  } = props;

  const nextClassName = classnames({
    [className]: true,
    [weuiStyles['weui-btn']]: true,
    [styles['mini-btn']]: size === 'mini',
  });

  return <Button
    type={type}
    size={size}
    className={nextClassName}
    style={style}
    loading={loading}
    onClick={onClick}
  >
    {children}
  </Button>;
};