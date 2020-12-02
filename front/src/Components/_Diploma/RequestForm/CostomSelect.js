import React from 'react';
import Select, { components } from 'react-select';
import icon from '../../../Img/Polygon.svg';

const customStyles = {
  dropdownIndicator: (provided) => ({
    ...provided,
    paddingRight: '15px',
  }),
  menu: (provided) => ({
    ...provided,
    marginTop: '0px',
    padding: '9px 0 13px 0',
  }),
  container: (provided) => ({
    ...provided,
    fontFamily: '"Open Sans", sans-serif',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '13px',
    lineHeight: '18px',
  }),
  control: (provided) => ({
    ...provided,
    border: '1px solid #DAE1E8',
  }),
  option: (base) => ({
    ...base,
    background: 'white',
    color: 'black',
    height: '40px',
    paddingLeft: '15px',
  }),
};

const CaretDownIcon = () => <img src={icon}/>;

const DropdownIndicator = (props) => (
    <components.DropdownIndicator {...props}>
      <CaretDownIcon/>
    </components.DropdownIndicator>
);

const IndicatorSeparator = () => <span/>;

function CustomSelect({ options, onChange, value }) {
  return (
    <div className='custom-select'>
      <Select components={{ DropdownIndicator, IndicatorSeparator }} styles={customStyles} options={options}
              onChange={onChange} value={value}/>
    </div>
  );
}

export default CustomSelect;
