function PropertiesTrait({ prop }) {
  return (
    <div className='trait-properties'>
      <div className='prop-key'>{prop.key}</div>
      <div className='prop-value'>{prop.value}</div>
    </div>
  );
}

export default PropertiesTrait;
