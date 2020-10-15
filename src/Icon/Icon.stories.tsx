import React from 'react';
import Icon from './Icon';
import '../storybook.scss';

export default {
  title: 'Icon',
};

export const Icons = () => (
  <div className="style-guide container">
    <h1>Icon</h1>
    <hr />
    <div className="row">
      <Icon variant="primary" size="xxl" />
      <Icon variant="primary" size="xl" />
      <Icon variant="primary" size="lg" />
      <Icon variant="primary" size="md" />
      <Icon variant="primary" size="sm" />
      <Icon variant="primary" size="xs" />
    </div>
    <hr />
    <div className="row">
      <Icon name="icon-paypal-logo" variant="primary" />
      <Icon name="icon-paypal-logo" variant="secondary" />
      <Icon name="icon-paypal-logo" variant="pink" />
      <Icon name="icon-paypal-logo" variant="black" />
      <Icon name="icon-paypal-logo" variant="grey" />
    </div>
    <hr />
    <div className="row">
      <Icon name="fa-icon-badge-percent" />
      <Icon name="fa-icon-bags-shopping" />
      <Icon name="fa-icon-bars" />
      <Icon name="fa-icon-box-heart" />
      <Icon name="fa-icon-brand-facebook-f" />
      <Icon name="fa-icon-brand-instagram" />
      <Icon name="fa-icon-brand-pinterest" />
      <Icon name="fa-icon-brand-twitter" />
      <Icon name="fa-icon-calendar-alt" />
      <Icon name="fa-icon-caret-down" />
      <Icon name="fa-icon-caret-left" />
      <Icon name="fa-icon-caret-right" />
      <Icon name="fa-icon-caret-up" />
      <Icon name="fa-icon-chevron-down" />
      <Icon name="fa-icon-chevron-left" />
      <Icon name="fa-icon-chevron-right" />
      <Icon name="fa-icon-chevron-up" />
      <Icon name="fa-icon-clock" />
      <Icon name="fa-icon-comment-alt-edit-solid" />
      <Icon name="fa-icon-comment-alt-edit" />
      <Icon name="fa-icon-comment-solid" />
      <Icon name="fa-icon-comment" />
      <Icon name="fa-icon-credit-card" />
      <Icon name="fa-icon-envelope-open-dollar" />
      <Icon name="fa-icon-envelope-solid" />
      <Icon name="fa-icon-envelope" />
      <Icon name="fa-icon-exclamation-circle" />
      <Icon name="fa-icon-exclamation-circle-solid" />
      <Icon name="fa-icon-exclamation-triangle-solid" />
      <Icon name="fa-icon-exclamation-triangle" />
      <Icon name="fa-icon-external-link" />
      <Icon name="fa-icon-heart-solid" />
      <Icon name="fa-icon-heart" />
      <Icon name="fa-icon-info-circle-solid" />
      <Icon name="fa-icon-info-circle" />
      <Icon name="fa-icon-map-marker" />
      <Icon name="fa-icon-minus-circle-solid" />
      <Icon name="fa-icon-minus-circle" />
      <Icon name="fa-icon-minus" />
      <Icon name="fa-icon-phone-solid" />
      <Icon name="fa-icon-phone" />
      <Icon name="fa-icon-plus-circle-solid" />
      <Icon name="fa-icon-plus-circle" />
      <Icon name="fa-icon-plus" />
      <Icon name="fa-icon-question-circle-solid" />
      <Icon name="fa-icon-question-circle" />
      <Icon name="fa-icon-search" />
      <Icon name="fa-icon-searchplus" />
      <Icon name="fa-icon-shield-check-solid" />
      <Icon name="fa-icon-shopping-bag" />
      <Icon name="fa-icon-square-solid" />
      <Icon name="fa-icon-square" />
      <Icon name="fa-icon-times-circle-solid" />
      <Icon name="fa-icon-times-circle" />
      <Icon name="fa-icon-times" />
      <Icon name="icon-applepay-logo" />
      <Icon name="icon-cc-amex" />
      <Icon name="icon-cc-applepay" />
      <Icon name="icon-cc-discover" />
      <Icon name="icon-cc-egift" />
      <Icon name="icon-cc-mc" />
      <Icon name="icon-cc-paypal" />
      <Icon name="icon-cc-store-credit" />
      <Icon name="icon-cc-visa" />
      <Icon name="icon-paypal-logo" />
    </div>
    <hr />
    <div className="row">
      <Icon name="icon-logo-heart" />
      <Icon name="icon-logo-knot" />
      <div className="col-2">
        <Icon name="icon-logo-text" />
      </div>
      <div className="col-4">
        <Icon name="icon-logo-nm-horizontal" size="lg" />
      </div>
      <div className="col-2">
        <Icon name="icon-logo-nm-stacked" size="xxl" />
      </div>
    </div>
  </div>
);
