import { useDebounceEffect } from 'ahooks';
import { Grid, SearchBar, Selector, Space, Toast } from 'antd-mobile';
import * as Icons from 'antd-mobile-icons';
import type { IconProps } from 'antd-taro';
import classNames from 'classnames';
import { useCopy } from 'dumi/theme';
import type { ComponentType, FC } from 'react';
import React, { useState } from 'react';
import { fillIconNames, iconNames } from './constant';
import './demo-all.less';

const classPrefix = 'adm-icon-doc';

const Icon: FC<IconProps> = ({ name }) => {
  return (
    <div
      className={classNames(classPrefix, {
        [`adt-icon-${name}`]: name,
      })}
    />
  );
};

const nameDic = {
  outline: '线框风格',
  fill: '实底风格',
  copyName: '复制名称',
  copyJSX: '复制JSX',
  searchPlaceholder: '搜索 Icon',
  copySucceeded: '复制成功',
};

const iconTypes = [
  {
    label: nameDic.outline,
    value: 'outline',
  },
  {
    label: nameDic.fill,
    value: 'fill',
  },
];

const copyTypes = [
  {
    label: nameDic.copyName,
    value: 'name',
  },
  {
    label: nameDic.copyJSX,
    value: 'jsx',
  },
];

interface IconItem {
  name: string;
  component: ComponentType;
}
const items: Record<'outline' | 'fill', IconItem[]> = {
  outline: [],
  fill: [],
};

for (let key in Icons) {
  const component = (Icons as any)[key] as ComponentType;

  if (typeof component !== 'function') {
    continue;
  }
  if (key.includes('Outline')) {
    items.outline.push({
      name: key,
      component,
    });
  } else {
    // 目前的 icon 除了 outline 就是 fill，所以先这样写
    items.fill.push({
      name: key,
      component,
    });
  }
}

export default () => {
  const [displayedItems, setDisplayedItems] = useState<typeof items>(items);
  const [searchValue, setSearchValue] = useState<string>('');
  const [copyType, setCopyType] = useState<string>(copyTypes[1].value);
  const [iconType, setIconType] = useState<string[]>(iconTypes.map((it) => it.value));

  const [copyCode] = useCopy();
  const handleIconClick = (item: IconItem) => {
    if (copyType === 'name') {
      copyCode(item.name);
    } else {
      copyCode(`<${item.name} />`);
    }
    Toast.show({
      icon: <item.component />,
      content: nameDic.copySucceeded,
      duration: 1000,
    });
  };

  useDebounceEffect(
    () => {
      setDisplayedItems({
        outline: items.outline.filter((it) => it.name.toLowerCase().includes(searchValue.toLowerCase())),
        fill: items.fill.filter((it) => it.name.toLowerCase().includes(searchValue.toLowerCase())),
      });
    },
    [searchValue],
    {
      wait: 200,
      leading: false,
      trailing: true,
    },
  );

  let gridColumns = Math.floor(window.innerWidth / 80);
  gridColumns = gridColumns > 7 ? 7 : gridColumns;
  gridColumns = gridColumns < 4 ? 4 : gridColumns;

  return (
    <div className={classPrefix}>
      <Space wrap align="center" style={{ '--gap': '24px' }}>
        <Selector
          options={iconTypes}
          value={iconType}
          onChange={(val: string[]) => setIconType(val)}
          className={`${classPrefix}-icon-type-selector`}
          multiple
        />
        <Selector
          options={copyTypes}
          value={[copyType]}
          onChange={(val: string[]) => setCopyType(val[0] || copyType)}
          className={`${classPrefix}-copy-type-selector`}
        />
        <SearchBar
          value={searchValue}
          onChange={(val) => setSearchValue(val)}
          placeholder={nameDic.searchPlaceholder}
          className={`${classPrefix}-search`}
        />
      </Space>

      {iconTypes.map((type) => {
        const iconType_ = type.value as 'outline' | 'fill';
        if (iconType_ === 'outline') {
          return (
            <>
              {displayedItems[iconType_].length > 0 && <h3>{nameDic[iconType_]}</h3>}
              <Grid columns={gridColumns}>
                {iconNames.map((name) => (
                  <Grid.Item key={name} className={`${classPrefix}-item`} onClick={() => handleIconClick(name)}>
                    <div className={`${classPrefix}-icon`}>
                      <Icon name={name} />
                    </div>
                    <div className={`${classPrefix}-label`}>{name}</div>
                  </Grid.Item>
                ))}
              </Grid>
            </>
          );
        }

        if (iconType_ === 'fill') {
          return (
            <>
              {displayedItems[iconType_].length > 0 && <h3>{nameDic[iconType_]}</h3>}
              <Grid columns={gridColumns}>
                {fillIconNames.map((name) => (
                  <Grid.Item key={name} className={`${classPrefix}-item`} onClick={() => handleIconClick(name)}>
                    <div className={`${classPrefix}-icon`}>
                      <Icon name={name} />
                    </div>
                    <div className={`${classPrefix}-label`}>{name}</div>
                  </Grid.Item>
                ))}
              </Grid>
            </>
          );
        }

        return null;
      })}
    </div>
  );
};
