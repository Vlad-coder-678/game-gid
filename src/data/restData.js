const restData = {
  url: `<Link to={{ pathname: cardData.url }} target="_blank" rel="noopener noreferrer">
        other site
      </Link>`,
  searchParam: `const { search } = window.location;
      const query = new URLSearchParams(search).get('inputS');
      <input name='inputS'>
    `,
};

export default restData;
