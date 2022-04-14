import { Link } from 'react-router-dom';

import linkedin from '../../assets/images/icons/linkedin.svg';
import github from '../../assets/images/icons/github.svg';

import { Container } from './styles';

export default function Footer() {
  return (
    <Container>
      <span>Desenvolvido por Érick Moraes</span>
      <Link
        to={{ pathname: 'https://www.linkedin.com/in/erickd-mooraes/' }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={linkedin} alt="linkedIn" />
      </Link>

      <Link
        to={{ pathname: 'https://github.com/erickd-moraes' }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={github} alt="github" />
      </Link>
    </Container>
  );
}
