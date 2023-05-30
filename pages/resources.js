import Projects from '../components/Projects';
import { MYDATA } from './api/mydata';
import styles from '../styles/Home.module.css';
export default function Resources() {
  return (
    <div className="p-24">
      <h3>Resources</h3>
      <p>
        Helpful websites that I've been using for years that have helped me in
        developing applications and much more. 🔥
      </p>
      <button type="button" className="primary-button p-5 mt-10 bg-blue-100">
        Know More
      </button>
      <h3>Utilities</h3>
      <h3>User Interface</h3>
      <h3>Everyday use</h3>
      <h3>Free Themes</h3>
      <h3>Productivity</h3>
    </div>
  );
}
