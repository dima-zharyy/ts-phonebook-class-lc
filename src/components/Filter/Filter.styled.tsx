import styled from "styled-components";

export const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
`;

interface ILabel {
  htmlFor: string;
}

export const FilterLabel = styled.div<ILabel>`
  margin-right: 12px;

  white-space: nowrap;
  font-weight: 600;
`;

export const FilterInput = styled.input`
  width: 100%;
  padding-left: 6px;
  border-bottom: 1px solid #505050;
`;
