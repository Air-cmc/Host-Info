import React from 'react';
import GroupIcon from '@material-ui/icons/Group';

const Rules = ({ rules }) => {
  const group = <GroupIcon />;

  const template = (icon, rule) => (
    <div className='rule' key={rule}>
      {icon}
      <div className='rule-line'>{rule}</div>
    </div>
  );

  return (
    <div>
      <div>
        {

        template(group, rules)
       }
      </div>
    </div>
  );
};

export default Rules;
