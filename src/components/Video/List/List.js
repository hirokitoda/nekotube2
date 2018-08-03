import React from 'react';
import Item from '../Item/Item';

const List = (props) => {

  const Items = props.videos.map((video,index) => {
    return <Item video={video}
                  key={index} />
  });

  return (
    <ul className="col-md-4 list-group">
      { Items }
    </ul>
  );
};

export default List;
