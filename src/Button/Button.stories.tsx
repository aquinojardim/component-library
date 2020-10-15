import React from 'react';
import Button from './Button';
import '../storybook.scss';

export default {
  title: 'Button',
};

export const ButtonComponent = () => (
  <div className="style-guide container">
    <h1> Button</h1>
    <hr />
    <h3> Primary </h3>
    <div className="row">
      <div>
        <span>
          .btn.btn-lg.btn-primary-on <strong>default</strong>
        </span>{' '}
        <Button content="Lorem ipsum" />
      </div>
      <div>
        <span>.btn.btn-lg.btn-primary-off</span>{' '}
        <Button
          variant="primary"
          status="off"
          content="Lorem ipsum"
        />
      </div>
      <div>
        <span>.btn.btn-sm.btn-primary-on</span>{' '}
        <Button variant="primary" size="sm" content="Lorem ipsum" />
      </div>
      <div>
        <span>.btn.btn-sm.btn-primary-off</span>{' '}
        <Button
          variant="primary"
          size="sm"
          status="off"
          content="Lorem ipsum"
        />
      </div>
    </div>
    <hr />
    <h3> Secondary </h3>
    <div className="row">
      <div>
        <span>.btn.btn-lg.btn-secondary-on</span>{' '}
        <Button variant="secondary" content="Lorem ipsum" />
      </div>
      <div>
        <span>.btn.btn-lg.btn-secondary-off</span>{' '}
        <Button
          variant="secondary"
          status="off"
          content="Lorem ipsum"
        />
      </div>
      <div>
        <span>.btn.btn-sm.btn-secondary-on</span>{' '}
        <Button variant="secondary" size="sm" content="Lorem ipsum" />
      </div>
      <div>
        <span>.btn.btn-sm.btn-secondary-off</span>{' '}
        <Button
          variant="secondary"
          size="sm"
          status="off"
          content="Lorem ipsum"
        />
      </div>
    </div>
    <hr />
    <h3> Pink </h3>
    <div className="row">
      <div>
        <span>.btn.btn-lg.btn-pink-on</span>{' '}
        <Button variant="pink" content="Lorem ipsum" />
      </div>
      <div>
        <span>.btn.btn-lg.btn-pink-off</span>{' '}
        <Button variant="pink" status="off" content="Lorem ipsum" />
      </div>
      <div>
        <span>.btn.btn-sm.btn-pink-on</span>{' '}
        <Button variant="pink" size="sm" content="Lorem ipsum" />
      </div>
      <div>
        <span>.btn.btn-sm.btn-pink-off</span>{' '}
        <Button
          variant="pink"
          size="sm"
          status="off"
          content="Lorem ipsum"
        />
      </div>
    </div>
    <hr />
    <h3> Ghost-black </h3>
    <div className="row">
      <div>
        <span>.btn.btn-lg.btn-ghost-black-on</span>{' '}
        <Button variant="ghost-black" content="Lorem ipsum" />
      </div>
      <div>
        <span>.btn.btn-lg.btn-ghost-black-off</span>{' '}
        <Button
          variant="ghost-black"
          status="off"
          content="Lorem ipsum"
        />
      </div>
      <div>
        <span>.btn.btn-sm.btn-ghost-black-on</span>{' '}
        <Button
          variant="ghost-black"
          size="sm"
          content="Lorem ipsum"
        />
      </div>
      <div>
        <span>.btn.btn-sm.btn-ghost-black-off</span>{' '}
        <Button
          variant="ghost-black"
          size="sm"
          status="off"
          content="Lorem ipsum"
        />
      </div>
    </div>
    <hr />
    <h3> Ghost-white </h3>
    <div className="row">
      <div>
        <span>.btn.btn-lg.btn-ghost-white-on</span>{' '}
        <Button variant="ghost-white" content="Lorem ipsum" />
      </div>
      <div>
        <span>.btn.btn-lg.btn-ghost-white-off</span>{' '}
        <Button
          variant="ghost-white"
          status="off"
          content="Lorem ipsum"
        />
      </div>
      <div>
        <span>.btn.btn-sm.btn-ghost-white-on</span>{' '}
        <Button
          variant="ghost-white"
          size="sm"
          content="Lorem ipsum"
        />
      </div>
      <div>
        <span>.btn.btn-sm.btn-ghost-white-off</span>{' '}
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
