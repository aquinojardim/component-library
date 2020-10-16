import React from 'react';
import Button from './Button';
import '../storybook.scss';

export default {
  title: 'Button',
};

export const Buttons = () => (
  <div className="style-guide">
    <div className="container">
      <h1> Button</h1>
      <hr />
      <p> variant: primary </p>
      <div className="row">
        <div>
          <span>
            size: lg | status: on <strong>default</strong>
          </span>{' '}
          <Button content="Lorem ipsum" />
        </div>
        <div>
          <span>size: lg | status: off</span>{' '}
          <Button
            variant="primary"
            status="off"
            content="Lorem ipsum"
          />
        </div>
        <div>
          <span>size: sm | status: on</span>{' '}
          <Button variant="primary" size="sm" content="Lorem ipsum" />
        </div>
        <div>
          <span>size: sm | status: off</span>{' '}
          <Button
            variant="primary"
            size="sm"
            status="off"
            content="Lorem ipsum"
          />
        </div>
      </div>
      <hr />
      <p> variant: secondary </p>
      <div className="row">
        <div>
          <span>size: lg | status: on</span>{' '}
          <Button variant="secondary" content="Lorem ipsum" />
        </div>
        <div>
          <span>size: lg | status: off</span>{' '}
          <Button
            variant="secondary"
            status="off"
            content="Lorem ipsum"
          />
        </div>
        <div>
          <span>size: sm | status: on</span>{' '}
          <Button
            variant="secondary"
            size="sm"
            content="Lorem ipsum"
          />
        </div>
        <div>
          <span>size: sm | status: off</span>{' '}
          <Button
            variant="secondary"
            size="sm"
            status="off"
            content="Lorem ipsum"
          />
        </div>
      </div>
      <hr />
      <p> variant: pink </p>
      <div className="row">
        <div>
          <span>size: lg | status: on</span>{' '}
          <Button variant="pink" content="Lorem ipsum" />
        </div>
        <div>
          <span>size: lg | status: off</span>{' '}
          <Button variant="pink" status="off" content="Lorem ipsum" />
        </div>
        <div>
          <span>size: sm | status: on</span>{' '}
          <Button variant="pink" size="sm" content="Lorem ipsum" />
        </div>
        <div>
          <span>size: sm | status: off</span>{' '}
          <Button
            variant="pink"
            size="sm"
            status="off"
            content="Lorem ipsum"
          />
        </div>
      </div>
      <hr />
      <p> variant: ghost-black </p>
      <div className="row">
        <div>
          <span>size: lg | status: on</span>{' '}
          <Button variant="ghost-black" content="Lorem ipsum" />
        </div>
        <div>
          <span>size: lg | status: off</span>{' '}
          <Button
            variant="ghost-black"
            status="off"
            content="Lorem ipsum"
          />
        </div>
        <div>
          <span>size: sm | status: on</span>{' '}
          <Button
            variant="ghost-black"
            size="sm"
            content="Lorem ipsum"
          />
        </div>
        <div>
          <span>size: sm | status: off</span>{' '}
          <Button
            variant="ghost-black"
            size="sm"
            status="off"
            content="Lorem ipsum"
          />
        </div>
      </div>
      <hr />
      <p> variant: ghost-white </p>
      <div className="row">
        <div>
          <span>size: lg | status: on</span>{' '}
          <Button variant="ghost-white" content="Lorem ipsum" />
        </div>
        <div>
          <span>size: lg | status: off</span>{' '}
          <Button
            variant="ghost-white"
            status="off"
            content="Lorem ipsum"
          />
        </div>
        <div>
          <span>size: sm | status: on</span>{' '}
          <Button
            variant="ghost-white"
            size="sm"
            content="Lorem ipsum"
          />
        </div>
        <div>
          <span>size: sm | status: off</span>{' '}
          <Button
            variant="ghost-white"
            size="sm"
            status="off"
            content="Lorem ipsum"
          />
        </div>
      </div>
    </div>
  </div>
);
