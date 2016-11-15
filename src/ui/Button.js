/* @flow */

import React, { Component } from 'react';
import cx from 'classnames';
import autobind from 'class-autobind';
import IconButton from 'material-ui/IconButton';
import styles from './Button.css';

type EventHandler = (event: Event) => any;

type Props = {
  children?: ReactNode;
  className?: string;
  focusOnClick?: boolean;
  formSubmit?: boolean;
  isDisabled?: boolean;
  onMouseDown?: EventHandler;
};

export default class Button extends Component {
  props: Props;

  static defaultProps = {
    onMouseDown: () => {},
  };

  constructor() {
    super(...arguments);
    autobind(this);
  }


  handleMouseDown(event: Event) {
    if (this.props.focusOnClick === false) {
      event.preventDefault();
    }

    this.props.onMouseDown();
  }

  render() {
    const {
        className,
        isDisabled,
        focusOnClick,
        formSubmit,
        children,
        ...otherProps,
    } = this.props;

    return (
        <IconButton
            className={cx(className, styles.root)}
            disabled={isDisabled}
            type={this.props.formSubmit ? 'submit' : 'button'}
            {...otherProps}
        >
          {children}
        </IconButton>
    );
  }

}
