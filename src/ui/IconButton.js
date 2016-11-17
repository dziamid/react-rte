/* @flow */

import React, { Component } from 'react';
import cx from 'classnames';
import Button from './Button';
import IconBold from 'material-ui/svg-icons/editor/format-bold';
import IconItalic from 'material-ui/svg-icons/editor/format-italic';
import IconStrikethrough from 'material-ui/svg-icons/editor/format-strikethrough';
import IconCode from 'material-ui/svg-icons/action/code';
import IconUnderline from 'material-ui/svg-icons/editor/format-underlined';
import IconBulleted from 'material-ui/svg-icons/editor/format-list-bulleted';
import IconNumbered from 'material-ui/svg-icons/editor/format-list-numbered';
import IconQuote from 'material-ui/svg-icons/editor/format-quote';
import IconUndo from 'material-ui/svg-icons/content/undo';
import IconRedo from 'material-ui/svg-icons/content/redo';
import IconLink from 'material-ui/svg-icons/content/link';

// import styles from './IconButton.css';
const styles = {};

const icons = {
  bold: IconBold,
  italic: IconItalic,
  underline: IconUnderline,
  strikethrough: IconStrikethrough,
  code: IconCode,
  'unordered-list-item': IconBulleted,
  'ordered-list-item': IconNumbered,
  blockquote: IconQuote,
  undo: IconUndo,
  redo: IconRedo,
  link: IconLink,
};


type Props = {
  iconName: string;
  isActive?: boolean;
  children?: ReactNode;
  className?: string;
  label?: string;
};

export default class IconButton extends Component {
  props: Props;

  render() {
    const {
        className,
        iconName,
        label,
        isActive,
        ...otherProps,
    } = this.props;

    const Icon = icons[iconName] || (() => (
            <span className={styles['icon-' + iconName]} />
        ));

    const rootClassName = cx(className, {
      [styles.root]: true,
      [styles.isActive]: isActive,
    });

    return (
        <Button
            className={rootClassName}
            title={label}
            {...otherProps}
        >
          <Icon />
        </Button>
    );
  }
}
