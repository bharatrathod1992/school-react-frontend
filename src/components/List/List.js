import React from 'react';
import Box from '../Box/Box';

export default (props) => {
  return (
    <div className="list">
      <h1>{props.header}</h1>
        {
          props.items.map((item, index) => <Box key={index} css={item.css} id={item.id} text={item.text} press={props.press} click={props.click}/>)
        }
    </div>
  );
}
