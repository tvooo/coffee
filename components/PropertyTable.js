import styled from "styled-components";

const Label = styled.td`
  font-weight: bold;
  padding-right: 1em;
  vertical-align: top;
`;

const Value = styled.td`
  vertical-align: top;
`;

const Row = ({ label, children }) => (
  <tr>
    <Label>{label}</Label>
    <Value>{children}</Value>
  </tr>
);

const PropertyTable = styled.table``;
PropertyTable.Row = Row;

export default PropertyTable;
