import styled from "styled-components";

const TripleColumnLayout = styled.div`
  padding-bottom: var(--spacing-10);

  @media (min-width: 915px) {
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    padding-left: clamp(var(--spacing-0), 8px + 4.5vw, var(--spacing-10));
    padding-right: clamp(var(--spacing-0), 8px + 4.5vw, var(--spacing-10));
    display: grid;
    grid-template-columns: 1fr minmax(500px, 690px) 1fr;
    gap: clamp(var(--spacing-0), 8px + 4.5vw, var(--spacing-10));
  }
`;

export default TripleColumnLayout;
