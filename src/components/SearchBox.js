import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FormGroup, Label, Input, Button } from 'reactstrap';
export default function SearchBox() {
  const [keywords, SetKeywords] = useState();
  const [places, SetPlace] = useState();

  const onSearch = (e) => {
    console.log(keywords + places);
  };
  return (
    <div className="searchbox">
      <FormGroup>
        <Label for="exampleSearch">Search</Label>
        <Input
          type="search"
          name="keywords"
          placeholder="Search for Keywords"
          onChange={(e) => SetKeywords(e.target.value)}
          placeholder="search placeholder"
          type="search"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleSearch">Search</Label>
        <Input
          type="search"
          name="places"
          placeholder="Neighbour City,State,Country"
          onChange={(e) => SetPlace(e.target.value)}
        />
      </FormGroup>

      <Button type="submit" onClick={onSearch}>
        Search
      </Button>
    </div>
  );
}
