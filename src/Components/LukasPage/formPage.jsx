import React, { useState, useEffect } from 'react';
import Form from './movieForm';
import Table from './table';

export default function FormPage() {
  let [parentArr, setParentArr] = useState([{}]);
  let [parentFirst, setParentFirst] = useState(1);

  function parentArrChange(pArr, pFirst) {
    setParentArr(pArr);
    setParentFirst(pFirst);
  }
  return (
    <>
      <Form parentArrChange={parentArrChange} />
      <br />
      <Table displayTable={parentFirst} arr={parentArr} />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
