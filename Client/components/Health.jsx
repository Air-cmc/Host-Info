import React from 'react';

const Health = ({ health }) => {
  const clean = <i className="fas fa-hands-wash" />;

  const template = (icon, rule) => (
    <div className='rule' key={rule}>
      {icon}
      <div className='rule-line'>{rule}</div>
    </div>
  );

  return (
    <div>
      {template(clean, health)}

    </div>
  );
};

export default Health;
