// components/SQLInput.tsx

import React, { useState } from "react";
import { Button, Input } from "antd";
import { useDispatch } from "react-redux";
import { submitSearchQuery } from "./actions";
import { styled } from "styled-components";

const SQLInput: React.FC = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(submitSearchQuery({ query }));
  };

  return (
    <Container>
      <TextArea
        value={query}
        rows={3}
        onChange={(e) => setQuery(e.target.value)}
      />
      <>
        <Button type="primary" onClick={handleSubmit}>
          Run Query
        </Button>
      </>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 2rem;
  align-items: center;
  justify-content: center;
`;

const TextArea = styled(Input.TextArea)`
  font-family: monospace;
  font-size: 12px;
  padding: 1rem;
`;

export default SQLInput;
