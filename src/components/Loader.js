const Loader = () => {
    return (
      <div className='row text-center mt-5'>
        <div className='col'>
          <div className='spinner-border text-white' role='status'>
            {/* <span className='sr-only'>Loading...</span> */}
          </div>
          <h3 className="text-white fw-bold">Loading...</h3>
        </div>
      </div>
    );
  };
  
  export default Loader;