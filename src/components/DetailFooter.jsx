import React from 'react';

const DetailFooter = () => {
  return (
    <footer className="detail-footer simple">
      <div className="detail-footer-content simple">
        <p className="footer-copyright simple-text">
          &copy; {new Date().getFullYear()} Fathan Fatahilah
        </p>
        <span className="footer-secret" title="I love BDM">aSBsb3ZlIEJETQ==</span>
      </div>
    </footer>
  );
};

export default DetailFooter;
