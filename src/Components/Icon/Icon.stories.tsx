import React from 'react';
import Icon from './Icon';
import '../../../storybook.scss';

export default {
  title: 'Components/Icon',
  componet: Icon,
  argTypes: {
    variant: {
      name: 'variant',
      type: { name: 'string', required: false },
      defaultValue: 'primary',
      description:
        "'primary' | 'secondary' | 'pink' | 'black' | 'grey'",
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'pink', 'grey'],
      },
    },
    size: {
      name: 'size',
      type: { name: 'string', required: false },
      defaultValue: 'sm',
      description: "'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'",
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
      control: {
        type: 'select',
        options: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
      },
    },
    name: {
      name: 'name',
      type: { name: 'string', required: false },
      defaultValue: 'icon-logo-knot',
      description: 'icon-name',
      table: {
        type: {
          summary: 'string',
          detail:
            "'fa-icon-badge-percent' | 'fa-icon-bags-shopping' | 'fa-icon-bars' | 'fa-icon-box-heart' | 'fa-icon-brand-facebook-f' | 'fa-icon-brand-instagram' | 'fa-icon-brand-pinterest' | 'fa-icon-brand-twitter' | 'fa-icon-calendar-alt' | 'fa-icon-caret-down' | 'fa-icon-caret-left' | 'fa-icon-caret-right' | 'fa-icon-caret-up' | 'fa-icon-chevron-down' | 'fa-icon-chevron-left' | 'fa-icon-chevron-right' | 'fa-icon-chevron-up' | 'fa-icon-clock' | 'fa-icon-comment-alt-edit-solid' | 'fa-icon-comment-alt-edit' | 'fa-icon-comment-solid' | 'fa-icon-comment' | 'fa-icon-credit-card' | 'fa-icon-envelope-open-dollar' | 'fa-icon-envelope-solid' | 'fa-icon-envelope' | 'fa-icon-exclamation-circle' | 'fa-icon-exclamation-circle-solid' | 'fa-icon-exclamation-triangle-solid' | 'fa-icon-exclamation-triangle' | 'fa-icon-external-link' | 'fa-icon-heart-solid' | 'fa-icon-heart' | 'fa-icon-info-circle-solid' | 'fa-icon-info-circle' | 'fa-icon-map-marker' | 'fa-icon-minus-circle-solid' | 'fa-icon-minus-circle' | 'fa-icon-minus' | 'fa-icon-phone-solid' | 'fa-icon-phone' | 'fa-icon-plus-circle-solid' | 'fa-icon-plus-circle' | 'fa-icon-plus' | 'fa-icon-question-circle-solid' | 'fa-icon-question-circle' | 'fa-icon-search' | 'fa-icon-searchplus' | 'fa-icon-shield-check-solid' | 'fa-icon-shopping-bag' | 'fa-icon-square-solid' | 'fa-icon-square' | 'fa-icon-times-circle-solid' | 'fa-icon-times-circle' | 'fa-icon-times' | 'icon-applepay-logo' | 'icon-cc-amex' | 'icon-cc-applepay' | 'icon-cc-discover' | 'icon-cc-egift' | 'icon-cc-mc' | 'icon-cc-paypal' | 'icon-cc-store-credit' | 'icon-cc-visa' | 'icon-logo-heart' | 'icon-logo-knot' | 'icon-logo-nm-horizontal' | 'icon-logo-nm-stacked' | 'icon-logo-text' | 'icon-paypal-logo'",
        },
        defaultValue: { summary: 'icon-logo-knot' },
      },
      control: {
        type: 'select',
        options: [
          'fa-icon-badge-percent',
          'fa-icon-bags-shopping',
          'fa-icon-bars',
          'fa-icon-box-heart',
          'fa-icon-brand-facebook-f',
          'fa-icon-brand-instagram',
          'fa-icon-brand-pinterest',
          'fa-icon-brand-twitter',
          'fa-icon-calendar-alt',
          'fa-icon-caret-down',
          'fa-icon-caret-left',
          'fa-icon-caret-right',
          'fa-icon-caret-up',
          'fa-icon-chevron-down',
          'fa-icon-chevron-left',
          'fa-icon-chevron-right',
          'fa-icon-chevron-up',
          'fa-icon-clock',
          'fa-icon-comment-alt-edit-solid',
          'fa-icon-comment-alt-edit',
          'fa-icon-comment-solid',
          'fa-icon-comment',
          'fa-icon-credit-card',
          'fa-icon-envelope-open-dollar',
          'fa-icon-envelope-solid',
          'fa-icon-envelope',
          'fa-icon-exclamation-circle',
          'fa-icon-exclamation-circle-solid',
          'fa-icon-exclamation-triangle-solid',
          'fa-icon-exclamation-triangle',
          'fa-icon-external-link',
          'fa-icon-heart-solid',
          'fa-icon-heart',
          'fa-icon-info-circle-solid',
          'fa-icon-info-circle',
          'fa-icon-map-marker',
          'fa-icon-minus-circle-solid',
          'fa-icon-minus-circle',
          'fa-icon-minus',
          'fa-icon-phone-solid',
          'fa-icon-phone',
          'fa-icon-plus-circle-solid',
          'fa-icon-plus-circle',
          'fa-icon-plus',
          'fa-icon-question-circle-solid',
          'fa-icon-question-circle',
          'fa-icon-search',
          'fa-icon-searchplus',
          'fa-icon-shield-check-solid',
          'fa-icon-shopping-bag',
          'fa-icon-square-solid',
          'fa-icon-square',
          'fa-icon-times-circle-solid',
          'fa-icon-times-circle',
          'fa-icon-times',
          'icon-applepay-logo',
          'icon-cc-amex',
          'icon-cc-applepay',
          'icon-cc-discover',
          'icon-cc-egift',
          'icon-cc-mc',
          'icon-cc-paypal',
          'icon-cc-store-credit',
          'icon-cc-visa',
          'icon-logo-heart',
          'icon-logo-knot',
          'icon-logo-nm-horizontal',
          'icon-logo-nm-stacked',
          'icon-logo-text',
          'icon-paypal-logo',
        ],
      },
    },
    aria: {
      name: 'aria',
      type: { name: 'string', required: false },
      defaultValue: 'icon name',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'icon name' },
      },
      control: 'text',
    },
  },
};

const Template = (args) => <Icon {...args} />;

export const Icons = Template.bind({});

export const IconOptions = () => (
  <div className="container">
    <h1>Icon</h1>
    <hr />
    <h3>Sizes</h3>
    <div className="row">
      <div className="col-md-2 col-xs-4">
        <p className="body-lg">xxl</p>
        <Icon variant="primary" size="xxl" />
      </div>
      <div className="col-md-2 col-xs-4">
        <p className="body-lg">xl</p>
        <Icon variant="primary" size="xl" />
      </div>
      <div className="col-md-2 col-xs-4">
        <p className="body-lg">lg</p>
        <Icon variant="primary" size="lg" />
      </div>
      <div className="col-md-2 col-xs-4">
        <p className="body-lg">md</p>
        <Icon variant="primary" size="md" />
      </div>
      <div className="col-md-2 col-xs-4">
        <p className="body-lg">sm</p>
        <Icon variant="primary" size="sm" />
      </div>
      <div className="col-md-2 col-xs-4">
        <p className="body-lg">xs</p>
        <Icon variant="primary" size="xs" />
      </div>
    </div>
    <hr />
    <h3>Variants</h3>
    <div className="row">
      <div className="col-md-2 col-xs-6">
        <p className="body-lg">primary</p>
        <Icon variant="primary" size="xxl" />
      </div>
      <div className="col-md-2 col-xs-6">
        <p className="body-lg">secondary</p>
        <Icon variant="secondary" size="xxl" />
      </div>
      <div className="col-md-2 col-xs-6">
        <p className="body-lg">pink</p>
        <Icon variant="pink" size="xxl" />
      </div>
      <div className="col-md-2 col-xs-6">
        <p className="body-lg">grey</p>
        <Icon variant="grey" size="xxl" />
      </div>
    </div>
    <hr />
    <h3>Names</h3>
    <div className="row">
      <div className="col-md-2 col-xs-4">
        <p className="body-xs">fa-icon-bars</p>
        <Icon name="fa-icon-bars" />
      </div>
      <div className="col-md-2 col-xs-4">
        <p className="body-xs">fa-icon-calendar-alt</p>
        <Icon name="fa-icon-calendar-alt" />
      </div>
      <div className="col-md-2 col-xs-4">
        <p className="body-xs">fa-icon-caret-down</p>
        <Icon name="fa-icon-caret-down" />
      </div>
      <div className="col-md-2 col-xs-4">
        <p className="body-xs">fa-icon-caret-left</p>
        <Icon name="fa-icon-caret-left" />
      </div>
      <div className="col-md-2 col-xs-4">
        <p className="body-xs">fa-icon-caret-right</p>
        <Icon name="fa-icon-caret-right" />
      </div>
      <div className="col-md-2 col-xs-4">
        <p className="body-xs">fa-icon-caret-up</p>
        <Icon name="fa-icon-caret-up" />
      </div>
      <div className="col-md-2 col-xs-4">
        <p className="body-xs">fa-icon-chevron-down</p>
        <Icon name="fa-icon-chevron-down" />
      </div>
      <div className="col-md-2 col-xs-4">
        <p className="body-xs">fa-icon-chevron-left</p>
        <Icon name="fa-icon-chevron-left" />
      </div>
      <div className="col-md-2 col-xs-4">
        <p className="body-xs">fa-icon-chevron-right</p>
        <Icon name="fa-icon-chevron-right" />
      </div>
      <div className="col-md-2 col-xs-4">
        <p className="body-xs">fa-icon-chevron-up</p>
        <Icon name="fa-icon-chevron-up" />
      </div>
      <div className="col-md-2 col-xs-4">
        <p className="body-xs">fa-icon-clock</p>
        <Icon name="fa-icon-clock" />
      </div>
      <div className="col-md-2 col-xs-4">
        <p className="body-xs">fa-icon-comment-alt-edit-solid</p>
        <Icon name="fa-icon-comment-alt-edit-solid" />
      </div>
      <div className="col-md-2 col-xs-4">
        <p className="body-xs">fa-icon-comment-alt-edit</p>
        <Icon name="fa-icon-comment-alt-edit" />
      </div>
      <div className="col-md-2 col-xs-4">
        <p className="body-xs">fa-icon-comment-solid</p>
        <Icon name="fa-icon-comment-solid" />
      </div>
      <div className="col-md-2 col-xs-4">
        <p className="body-xs">fa-icon-comment</p>
        <Icon name="fa-icon-comment" />
      </div>
      <div className="col-md-2 col-xs-4">
        <p className="body-xs">fa-icon-envelope-open-dollar</p>
        <Icon name="fa-icon-envelope-open-dollar" />
      </div>
      <div className="col-md-2 col-xs-4">
        <p className="body-xs">fa-icon-envelope-solid</p>
        <Icon name="fa-icon-envelope-solid" />
      </div>
      <div className="col-md-2 col-xs-4">
        <p className="body-xs">fa-icon-envelope</p>
        <Icon name="fa-icon-envelope" />
      </div>
      <div className="col-md-2 col-xs-4">
        <p className="body-xs">fa-icon-exclamation-circle</p>
        <Icon name="fa-icon-exclamation-circle" />
      </div>
      <div className="col-md-2 col-xs-4">
        <p className="body-xs">fa-icon-exclamation-circle-solid</p>
        <Icon name="fa-icon-exclamation-circle-solid" />
      </div>
      <div className="col-md-2 col-xs-4">
        <p className="body-xs">fa-icon-exclamation-triangle-solid</p>
        <Icon name="fa-icon-exclamation-triangle-solid" />
      </div>
      <div className="col-md-2 col-xs-4">
        <p className="body-xs">fa-icon-exclamation-triangle</p>
        <Icon name="fa-icon-exclamation-triangle" />
      </div>
      <div className="col-md-2 col-xs-4">
        <p className="body-xs">fa-icon-external-link</p>
        <Icon name="fa-icon-external-link" />
      </div>
      <div className="col-md-2 col-xs-4">
        <p className="body-xs">fa-icon-heart-solid</p>
        <Icon name="fa-icon-heart-solid" />
      </div>
      <div className="col-md-2 col-xs-4">
        <p className="body-xs">fa-icon-heart</p>
        <Icon name="fa-icon-heart" />
      </div>
      <div className="col-md-2 col-xs-4">
        <p className="body-xs">fa-icon-info-circle-solid</p>
        <Icon name="fa-icon-info-circle-solid" />
      </div>
      <div className="col-md-2 col-xs-4">
        <p className="body-xs">fa-icon-info-circle</p>
        <Icon name="fa-icon-info-circle" />
      </div>
      <div className="col-md-2 col-xs-4">
        <p className="body-xs">fa-icon-map-marker</p>
        <Icon name="fa-icon-map-marker" />
      </div>
      <div className="col-md-2 col-xs-4">
        <p className="body-xs">fa-icon-minus-circle-solid</p>
        <Icon name="fa-icon-minus-circle-solid" />
      </div>
      <div className="col-md-2 col-xs-4">
        <p className="body-xs">fa-icon-minus-circle</p>
        <Icon name="fa-icon-minus-circle" />
      </div>
      <div className="col-md-2 col-xs-4">
        <p className="body-xs">fa-icon-minus</p>
        <Icon name="fa-icon-minus" />
      </div>
      <div className="col-md-2 col-xs-4">
        <p className="body-xs">fa-icon-phone-solid</p>
        <Icon name="fa-icon-phone-solid" />
      </div>
      <div className="col-md-2 col-xs-4">
        <p className="body-xs">fa-icon-phone</p>
        <Icon name="fa-icon-phone" />
      </div>
      <div className="col-md-2 col-xs-4">
        <p className="body-xs">fa-icon-plus-circle-solid</p>
        <Icon name="fa-icon-plus-circle-solid" />
      </div>
      <div className="col-md-2 col-xs-4">
        <p className="body-xs">fa-icon-plus-circle</p>
        <Icon name="fa-icon-plus-circle" />
      </div>
      <div className="col-md-2 col-xs-4">
        <p className="body-xs">fa-icon-plus</p>
        <Icon name="fa-icon-plus" />
      </div>
      <div className="col-md-2 col-xs-4">
        <p className="body-xs">fa-icon-question-circle-solid</p>
        <Icon name="fa-icon-question-circle-solid" />
      </div>
      <div className="col-md-2 col-xs-4">
        <p className="body-xs">fa-icon-question-circle</p>
        <Icon name="fa-icon-question-circle" />
      </div>
      <div className="col-md-2 col-xs-4">
        <p className="body-xs">fa-icon-search</p>
        <Icon name="fa-icon-search" />
      </div>
      <div className="col-md-2 col-xs-4">
        <p className="body-xs">fa-icon-searchplus</p>
        <Icon name="fa-icon-searchplus" />
      </div>
      <div className="col-md-2 col-xs-4">
        <p className="body-xs">fa-icon-shield-check-solid</p>
        <Icon name="fa-icon-shield-check-solid" />
      </div>
      <div className="col-md-2 col-xs-4">
        <p className="body-xs">fa-icon-square-solid</p>
        <Icon name="fa-icon-square-solid" />
      </div>
      <div className="col-md-2 col-xs-4">
        <p className="body-xs">fa-icon-square</p>
        <Icon name="fa-icon-square" />
      </div>
      <div className="col-md-2 col-xs-4">
        <p className="body-xs">fa-icon-times-circle-solid</p>
        <Icon name="fa-icon-times-circle-solid" />
      </div>
      <div className="col-md-2 col-xs-4">
        <p className="body-xs">fa-icon-times-circle</p>
        <Icon name="fa-icon-times-circle" />
      </div>
      <div className="col-md-2 col-xs-4">
        <p className="body-xs">fa-icon-times</p>
        <Icon name="fa-icon-times" />
      </div>
      <div className="col-md-2 col-xs-4">
        <p className="body-xs">fa-icon-box-heart</p>
        <Icon name="fa-icon-box-heart" />
      </div>
      <div className="col-md-2 col-xs-4">
        <p className="body-xs">fa-icon-shopping-bag</p>
        <Icon name="fa-icon-shopping-bag" />
      </div>
      <div className="col-md-2 col-xs-4">
        <p className="body-xs">fa-icon-bags-shopping</p>
        <Icon name="fa-icon-bags-shopping" />
      </div>
      <div className="col-md-2 col-xs-4">
        <p className="body-xs">fa-icon-badge-percent</p>
        <Icon name="fa-icon-badge-percent" />
      </div>
      <div className="col-md-2 col-xs-4">
        <p className="body-xs">fa-icon-credit-card</p>
        <Icon name="fa-icon-credit-card" />
      </div>
      <div className="col-md-2 col-xs-4">
        <p className="body-xs">icon-cc-amex</p>
        <Icon name="icon-cc-amex" />
      </div>
      <div className="col-md-2 col-xs-4">
        <p className="body-xs">icon-cc-applepay</p>
        <Icon name="icon-cc-applepay" />
      </div>
      <div className="col-md-2 col-xs-4">
        <p className="body-xs">icon-cc-discover</p>
        <Icon name="icon-cc-discover" />
      </div>
      <div className="col-md-2 col-xs-4">
        <p className="body-xs">icon-cc-egift</p>
        <Icon name="icon-cc-egift" />
      </div>
      <div className="col-md-2 col-xs-4">
        <p className="body-xs">icon-cc-mc</p>
        <Icon name="icon-cc-mc" />
      </div>
      <div className="col-md-2 col-xs-4">
        <p className="body-xs">icon-cc-paypal</p>
        <Icon name="icon-cc-paypal" />
      </div>
      <div className="col-md-2 col-xs-4">
        <p className="body-xs">icon-cc-store-credit</p>
        <Icon name="icon-cc-store-credit" />
      </div>
      <div className="col-md-2 col-xs-4">
        <p className="body-xs">icon-cc-visa</p>
        <Icon name="icon-cc-visa" />
      </div>
      <div className="col-md-2 col-xs-4">
        <p className="body-xs">icon-paypal-logo</p>
        <Icon name="icon-paypal-logo" />
      </div>
      <div className="col-md-2 col-xs-4">
        <p className="body-xs">icon-applepay-logo</p>
        <Icon name="icon-applepay-logo" />
      </div>
      <div className="col-md-2 col-xs-4">
        <p className="body-xs">fa-icon-brand-facebook-f</p>
        <Icon name="fa-icon-brand-facebook-f" />
      </div>
      <div className="col-md-2 col-xs-4">
        <p className="body-xs">fa-icon-brand-instagram</p>
        <Icon name="fa-icon-brand-instagram" />
      </div>
      <div className="col-md-2 col-xs-4">
        <p className="body-xs">fa-icon-brand-pinterest</p>
        <Icon name="fa-icon-brand-pinterest" />
      </div>
      <div className="col-md-2 col-xs-4">
        <p className="body-xs">fa-icon-brand-twitter</p>
        <Icon name="fa-icon-brand-twitter" />
      </div>
    </div>
    <div className="row">
      <div className="col-md-2 col-xs-4">
        <p className="body-xs">icon-logo-heart</p>
        <Icon name="icon-logo-heart" />
      </div>
      <div className="col-md-2 col-xs-4">
        <p className="body-xs">icon-logo-knot</p>
        <Icon name="icon-logo-knot" />
      </div>
      <div className="col-md-3 col-xs-4">
        <p className="body-xs">icon-logo-text</p>
        <Icon name="icon-logo-text" />
      </div>
      <div className="col-md-5 col-xs-10">
        <p className="body-xs">icon-logo-nm-horizontal</p>
        <Icon name="icon-logo-nm-horizontal" size="lg" />
      </div>
      <div className="col-lg-2 col-xs-10">
        <p className="body-xs">icon-logo-nm-stacked</p>
        <Icon name="icon-logo-nm-stacked" size="xxl" />
      </div>
    </div>
  </div>
);

IconOptions.parameters = {
  controls: { hideNoControlsWarning: true },
};
