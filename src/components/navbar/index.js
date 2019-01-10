import {
    View,
} from '@remax/components';

import React from 'react';
import classnames from 'classnames';

import {
    useState,
} from 'react';

export default (props) => {
  const {
    tabs,
    windowWidth,
    initalActiveIndex = 0,
  } = props;

  const [ activeIndex, setActiveIndex ] = useState(initalActiveIndex);

  const sliderWidth = (windowWidth / tabs.length) - 10;
  const sliderLeft = (windowWidth / tabs.length - sliderWidth) / 2;
  const sliderOffset = (windowWidth / tabs.length * (activeIndex));

  const innerStyle = {
    left: sliderLeft + 'px',
    transform: `translateX(${sliderOffset}px);`,
    '-webkit-transform': `translateX(${sliderOffset}px)`,
    width: sliderWidth,
  };

  return <View className="weui-tab">
    <View className="weui-navbar">
        {tabs.map((item, index) => {
          const handleTap = () => {
            setActiveIndex(index);
          };
          const itemClassName = classnames({
            'weui-navbar__item': true,
            'weui-bar__item_on': activeIndex === index,
          });
          return <View key={item.key} className={itemClassName} onTap={handleTap}>
                <View className="weui-navbar__title">
                    {item.title}
                </View>
            </View>;
        })}
        <View className="weui-navbar__slider" style={innerStyle}></View>
    </View>
  </View>;
};