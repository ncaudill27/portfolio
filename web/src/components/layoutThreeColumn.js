import styled from 'styled-components';

const TripleColumnLayout = styled.div`
  padding-bottom: var(--spacing-10);

  @media (min-width: 700px) {
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    padding-left: clamp(var(--spacing-2), 1px + 5vw, var(--spacing-10));
    padding-right: clamp(var(--spacing-2), 1px + 5vw, var(--spacing-10));
    display: grid;
    grid-template-columns: 1fr minmax(500px, 65ch) 1fr;
    gap: clamp(var(--spacing-2), 1px + 5vw, var(--spacing-10));
  }
`;

export default TripleColumnLayout