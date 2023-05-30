import styles from '../styles/Home.module.css';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Quotes() {
  const [textValue, setText] = useState('');
  const submitData = () => {
    toast.success('🚀 Submitted successfully!');
  };
  return (
    <div className="p-24">
      <h3>Quotes</h3>
      <ToastContainer />
      <p>
        Write anything for future visitors of this website. I'd love a random
        joke though.
      </p>
      <div className="mt-2">
        <textarea
          rows="4"
          cols="30"
          onChange={(e) => setText(e.target.value)}
          className="rounded bg-gray-100"
        />
      </div>
      <button
        type="submit"
        className="p-5 mt-10 bg-blue-100"
        onClick={submitData}
      >
        Write
      </button>
      {/* <button type="button" className="primary-button p-5 mt-10 bg-blue-100">
        Know More
      </button> */}
    </div>
  );
}
