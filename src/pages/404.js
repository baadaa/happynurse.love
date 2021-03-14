import { navigate } from 'gatsby';

export default props => {
  if (typeof window === 'undefined') return null;
  navigate('/');
  return null;
}
