import React from 'react';
import Button from './Button';
import '../storybook.scss';

export default {
  title: 'Button',
  componet: Button,
  // decorators: [
  //   (Story) => (
  //     <div className="style-guide">
  //       <Story />
  //     </div>
  //   ),
  // ],
  argTypes: {
    aria: {
      name: 'aria',
      type: { name: 'string', required: false },
      defaultValue: 'button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'button' },
      },
      control: 'text',
    },
    content: {
      name: 'content',
      type: { name: 'string', required: false },
      defaultValue: 'ok',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'ok' },
      },
      control: 'text',
    },
    onClick: {
      name: 'onClick',
      type: { name: 'function', required: false },
    },
    size: {
      name: 'size',
      type: { name: 'string', required: false },
      defaultValue: 'lg',
      description: "'lg' | 'sm'",
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'lg' },
      },
      control: {
        type: 'select',
        options: ['lg', 'sm'],
      },
    },
    status: {
      name: 'status',
      type: { name: 'string', required: false },
      defaultValue: 'on',
      description: "'on' | 'off'",
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'on' },
      },
      control: {
        type: 'select',
        options: ['on', 'off'],
      },
    },
    variant: {
      name: 'variant',
      type: { name: 'string', required: false },
      defaultValue: 'primary',
      description:
        "'primary' | 'secondary' | 'pink' | 'ghost-black' | 'ghost-white'",
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
      control: {
        type: 'select',
        options: [
          'primary',
          'secondary',
          'pink',
          'ghost-black',
          'ghost-white',
        ],
      },
    },
    width: {
      name: 'width',
      type: { name: 'string', required: false },
      table: {
        type: { summary: 'string' },
      },
      control: 'text',
    },
    type: {
      name: 'type',
      type: { name: 'string', required: false },
      defaultValue: 'button',
      description: "'button' | 'submit' | 'reset'",
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'button' },
      },
      control: {
        type: 'select',
        options: ['button', 'submit', 'reset'],
      },
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Buttons = Template.bind({});

export const ButtonOptions = () => (
  <div className="container">
    <h1>Button</h1>
    <hr />
    <div className="row">
      <div className="col-lg-3 col-sm-6 col-xs-12">
        <p>
          variant: primary <strong>default</strong>
        </p>
        <p>size: lg</p>
        <p>status: on</p>
        <Button content="Lorem ipsum" />
      </div>
      <div className="col-lg-3 col-sm-6 col-xs-12">
        <p>variant: primary</p>
        <p>size: lg</p>
        <p>status: off</p>
        <Button
          variant="primary"
          status="off"
          content="Lorem ipsum"
        />
      </div>
      <div className="col-lg-3 col-sm-6 col-xs-12">
        <p>variant: primary</p>
        <p>size: sm</p>
        <p>status: on</p>
        <Button variant="primary" size="sm" content="Lorem ipsum" />
      </div>
      <div className="col-lg-3 col-sm-6 col-xs-12">
        <p>variant: primary</p>
        <p>size: sm</p>
        <p>status: off</p>
        <Button
          variant="primary"
          size="sm"
          status="off"
          content="Lorem ipsum"
        />
      </div>
    </div>
    <hr />
    <div className="row">
      <div className="col-lg-3 col-sm-6 col-xs-12">
        <p> variant: secondary </p>
        <p>size: lg</p>
        <p>status: on</p>
        <Button variant="secondary" content="Lorem ipsum" />
      </div>
      <div className="col-lg-3 col-sm-6 col-xs-12">
        <p> variant: secondary </p>
        <p>size: lg</p>
        <p>status: off</p>
        <Button
          variant="secondary"
          status="off"
          content="Lorem ipsum"
        />
      </div>
      <div className="col-lg-3 col-sm-6 col-xs-12">
        <p> variant: secondary </p>
        <p>size: sm</p>
        <p>status: on</p>
        <Button variant="secondary" size="sm" content="Lorem ipsum" />
      </div>
      <div className="col-lg-3 col-sm-6 col-xs-12">
        <p> variant: secondary </p>
        <p>size: sm</p>
        <p>status: off</p>
        <Button
          variant="secondary"
          size="sm"
          status="off"
          content="Lorem ipsum"
        />
      </div>
    </div>
    <hr />
    <div className="row">
      <div className="col-lg-3 col-sm-6 col-xs-12">
        <p> variant: pink </p>
        <p>size: lg</p>
        <p>status: on</p>
        <Button variant="pink" content="Lorem ipsum" />
      </div>
      <div className="col-lg-3 col-sm-6 col-xs-12">
        <p> variant: pink </p>
        <p>size: lg</p>
        <p>status: off</p>
        <Button variant="pink" status="off" content="Lorem ipsum" />
      </div>
      <div className="col-lg-3 col-sm-6 col-xs-12">
        <p> variant: pink </p>
        <p>size: sm</p>
        <p>status: on</p>
        <Button variant="pink" size="sm" content="Lorem ipsum" />
      </div>
      <div className="col-lg-3 col-sm-6 col-xs-12">
        <p> variant: pink </p>
        <p>size: sm</p>
        <p>status: off</p>
        <Button
          variant="pink"
          size="sm"
          status="off"
          content="Lorem ipsum"
        />
      </div>
    </div>
    <hr />
    <div className="row">
      <div className="col-lg-3 col-sm-6 col-xs-12">
        <p> variant: ghost-black </p>
        <p>size: lg</p>
        <p>status: on</p>
        <Button variant="ghost-black" content="Lorem ipsum" />
      </div>
      <div className="col-lg-3 col-sm-6 col-xs-12">
        <p> variant: ghost-black </p>
        <p>size: lg</p>
        <p>status: off</p>
        <Button
          variant="ghost-black"
          status="off"
          content="Lorem ipsum"
        />
      </div>
      <div className="col-lg-3 col-sm-6 col-xs-12">
        <p> variant: ghost-black </p>
        <p>size: sm</p>
        <p>status: on</p>
        <Button
          variant="ghost-black"
          size="sm"
          content="Lorem ipsum"
        />
      </div>
      <div className="col-lg-3 col-sm-6 col-xs-12">
        <p> variant: ghost-black </p>
        <p>size: sm</p>
        <p>status: off</p>
        <Button
          variant="ghost-black"
          size="sm"
          status="off"
          content="Lorem ipsum"
        />
      </div>
    </div>
    <hr />
    <div className="row">
      <div className="col-lg-3 col-sm-6 col-xs-12">
        <p> variant: ghost-white </p>
        <p>size: lg</p>
        <p>status: on</p>
        <Button variant="ghost-white" content="Lorem ipsum" />
      </div>
      <div className="col-lg-3 col-sm-6 col-xs-12">
        <p> variant: ghost-white </p>
        <p>size: lg</p>
        <p>status: off</p>
        <Button
          variant="ghost-white"
          status="off"
          content="Lorem ipsum"
        />
      </div>
      <div className="col-lg-3 col-sm-6 col-xs-12">
        <p> variant: ghost-white </p>
        <p>size: sm</p>
        <p>status: on</p>
        <Button
          variant="ghost-white"
          size="sm"
          content="Lorem ipsum"
        />
      </div>
      <div className="col-lg-3 col-sm-6 col-xs-12">
        <p> variant: ghost-white </p>
        <p>size: sm</p>
        <p>status: off</p>
        <Button
          variant="ghost-white"
          size="sm"
          status="off"
          content="Lorem ipsum"
        />
      </div>
    </div>
  </div>
);

ButtonOptions.parameters = {
  controls: { hideNoControlsWarning: true },
};
