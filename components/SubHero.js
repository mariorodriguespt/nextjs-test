import React from "react";

class SubHero extends React.Component {
  render() {
    return (
      <div id="Sub-Hero Card" className="component">
        <h2 className="styleguide-h2">Sub-Hero Card</h2>
        <div className="xs-flex xs-justify-between xs-mnx2">
          <a
            href="#"
            className="xs-col-4 xs-flex xs-items-center xs-p1 xs-box-shadow-light xs-mx2 xs-relative xs-hover--slide-u1"
          >
            <img
              className="xs-mr2"
              src="https://placeimg.com/60/60/animals"
              alt="Animals"
            />
            <span className="FranklinGothic xs-text-5 xs-line-height-7 xs-text-charcoal xs-mr5 xs-line-clamp-2">
              Short title
            </span>
            <span className="xs-absolute xs-r0 xs-t0 xs-fill-cyan xs-full-height xs-flex xs-items-center xs-px1 xs-box-shadow-light">
              <svg
                className="xs-svgfill-white xs-icon-size-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <title>icon-chevron-right</title>
                <path
                  fillRule="nonzero"
                  d="M15.62 11.43l-5.24-5.196c-.316-.312-.828-.312-1.144 0-.315.313-.315.82 0 1.133L13.91 12l-4.674 4.633c-.315.312-.315.82 0 1.133.316.312.828.312 1.143 0l5.24-5.196c.16-.158.24-.365.237-.568 0-.21-.077-.414-.236-.57z"
                />
              </svg>
            </span>
          </a>
          <a
            href="#"
            className="xs-col-4 xs-flex xs-items-center xs-p1 xs-box-shadow-light xs-mx2 xs-relative xs-hover--slide-u1"
          >
            <img
              className="xs-mr2"
              src="https://placeimg.com/60/60/arch"
              alt="Arch"
            />
            <span className="FranklinGothic xs-text-5 xs-line-height-7 xs-text-charcoal xs-mr5 xs-line-clamp-2">
              Stores that open early on Black Friday in NYC
            </span>
            <span className="xs-absolute xs-r0 xs-t0 xs-fill-cyan xs-full-height xs-flex xs-items-center xs-px1 xs-box-shadow-light">
              <svg
                className="xs-svgfill-white xs-icon-size-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <title>icon-chevron-right</title>
                <path
                  fillRule="nonzero"
                  d="M15.62 11.43l-5.24-5.196c-.316-.312-.828-.312-1.144 0-.315.313-.315.82 0 1.133L13.91 12l-4.674 4.633c-.315.312-.315.82 0 1.133.316.312.828.312 1.143 0l5.24-5.196c.16-.158.24-.365.237-.568 0-.21-.077-.414-.236-.57z"
                />
              </svg>
            </span>
          </a>
          <a
            href="#"
            className="xs-col-4 xs-flex xs-items-center xs-p1 xs-box-shadow-light xs-mx2 xs-relative xs-hover--slide-u1"
          >
            <img
              className="xs-mr2"
              src="https://placeimg.com/60/60/nature"
              alt="Nature"
            />
            <span className="FranklinGothic xs-text-5 xs-line-height-7 xs-text-charcoal xs-mr5 xs-line-clamp-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit expedita
              quaerat
            </span>
            <span className="xs-absolute xs-r0 xs-t0 xs-fill-cyan xs-full-height xs-flex xs-items-center xs-px1 xs-box-shadow-light">
              <svg
                className="xs-svgfill-white xs-icon-size-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <title>icon-chevron-right</title>
                <path
                  fillRule="nonzero"
                  d="M15.62 11.43l-5.24-5.196c-.316-.312-.828-.312-1.144 0-.315.313-.315.82 0 1.133L13.91 12l-4.674 4.633c-.315.312-.315.82 0 1.133.316.312.828.312 1.143 0l5.24-5.196c.16-.158.24-.365.237-.568 0-.21-.077-.414-.236-.57z"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>
    );
  }
}

export default SubHero;
