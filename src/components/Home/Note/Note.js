import React from 'react';
import { Checkbox } from 'antd';

const Note = () => {
  const onChange = (checkedValues) => {
    console.log('checked = ', checkedValues);
  };

  const plainOptions = ['Apple', 'Pear', 'Orange'];
  const options = [
    {
      label: 'Apple',
      value: 'Apple',
    },
    {
      label: 'Pear',
      value: 'Pear',
    },
    {
      label: 'Orange',
      value: 'Orange',
    },
  ];
  const optionsWithDisabled = [
    {
      label: 'Apple',
      value: 'Apple',
    },
    {
      label: 'Pear',
      value: 'Pear',
    },
    {
      label: 'Orange',
      value: 'Orange',
      disabled: false,
    },
  ];

  return (
    <div className='note-container'>
      <Checkbox.Group options={plainOptions} defaultValue={['Apple']} onChange={onChange} />
      <br />
      <br />
      <Checkbox.Group options={options} defaultValue={['Pear']} onChange={onChange} />
      <br />
      <br />
      <Checkbox.Group
        options={optionsWithDisabled}
        disabled
        defaultValue={['Apple']}
        onChange={onChange}
      />
    </div>
  );
};

export default Note;
