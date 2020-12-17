import { Redirect } from 'react-router-dom';
import GoToTop from 'components/common/GoToTop'

const Lecture = () => {
  return (
    <>
    <div>
      <Redirect to="Lecture/Computer"/>
    </div>
      <GoToTop />
      </>
  );
}

export default Lecture;