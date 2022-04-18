import ReactDOM from 'react-dom';
import pokebola from '../../assets/images/icons/pokebola.svg';

import { Overlay } from './styles';

export default function Loader({ isLoading }) {
  if (!isLoading) {
    return null;
  }

  return ReactDOM.createPortal(
    <Overlay>
      <img src={pokebola} alt="pokebola" />
    </Overlay>,
    document.getElementById('loader-root'),
  );
}
