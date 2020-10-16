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
      <div className="row">
        <div>
          <p>
            variant: primary <strong>default</strong>
          </p>
          <p>size: lg</p>
          <p>status: on</p>
          <Button content="Lorem ipsum" />
        </div>
        <div>
          <p>variant: primary</p>
          <p>size: lg</p>
          <p>status: off</p>
          <Button
            variant="primary"
            status="off"
            content="Lorem ipsum"
          />
        </div>
        <div>
          <p>variant: primary</p>
          <p>size: sm</p>
          <p>status: on</p>
          <Button variant="primary" size="sm" content="Lorem ipsum" />
        </div>
        <div>
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
        <div>
          <p> variant: secondary </p>
          <p>size: lg</p>
          <p>status: on</p>
          <Button variant="secondary" content="Lorem ipsum" />
        </div>
        <div>
          <p> variant: secondary </p>
          <p>size: lg</p>
          <p>status: off</p>
          <Button
            variant="secondary"
            status="off"
            content="Lorem ipsum"
          />
        </div>
        <div>
          <p> variant: secondary </p>
          <p>size: sm</p>
          <p>status: on</p>
          <Button
            variant="secondary"
            size="sm"
            content="Lorem ipsum"
          />
        </div>
        <div>
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
        <div>
          <p> variant: pink </p>
          <p>size: lg</p>
          <p>status: on</p>
          <Button variant="pink" content="Lorem ipsum" />
        </div>
        <div>
          <p> variant: pink </p>
          <p>size: lg</p>
          <p>status: off</p>
          <Button variant="pink" status="off" content="Lorem ipsum" />
        </div>
        <div>
          <p> variant: pink </p>
          <p>size: sm</p>
          <p>status: on</p>
          <Button variant="pink" size="sm" content="Lorem ipsum" />
        </div>
        <div>
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
        <div>
          <p> variant: ghost-black </p>
          <p>size: lg</p>
          <p>status: on</p>
          <Button variant="ghost-black" content="Lorem ipsum" />
        </div>
        <div>
          <p> variant: ghost-black </p>
          <p>size: lg</p>
          <p>status: off</p>
          <Button
            variant="ghost-black"
            status="off"
            content="Lorem ipsum"
          />
        </div>
        <div>
          <p> variant: ghost-black </p>
          <p>size: sm</p>
          <p>status: on</p>
          <Button
            variant="ghost-black"
            size="sm"
            content="Lorem ipsum"
          />
        </div>
        <div>
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
        <div>
          <p> variant: ghost-white </p>
          <p>size: lg</p>
          <p>status: on</p>
          <Button variant="ghost-white" content="Lorem ipsum" />
        </div>
        <div>
          <p> variant: ghost-white </p>
          <p>size: lg</p>
          <p>status: off</p>
          <Button
            variant="ghost-white"
            status="off"
            content="Lorem ipsum"
          />
        </div>
        <div>
          <p> variant: ghost-white </p>
          <p>size: sm</p>
          <p>status: on</p>
          <Button
            variant="ghost-white"
            size="sm"
            content="Lorem ipsum"
          />
        </div>
        <div>
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
  </div>
);
