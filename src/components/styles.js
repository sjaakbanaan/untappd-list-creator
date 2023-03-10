import styled from '@xstyled/styled-components';
import { x } from '@xstyled/styled-components';
import { keyframes } from 'styled-components';

const appendAnimation = keyframes`
  from {
    transform: translate(0, -60px);
    opacity: 0;
  }
  to {
    transform: translate(0, 0);
    opacity: 1;
  }
`;

const SResultCard = styled.div`
  animation: ${appendAnimation} 0.2s linear;
`;

const SStarRating = styled(x.div)`
  &:before {
    content: '★★★★★';
    letter-spacing: 3px;
    background: linear-gradient(
      90deg,
      #fc0 ${(props) => props.percentage}%,
      white ${(props) => props.percentage}%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export { SResultCard, SStarRating };
