import React, {useState} from 'react';

function Form(props) {
  const [gifTitle, setGifTitle] = useState('')

  const handleSubmit = e => {
    console.log('handleSubmit clicked');
    e.preventDefault();
    props.handleSubmit(gifTitle)
    setGifTitle('')
  };

  const handleChange = e => {
    console.log('handleChange clicked');
    const title =  e.target.value
    setGifTitle(title)
  };

    return (
      <>
        <form onSubmit={handleSubmit}>
          <label htmlFor="gifTitle">Search</label>
          <input
            id="gifTitle"
            type="text"
            value={gifTitle}
            onChange={handleChange}
          />
          <input type="submit" value="Find Gif" />
        </form>
      </>
    );
}

export default Form;