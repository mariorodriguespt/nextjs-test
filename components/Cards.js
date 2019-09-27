import React from "react";

class Cards extends React.Component {
  render() {
    return (
      <div id="Cards" className="component">
        <h2 className="styleguide-h2">Cards</h2>
        <div className="xs-flex xs-justify-between xs-mnx2 xs-mb9">
          <div className="xs-box-shadow-light xs-mx2 xs-relative xs-col-4 theme--teal xs-border xs-hover--slide-u1 xs-hover--border-charcoal">
            <a href className="xs-absolute xs-cover" />
            <img
              className="xs-block"
              src="https://placeimg.com/800/450/nature"
              alt="Nature"
            />
            <div className="xs-px4 xs-pt4 xs-pb2 xs-text-center">
              <div className="xs-flex xs-items-center xs-justify-center xs-mb3">
                <svg
                  className="xs-svgfill-gray xs-icon-size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <title>icon-location-pin</title>
                  <path
                    fillRule="nonzero"
                    d="M16.243 4.757c-2.343-2.343-6.142-2.343-8.486 0-2.11 2.11-2.35 6.087-.557 8.476l4.8 6.93 4.8-6.93c1.792-2.39 1.554-6.365-.557-8.476zm-4.185 6.165c-1.093 0-1.98-.887-1.98-1.98 0-1.094.887-1.98 1.98-1.98 1.094 0 1.98.886 1.98 1.98 0 1.093-.886 1.98-1.98 1.98z"
                  />
                </svg>
                <span className="FranklinGothic xs-text-10 xs-line-height-10 bold xs-inline-block xs-mr2">
                  East Village
                </span>
              </div>
              <p className="FranklinGothic xs-text-6 xs-line-height-7 xs-text-charcoal xs-line-clamp-2 xs-mb3">
                EVF Card
              </p>
              <p className="Helvetica xs-text-charcoal xs-text-8 xs-line-height-8 xs-line-clamp-2 xs-mb6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
                obcaecati nisi recusandae ipsa vel, beatae numquam odio eos
                quibusdam non
              </p>
              <p className="Helvetica xs-text-8 bold">
                $125 <span className="xs-text-gray regular">|</span> Ends: Nov
                19
              </p>
              <a
                href="#"
                className="Helvetica xs-px6 xs-py2 xs-text-8 xs-line-height-9 xs-fill-cyan xs-border squared xs-border-cyan xs-text-white caps xs-letter-spacing-2 xs-inline-block xs-hover--fill-cyan-dark xs-hover--border-cyan-dark xs-relative xs-t5"
              >
                View
              </a>
            </div>
          </div>
          <div className="xs-box-shadow-light xs-mx2 xs-relative xs-col-4 theme--teal xs-border xs-hover--slide-u1 xs-hover--border-charcoal">
            <a href className="xs-absolute xs-cover" />
            <img
              className="xs-block"
              src="https://placeimg.com/800/450/arch"
              alt="Arch"
            />
            <div className="xs-px4 xs-pt4 xs-pb2 xs-text-center">
              <span className="FranklinGothic xs-text-10 bold xs-inline-block xs-border-bottom theme-border xs-mb2">
                Category
              </span>
              <p className="FranklinGothic xs-text-6 xs-line-height-7 xs-text-charcoal xs-line-clamp-2 xs-mb3">
                EVF Card
              </p>
              <p className="Helvetica xs-text-charcoal xs-text-8 xs-line-height-9 xs-line-clamp-2 xs-mb6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
                obcaecati nisi recusandae ipsa vel, beatae numquam odio eos
                quibusdam non
              </p>
              <p className="Helvetica xs-text-8 bold">
                $125 <span className="xs-text-gray regular">|</span> Ends: Nov
                19
              </p>
              <a
                href="#"
                className="Helvetica xs-px6 xs-py2 xs-text-8 xs-line-height-9 xs-fill-cyan xs-border squared xs-border-cyan xs-text-white caps xs-letter-spacing-2 xs-inline-block xs-hover--fill-cyan-dark xs-hover--border-cyan-dark xs-relative xs-t5"
              >
                View
              </a>
            </div>
          </div>
        </div>
        <div className="xs-flex xs-justify-between xs-mnx2 xs-pt9">
          <div className="xs-box-shadow-light xs-mx2 xs-relative xs-col-6 xs-border xs-hover--slide-u1 xs-hover--border-charcoal">
            <a href className="xs-absolute xs-cover" />
            <div className="xs-mx2 xs-mnt5">
              <img
                className="xs-col-12 xs-block xs-box-shadow-light"
                src="https://placeimg.com/800/450/arch"
                alt="Arch"
              />
            </div>
            <div className="xs-p4 xs-text-center">
              <p className="FranklinGothic xs-text-6 xs-line-height-7 xs-text-charcoal xs-line-clamp-2 xs-mb3">
                Feature Card
              </p>
              <p className="Helvetica xs-text-charcoal xs-text-8 xs-line-height-9 xs-line-clamp-2">
                Lorem ipsum dolor sit amet
              </p>
            </div>
          </div>
          <div className="xs-box-shadow-light xs-mx2 xs-relative xs-col-6 theme--teal xs-border xs-hover--slide-u1 xs-hover--border-charcoal">
            <a href className="xs-absolute xs-cover" />
            <div className="xs-mx2 xs-mnt5">
              <img
                className="xs-col-12 xs-block xs-box-shadow-light"
                src="https://placeimg.com/800/450/any"
                alt="Any"
              />
            </div>
            <div className="xs-p4 xs-text-center">
              <p className="FranklinGothic xs-text-10 bold xs-inline-block xs-border-bottom theme-border xs-mb3">
                Eat
              </p>
              <p className="FranklinGothic xs-text-6 xs-line-height-7 xs-text-charcoal xs-line-clamp-2 xs-mb3">
                Feature Card
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            maxWidth: "1170px"
          }}
          className="xs-flex xs-justify-between xs-mnx2 xs-pt9 list-card"
        >
          <article className="listCard xs-col-12 sm-col-8 sm-offset-2">
            <a href="#">
              <div className="listImg xs-col-12 md-col-4 xs-float-left xs-relative xs-z1">
                <div className="number Helvetica xs-absolute xs-text-center xs-z1 xs-text-4 xs-line-height-2 xs-fill-black xs-text-white squared xs-px3">
                  1
                </div>
                <figure className="image_wrapper aspect-ratio-16-9">
                  <img
                      alt="asdsd"
                    src="https://placeimg.com/800/450/arch"
                    data-sizes="auto"
                    className="xs-block"
                  />
                  <figcaption className="Helvetica xs-absolute xs-z1 xs-b0 xs-l0 xs-text-9 xs-line-height-8 xs-fill-black xs-text-white squared xs-px3 xs-py1">
                    Photo Credit: place images 1
                  </figcaption>
                </figure>
              </div>
            </a>
            <div className="card-content sm-col-12 md-col-8 xs-p3 sm-p4 xs-fill-white xs-float-left xs-box-shadow-light xs-relative">
              <a href="#"></a>
              <a href="#"></a>
              <header>
                <a href="#">
                  <span className="category things-to-do FranklinGothic xs-text-8 xs-text-black xs-border-bottom border-2 border-green xs-mb2 xs-inline-block">
                    Things to do
                  </span>
                </a>
                <div className="xs-flex">
                  <a href="#"></a>
                  <a
                    href="#"
                    className="xs-col-11 xs-block xs-text-black FranklinGothic xs-text-5 sm-text-3 xs-line-height-5 xs-pr6"
                  >
                    Lorem ipsum dolor sit amet
                  </a>
                  <div className="xs-float-right xs-display-inline xs-col-1">
                    <svg
                      className="xs-icon-size-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <title>icon-chevron-right</title>
                      <path
                        fillRule="nonzero"
                        d="M15.62 11.43l-5.24-5.196c-.316-.312-.828-.312-1.144 0-.315.313-.315.82 0 1.133L13.91 12l-4.674 4.633c-.315.312-.315.82 0 1.133.316.312.828.312 1.143 0l5.24-5.196c.16-.158.24-.365.237-.568 0-.21-.077-.414-.236-.57z"
                      />
                    </svg>
                  </div>
                </div>
              </header>
              <div className="to-says sm-mb1 xs-items-center xs-flex xs-line-height-7 sm-line-height-9 xs-text-8">
                <div className="FranklinGothic xs-text-8 bold xs-float-left caps xs-mr4">
                  Time Out says
                </div>
                <div
                  className="rating rating--4 xs-relative nowrap xs-inline-block xs-text-red xs-ml1"
                  title="4 out of 5 stars"
                ></div>
              </div>
              <div className="info-wrapper xs-mb3">
                <div className="sm-mb1 xs-flex xs-items-center xs-line-height-6 xs-mnt1">
                  <svg
                    className="xs-svgfill-red xs-icon-size-2 xs-mnl2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <title>icon-calendar</title>
                    <path
                      fill="#1A1A1A"
                      fillRule="nonzero"
                      d="M17.566 7.969a.902.902 0 0 0-.64-.255h-.91v-.643c0-.294-.112-.546-.335-.756A1.131 1.131 0 0 0 14.877 6h-.455c-.313 0-.58.105-.804.315-.223.21-.334.462-.334.756v.643h-2.731v-.643c0-.294-.112-.546-.335-.756A1.131 1.131 0 0 0 9.414 6H8.96c-.313 0-.58.105-.804.315-.223.21-.334.462-.334.756v.643h-.91a.903.903 0 0 0-.64.255.8.8 0 0 0-.271.603v8.57c0 .233.09.434.27.604.18.17.394.254.64.254h10.016c.246 0 .46-.085.64-.254.18-.17.27-.371.27-.603V8.57a.801.801 0 0 0-.27-.602zm-3.548-1.043c0-.058.018-.106.054-.143a.182.182 0 0 1 .137-.056h.382c.056 0 .101.019.137.056a.197.197 0 0 1 .054.143V8.71a.197.197 0 0 1-.054.142.183.183 0 0 1-.137.056h-.382a.182.182 0 0 1-.137-.056.197.197 0 0 1-.054-.142V6.926zm-5.345 0c0-.058.018-.106.053-.143a.182.182 0 0 1 .138-.056h.381c.056 0 .102.019.138.056a.197.197 0 0 1 .053.143V8.71a.197.197 0 0 1-.053.142.182.182 0 0 1-.138.056h-.381a.182.182 0 0 1-.138-.056.198.198 0 0 1-.053-.142V6.926zm8.018 10.347H6.764v-6.91h9.927v6.91z"
                    />
                  </svg>
                  <span className="Helvetica bold xs-text-9 sm-text-8 xs-inline-block">
                    Until the end of time
                  </span>
                </div>
                <div className="Georgia xs-text-8 sm-text-7 description-wrapper xs-relative">
                  <input
                    type="checkbox"
                    className="xs-absolute xs-overflow-hidden"
                    id="read_more1"
                    role="button"
                  />
                  <label
                    htmlFor="read_more1"
                    className="js-toggle-label Helvetica bold xs-text-red xs-absolute xs-bn5 xs-z1 decoration-underline"                    
                    data-hide="Read Less"
                    data-show="Read More"
                  />
                  <div className="infoTarget xs-line-height-7 xs-height-fit xs-height-fit-transition xs-text-black xs-line-clamp-3">
                    <span className="bold">What is it -</span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    <br />
                    <span className="bold">Why Go? -</span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus scelerisque mauris sapien, ac varius nulla aliquam
                    in. Mauris eget porta libero. Donec finibus at sem vel
                    ultricies. Fusce efficitur quis turpis non tincidunt. Nam
                    pharetra luctus porta. Aliquam erat volutpat. Nulla
                    imperdiet tellus vitae commodo placerat. Sed sit amet nisl
                    eget lacus ullamcorper fringilla. Vivamus nec accumsan
                    metus. Donec in.
                  </div>
                </div>
                {}
              </div>
              <div className="xs-pt4 xs-flex xs-items-center xs-mb3">
                <svg
                  className="xs-svgfill-gray xs-icon-size-5 xs-mnl2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <title>icon-location-pin</title>
                  <path
                    fillRule="nonzero"
                    d="M16.243 4.757c-2.343-2.343-6.142-2.343-8.486 0-2.11 2.11-2.35 6.087-.557 8.476l4.8 6.93 4.8-6.93c1.792-2.39 1.554-6.365-.557-8.476zm-4.185 6.165c-1.093 0-1.98-.887-1.98-1.98 0-1.094.887-1.98 1.98-1.98 1.094 0 1.98.886 1.98 1.98 0 1.093-.886 1.98-1.98 1.98z"
                  />
                </svg>
                <span className="Helvetica bold sm-text-8 xs-text-9 xs-line-height-10 xs-inline-block xs-mr1">
                  Some City, Some Country
                </span>
              </div>
              <div className="tags sm-float-left ">
                <div className="Helvetica xs-text-8 xs-border rounded xs-px3 xs-py2 caps xs-inline-block xs-relative xs-align-middle xs-border-gray-light-mid xs-fill-gray-lighter">
                  Free
                </div>
                <div className="Helvetica xs-border rounded xs-px1 xs-pt1 xs-inline-block xs-relative xs-align-middle xs-border-gray-light-mid xs-fill-gray-lighter">
                  <svg
                    className="xs-svgfill-black xs-icon-size-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <title>icon-family-friendly</title>
                    <path
                      fillRule="evenodd"
                      d="M19.001 7.56a2.285 2.285 0 0 0-2.267 2.112c-.048.61.144 1.203.539 1.669.392.463.94.745 1.544.795h.1a2.23 2.23 0 0 0 1.566-.54c.463-.399.744-.953.791-1.563a2.29 2.29 0 0 0-2.273-2.472m-13.009 0a2.284 2.284 0 0 0-2.267 2.112 2.287 2.287 0 0 0 2.083 2.463h.091a2.29 2.29 0 0 0 .093-4.576m6.507 2.61a1.65 1.65 0 0 0-.136 3.291l.141.002c.396 0 .762-.135 1.06-.39a1.64 1.64 0 0 0 .569-1.124 1.646 1.646 0 0 0-1.634-1.779m9.944 7.55v-2.682c0-1.29-1.043-2.34-2.325-2.34H19.1a2.15 2.15 0 0 1-.287 0h-.923a2.335 2.335 0 0 0-2.325 2.34v2.681a.28.28 0 0 1-.279.281.28.28 0 0 1-.278-.28v-2.011c0-.93-.751-1.686-1.675-1.686h-.759a1.315 1.315 0 0 1-.216 0h-.694c-.923 0-1.674.756-1.674 1.686v2.01a.28.28 0 0 1-.279.281.28.28 0 0 1-.278-.28v-2.682c0-1.29-1.043-2.34-2.325-2.34H6.082a.615.615 0 0 0-.063.005c-.085.003-.15 0-.214-.005h-.923a2.336 2.336 0 0 0-2.325 2.34v2.681a.28.28 0 0 1-.279.281.28.28 0 0 1-.278-.28v-2.682a2.88 2.88 0 0 1 2.043-2.76l.306-.095-.286-.259a2.36 2.36 0 0 1-.223-.219 2.844 2.844 0 0 1-.67-2.077c.06-.76.41-1.45.985-1.945a2.79 2.79 0 0 1 2.063-.674c.755.06 1.442.412 1.932.991.492.58.73 1.317.67 2.077a2.849 2.849 0 0 1-.932 1.893l-.237.215.305.095c.85.267 1.542.925 1.848 1.762l.098.266.2-.199c.211-.208.461-.371.743-.485l.248-.1-.183-.195a2.19 2.19 0 0 1-.599-1.683c.09-1.143 1.045-2.038 2.176-2.038a2.176 2.176 0 0 1 1.682.776 2.204 2.204 0 0 1-.08 2.944l-.185.196.25.1c.282.113.532.276.743.485l.201.199.097-.266a2.902 2.902 0 0 1 1.857-1.764l.306-.095-.286-.26a2.298 2.298 0 0 1-.223-.218 2.843 2.843 0 0 1-.67-2.077c.06-.76.41-1.45.985-1.945a2.793 2.793 0 0 1 2.064-.674c.754.06 1.44.412 1.93.991.493.58.731 1.317.671 2.077a2.843 2.843 0 0 1-.934 1.892l-.237.215.305.096A2.88 2.88 0 0 1 23 15.038v2.681a.28.28 0 0 1-.279.281.28.28 0 0 1-.278-.28z"
                    />
                  </svg>
                </div>
                <div className="Helvetica xs-border rounded xs-px1 xs-pt1 xs-inline-block xs-relative xs-align-middle xs-border-gray-light-mid xs-fill-gray-lighter">
                  <svg
                    className="xs-svgfill-black xs-icon-size-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <title>icon-last-chance</title>
                    <g fillRule="nonzero">
                      <path d="M15.165 9.584L15.712 9l.373.325c.04.026.08.039.12.039a.165.165 0 0 0 .133-.065c.066-.078.066-.182-.014-.247l-.506-.429-.52-.441c-.08-.065-.186-.065-.252.013-.067.078-.067.182.013.247l.373.324-.546.598a4.911 4.911 0 0 0-2.092-.883v-.845h.04c.507 0 .906-.363.906-.818 0-.441-.413-.818-.906-.818h-1.811c-.506 0-.906.364-.906.818 0 .455.413.818.906.818h.04v.845C8.758 8.87 7 10.83 7 13.195 7 15.845 9.211 18 11.929 18c2.717 0 4.928-2.156 4.928-4.805 0-1.442-.653-2.727-1.692-3.61zM11.023 7.26c-.307 0-.546-.195-.546-.455 0-.247.24-.454.546-.454h1.825c.306 0 .546.207.546.454 0 .247-.24.455-.546.455h-1.825zm1.412.363v.793c-.173-.013-.333-.026-.506-.026-.174 0-.347.013-.507.026v-.793h1.013zm-.506 10.026c-2.518 0-4.57-2-4.57-4.454 0-2.455 2.052-4.455 4.57-4.455 2.517 0 4.568 2 4.568 4.455 0 2.454-2.05 4.454-4.568 4.454z" />
                      <path d="M11.929 9.761c-1.913 0-3.469 1.527-3.469 3.403 0 1.876 1.556 3.403 3.469 3.403 1.912 0 3.468-1.527 3.468-3.403 0-1.876-1.556-3.403-3.468-3.403zm2.32 5.435l-.395-.401a.186.186 0 0 0-.25 0 .177.177 0 0 0 0 .245l.408.401c-.514.44-1.16.725-1.886.764v-.557a.179.179 0 0 0-.184-.18.179.179 0 0 0-.185.18v.557a3.143 3.143 0 0 1-1.886-.764l.41-.4a.177.177 0 0 0 0-.246.186.186 0 0 0-.251 0l-.396.4a3.023 3.023 0 0 1-.778-1.85h.567a.179.179 0 0 0 .185-.18.179.179 0 0 0-.185-.182h-.567c.04-.712.33-1.346.778-1.85l.396.4c.04.04.079.053.131.053a.19.19 0 0 0 .132-.052.177.177 0 0 0 0-.246l-.395-.401a3.143 3.143 0 0 1 1.886-.764v.557c0 .103.079.181.184.181a.179.179 0 0 0 .185-.181v-.557a3.143 3.143 0 0 1 1.886.764l-.41.401a.177.177 0 0 0 0 .246c.04.039.08.052.133.052a.19.19 0 0 0 .131-.052l.41-.401c.448.504.738 1.138.777 1.85h-.567a.179.179 0 0 0-.184.181c-.053.104.026.181.132.181h.567a3.023 3.023 0 0 1-.778 1.85z" />
                      <path d="M13.507 11.58a.21.21 0 0 0-.28 0l-1.09 1.115v-1.14c0-.104-.084-.182-.195-.182-.112 0-.196.078-.196.182v1.607c0 .078.042.142.126.168a.134.134 0 0 0 .07.013.26.26 0 0 0 .14-.052l1.439-1.464c.07-.078.07-.182-.014-.246z" />
                    </g>
                  </svg>
                </div>
                <div className="Helvetica xs-border rounded xs-px1 xs-pt1 xs-inline-block xs-relative xs-align-middle xs-border-gray-light-mid xs-fill-gray-lighter">
                  <svg
                    className="xs-svgfill-black xs-icon-size-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <title>icon-offer</title>
                    <g fillRule="evenodd">
                      <path d="M16.578 7.386v2.839c0 .28-.11.542-.308.74l-5.691 5.671a.221.221 0 0 1-.312 0l-3.814-3.8a.218.218 0 0 1 0-.31l5.692-5.671c.199-.198.462-.307.743-.307h2.847c.32 0 .599.179.742.44m.322-.218a1.233 1.233 0 0 0-1.064-.61h-2.847c-.385 0-.746.15-1.018.42l-5.692 5.672a.602.602 0 0 0 0 .858l3.814 3.8a.609.609 0 0 0 .862 0l5.691-5.671c.272-.271.422-.631.422-1.014V7.388c0-.084-.009-.166-.025-.245" />
                      <path d="M13.688 10.01a.686.686 0 1 1 0-1.371.686.686 0 0 1 0 1.371m0-1.828a1.143 1.143 0 1 0 0 2.286 1.143 1.143 0 0 0 0-2.286" />
                    </g>
                  </svg>
                </div>
                <div className="Helvetica xs-border rounded xs-px1 xs-pt1 xs-inline-block xs-relative xs-align-middle xs-border-gray-light-mid xs-fill-gray-lighter">
                  <svg
                    className="xs-svgfill-black xs-icon-size-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <title>icon-new</title>
                    <path
                      fillRule="nonzero"
                      d="M12.5 16.402l1.704 1.15c.05.035.115.044.173.026a.194.194 0 0 0 .124-.118l.678-1.898 2.079-.037a.199.199 0 0 0 .155-.078.185.185 0 0 0 .029-.166l-.606-1.92 1.659-1.21a.188.188 0 0 0 .077-.151.188.188 0 0 0-.077-.15l-1.659-1.21.606-1.921a.185.185 0 0 0-.03-.166.199.199 0 0 0-.154-.078l-2.079-.037-.678-1.898a.193.193 0 0 0-.124-.118.203.203 0 0 0-.173.025L12.5 7.598l-1.704-1.151a.203.203 0 0 0-.173-.025.194.194 0 0 0-.124.118L9.82 8.438l-2.079.037a.199.199 0 0 0-.155.078.185.185 0 0 0-.029.166l.605 1.92-1.658 1.21a.188.188 0 0 0-.077.15c0 .06.029.116.077.152l1.659 1.21-.606 1.92a.185.185 0 0 0 .03.166.199.199 0 0 0 .154.078l2.079.037.678 1.898c.02.056.066.1.124.118a.202.202 0 0 0 .173-.025l1.704-1.151zM14.316 18a.636.636 0 0 1-.357-.109l-1.459-.985-1.459.985a.645.645 0 0 1-.55.08.616.616 0 0 1-.397-.377l-.58-1.625-1.78-.031a.634.634 0 0 1-.492-.248.588.588 0 0 1-.093-.53l.519-1.644-1.42-1.036A.598.598 0 0 1 6 12c0-.188.093-.367.248-.48l1.42-1.036-.519-1.645a.588.588 0 0 1 .092-.53.634.634 0 0 1 .493-.247l1.78-.031.58-1.626a.617.617 0 0 1 .397-.376.645.645 0 0 1 .55.08l1.459.985 1.459-.985a.646.646 0 0 1 .55-.08.617.617 0 0 1 .397.376l.58 1.626 1.78.031a.634.634 0 0 1 .493.248c.114.152.148.35.092.53l-.518 1.644 1.42 1.036A.598.598 0 0 1 19 12a.598.598 0 0 1-.248.48l-1.42 1.036.519 1.645a.588.588 0 0 1-.092.529.633.633 0 0 1-.493.248l-1.78.031-.58 1.625a.617.617 0 0 1-.59.406z"
                    />
                  </svg>
                </div>
              </div>
              <div className="sm-float-right xs-text-center">
                <a
                  href="#"
                  className="Helvetica bold xs-px6 xs-py2 xs-text-8 xs-line-height-9 xs-fill-black \n                             xs-border squared xs-border-black xs-text-white caps xs-letter-spacing-3 \n                             xs-inline-block xs-relative xs-t5 sm-t0  xs-hover--fill-charcoal xs-hover--border-charcoal"
                >
                  Book
                </a>
              </div>
            </div>
          </article>
        </div>
        <div
          style={{
            maxWidth: "1170px"
          }}
          className="xs-flex xs-justify-between xs-mnx2 xs-pt9 list-card"
        >
          <article className="listCard xs-col-12 sm-col-8 sm-offset-2">
            <a href="#">
              <div className="listImg noImg xs-col-12 md-col-1 xs-float-left xs-relative xs-z1">
                <div className="number Helvetica xs-absolute xs-text-center xs-z1 xs-text-4 xs-line-height-2 xs-fill-black xs-text-white squared sm-full-width xs-px3">
                  1
                </div>
              </div>
            </a>
            <div className="card-content sm-col-12 md-col-11 xs-p3 sm-p4 xs-fill-white xs-float-left xs-box-shadow-light xs-relative">
              <a href="#"></a>
              <a href="#"></a>
              <header>
                <a href="#">
                  <span className="category things-to-do FranklinGothic xs-text-8 xs-text-black xs-border-bottom border-2 border-green xs-mb2 xs-inline-block">
                    Things to do
                  </span>
                </a>
                <div className="xs-flex">
                  <a href="#"></a>
                  <a
                    href="#"
                    className="xs-col-11 xs-block xs-text-black FranklinGothic xs-text-5 sm-text-3 xs-line-height-5 xs-pr6"
                  >
                    Lorem ipsum dolor sit amet
                  </a>
                  <div className="xs-float-right xs-display-inline xs-col-1">
                    <svg
                      className="xs-icon-size-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <title>icon-chevron-right</title>
                      <path
                        fillRule="nonzero"
                        d="M15.62 11.43l-5.24-5.196c-.316-.312-.828-.312-1.144 0-.315.313-.315.82 0 1.133L13.91 12l-4.674 4.633c-.315.312-.315.82 0 1.133.316.312.828.312 1.143 0l5.24-5.196c.16-.158.24-.365.237-.568 0-.21-.077-.414-.236-.57z"
                      />
                    </svg>
                  </div>
                </div>
              </header>
              <div className="to-says sm-mb1 xs-items-center xs-flex xs-line-height-7 sm-line-height-9 xs-text-8">
                <div className="FranklinGothic xs-text-8 bold xs-float-left caps xs-mr4">
                  Time Out says
                </div>
                <div
                  className="rating rating--4 xs-relative nowrap xs-inline-block xs-text-red xs-ml1"
                  title="4 out of 5 stars"
                ></div>
              </div>
              <div className="info-wrapper xs-mb3">
                <div className="sm-mb1 xs-flex xs-items-center xs-line-height-6 xs-mnt1">
                  <svg
                    className="xs-svgfill-red xs-icon-size-2 xs-mnl2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <title>icon-calendar</title>
                    <path
                      fill="#1A1A1A"
                      fillRule="nonzero"
                      d="M17.566 7.969a.902.902 0 0 0-.64-.255h-.91v-.643c0-.294-.112-.546-.335-.756A1.131 1.131 0 0 0 14.877 6h-.455c-.313 0-.58.105-.804.315-.223.21-.334.462-.334.756v.643h-2.731v-.643c0-.294-.112-.546-.335-.756A1.131 1.131 0 0 0 9.414 6H8.96c-.313 0-.58.105-.804.315-.223.21-.334.462-.334.756v.643h-.91a.903.903 0 0 0-.64.255.8.8 0 0 0-.271.603v8.57c0 .233.09.434.27.604.18.17.394.254.64.254h10.016c.246 0 .46-.085.64-.254.18-.17.27-.371.27-.603V8.57a.801.801 0 0 0-.27-.602zm-3.548-1.043c0-.058.018-.106.054-.143a.182.182 0 0 1 .137-.056h.382c.056 0 .101.019.137.056a.197.197 0 0 1 .054.143V8.71a.197.197 0 0 1-.054.142.183.183 0 0 1-.137.056h-.382a.182.182 0 0 1-.137-.056.197.197 0 0 1-.054-.142V6.926zm-5.345 0c0-.058.018-.106.053-.143a.182.182 0 0 1 .138-.056h.381c.056 0 .102.019.138.056a.197.197 0 0 1 .053.143V8.71a.197.197 0 0 1-.053.142.182.182 0 0 1-.138.056h-.381a.182.182 0 0 1-.138-.056.198.198 0 0 1-.053-.142V6.926zm8.018 10.347H6.764v-6.91h9.927v6.91z"
                    />
                  </svg>
                  <span className="Helvetica bold xs-text-9 sm-text-8 xs-inline-block">
                    Until the end of time
                  </span>
                </div>
                <div className="Georgia xs-text-8 sm-text-7 description-wrapper xs-relative">
                  <input
                    type="checkbox"
                    className="xs-absolute xs-overflow-hidden"
                    id="read_more2"
                    role="button"
                  />
                  <label
                    htmlFor="read_more2"
                    className="js-toggle-label Helvetica bold xs-text-red xs-absolute xs-bn5 xs-z1 decoration-underline"                    
                    data-hide="Read Less"
                    data-show="Read More"
                  />
                  <div className="infoTarget xs-line-height-7 xs-height-fit xs-height-fit-transition xs-text-black xs-line-clamp-3">
                    <span className="bold">What is it -</span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    <br />
                    <span className="bold">Why Go? -</span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus scelerisque mauris sapien, ac varius nulla aliquam
                    in. Mauris eget porta libero. Donec finibus at sem vel
                    ultricies. Fusce efficitur quis turpis non tincidunt. Nam
                    pharetra luctus porta. Aliquam erat volutpat. Nulla
                    imperdiet tellus vitae commodo placerat. Sed sit amet nisl
                    eget lacus ullamcorper fringilla. Vivamus nec accumsan
                    metus. Donec in.
                  </div>
                </div>
                {}
              </div>
              <div className="xs-pt4 xs-flex xs-items-center xs-mb3">
                <svg
                  className="xs-svgfill-gray xs-icon-size-5 xs-mnl2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <title>icon-location-pin</title>
                  <path
                    fillRule="nonzero"
                    d="M16.243 4.757c-2.343-2.343-6.142-2.343-8.486 0-2.11 2.11-2.35 6.087-.557 8.476l4.8 6.93 4.8-6.93c1.792-2.39 1.554-6.365-.557-8.476zm-4.185 6.165c-1.093 0-1.98-.887-1.98-1.98 0-1.094.887-1.98 1.98-1.98 1.094 0 1.98.886 1.98 1.98 0 1.093-.886 1.98-1.98 1.98z"
                  />
                </svg>
                <span className="Helvetica bold sm-text-8 xs-text-9 xs-line-height-10 xs-inline-block xs-mr1">
                  Some City, Some Country
                </span>
              </div>
              <div className="tags sm-float-left ">
                <div className="Helvetica xs-border rounded xs-px1 xs-pt1 xs-inline-block xs-relative xs-align-middle xs-border-gray-light-mid xs-fill-gray-lighter">
                  <svg
                    className="xs-svgfill-black xs-icon-size-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <title>icon-new</title>
                    <path
                      fillRule="nonzero"
                      d="M12.5 16.402l1.704 1.15c.05.035.115.044.173.026a.194.194 0 0 0 .124-.118l.678-1.898 2.079-.037a.199.199 0 0 0 .155-.078.185.185 0 0 0 .029-.166l-.606-1.92 1.659-1.21a.188.188 0 0 0 .077-.151.188.188 0 0 0-.077-.15l-1.659-1.21.606-1.921a.185.185 0 0 0-.03-.166.199.199 0 0 0-.154-.078l-2.079-.037-.678-1.898a.193.193 0 0 0-.124-.118.203.203 0 0 0-.173.025L12.5 7.598l-1.704-1.151a.203.203 0 0 0-.173-.025.194.194 0 0 0-.124.118L9.82 8.438l-2.079.037a.199.199 0 0 0-.155.078.185.185 0 0 0-.029.166l.605 1.92-1.658 1.21a.188.188 0 0 0-.077.15c0 .06.029.116.077.152l1.659 1.21-.606 1.92a.185.185 0 0 0 .03.166.199.199 0 0 0 .154.078l2.079.037.678 1.898c.02.056.066.1.124.118a.202.202 0 0 0 .173-.025l1.704-1.151zM14.316 18a.636.636 0 0 1-.357-.109l-1.459-.985-1.459.985a.645.645 0 0 1-.55.08.616.616 0 0 1-.397-.377l-.58-1.625-1.78-.031a.634.634 0 0 1-.492-.248.588.588 0 0 1-.093-.53l.519-1.644-1.42-1.036A.598.598 0 0 1 6 12c0-.188.093-.367.248-.48l1.42-1.036-.519-1.645a.588.588 0 0 1 .092-.53.634.634 0 0 1 .493-.247l1.78-.031.58-1.626a.617.617 0 0 1 .397-.376.645.645 0 0 1 .55.08l1.459.985 1.459-.985a.646.646 0 0 1 .55-.08.617.617 0 0 1 .397.376l.58 1.626 1.78.031a.634.634 0 0 1 .493.248c.114.152.148.35.092.53l-.518 1.644 1.42 1.036A.598.598 0 0 1 19 12a.598.598 0 0 1-.248.48l-1.42 1.036.519 1.645a.588.588 0 0 1-.092.529.633.633 0 0 1-.493.248l-1.78.031-.58 1.625a.617.617 0 0 1-.59.406z"
                    />
                  </svg>
                </div>
              </div>
              <div className="sm-float-right xs-text-center">
                <a
                  href="#"
                  className="Helvetica bold xs-px6 xs-py2 xs-text-8 xs-line-height-9 xs-fill-black \n                           xs-border squared xs-border-black xs-text-white caps xs-letter-spacing-3 \n                           xs-inline-block xs-relative xs-t5 sm-t0  xs-hover--fill-charcoal xs-hover--border-charcoal"
                >
                  Book
                </a>
              </div>
            </div>
          </article>
        </div>
        <div id="Zone title" className="component">
          <h2 className="styleguide-h2">Zone title</h2>
          <div className="xs-border-bottom xs-border-black border-2">
            <h2 className="FranklinGothic bold xs-text-3 xs-mb1">
              The Best of London
            </h2>
          </div>
        </div>
        <div id="Filters Zone" className="component">
          <h2 className="styleguide-h2">Filters Zone</h2>
          <div id="filters" className="xs-mt4 xs-overflow-scroll xs-nowrap">
            <div className="Helvetica bold xs-text-8 xs-line-height-9 xs-border rounded border-2 xs-border-black \n                xs-text-black xs-px3 xs-py2 caps xs-inline-block xs-relative xs-align-middle">
              Free
            </div>
            <div className="Helvetica bold rounded xs-text-8 xs-fill-white caps xs-py1\n                         xs-border border-2 xs-border-black xs-text-black xs-inline-flex">
              <span>
                <svg
                  className="xs-svgfill-black xs-icon-size-2 xs-align-middle"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <title>icon-offer</title>
                  <g fillRule="evenodd">
                    <path d="M16.578 7.386v2.839c0 .28-.11.542-.308.74l-5.691 5.671a.221.221 0 0 1-.312 0l-3.814-3.8a.218.218 0 0 1 0-.31l5.692-5.671c.199-.198.462-.307.743-.307h2.847c.32 0 .599.179.742.44m.322-.218a1.233 1.233 0 0 0-1.064-.61h-2.847c-.385 0-.746.15-1.018.42l-5.692 5.672a.602.602 0 0 0 0 .858l3.814 3.8a.609.609 0 0 0 .862 0l5.691-5.671c.272-.271.422-.631.422-1.014V7.388c0-.084-.009-.166-.025-.245" />
                    <path d="M13.688 10.01a.686.686 0 1 1 0-1.371.686.686 0 0 1 0 1.371m0-1.828a1.143 1.143 0 1 0 0 2.286 1.143 1.143 0 0 0 0-2.286" />
                  </g>
                </svg>
              </span>
              <div className="xs-line-height-4 xs-pr3">Offer</div>
            </div>
            <div className="Helvetica bold rounded xs-text-8 xs-fill-white caps xs-py1\n                         xs-border border-2 xs-border-black xs-text-black xs-inline-flex">
              <span>
                <svg
                  className="xs-svgfill-black xs-icon-size-2 xs-align-middle"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <title>icon-new</title>
                  <path
                    fillRule="nonzero"
                    d="M12.5 16.402l1.704 1.15c.05.035.115.044.173.026a.194.194 0 0 0 .124-.118l.678-1.898 2.079-.037a.199.199 0 0 0 .155-.078.185.185 0 0 0 .029-.166l-.606-1.92 1.659-1.21a.188.188 0 0 0 .077-.151.188.188 0 0 0-.077-.15l-1.659-1.21.606-1.921a.185.185 0 0 0-.03-.166.199.199 0 0 0-.154-.078l-2.079-.037-.678-1.898a.193.193 0 0 0-.124-.118.203.203 0 0 0-.173.025L12.5 7.598l-1.704-1.151a.203.203 0 0 0-.173-.025.194.194 0 0 0-.124.118L9.82 8.438l-2.079.037a.199.199 0 0 0-.155.078.185.185 0 0 0-.029.166l.605 1.92-1.658 1.21a.188.188 0 0 0-.077.15c0 .06.029.116.077.152l1.659 1.21-.606 1.92a.185.185 0 0 0 .03.166.199.199 0 0 0 .154.078l2.079.037.678 1.898c.02.056.066.1.124.118a.202.202 0 0 0 .173-.025l1.704-1.151zM14.316 18a.636.636 0 0 1-.357-.109l-1.459-.985-1.459.985a.645.645 0 0 1-.55.08.616.616 0 0 1-.397-.377l-.58-1.625-1.78-.031a.634.634 0 0 1-.492-.248.588.588 0 0 1-.093-.53l.519-1.644-1.42-1.036A.598.598 0 0 1 6 12c0-.188.093-.367.248-.48l1.42-1.036-.519-1.645a.588.588 0 0 1 .092-.53.634.634 0 0 1 .493-.247l1.78-.031.58-1.626a.617.617 0 0 1 .397-.376.645.645 0 0 1 .55.08l1.459.985 1.459-.985a.646.646 0 0 1 .55-.08.617.617 0 0 1 .397.376l.58 1.626 1.78.031a.634.634 0 0 1 .493.248c.114.152.148.35.092.53l-.518 1.644 1.42 1.036A.598.598 0 0 1 19 12a.598.598 0 0 1-.248.48l-1.42 1.036.519 1.645a.588.588 0 0 1-.092.529.633.633 0 0 1-.493.248l-1.78.031-.58 1.625a.617.617 0 0 1-.59.406z"
                  />
                </svg>
              </span>
              <div className="xs-line-height-4 xs-pr3">New</div>
            </div>
            <div className="Helvetica bold rounded xs-text-8 xs-fill-white caps xs-py1\n                         xs-border border-2 xs-border-black xs-text-black xs-inline-flex">
              <span>
                <svg
                  className="xs-svgfill-black xs-icon-size-2 xs-align-middle"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <title>icon-last-chance</title>
                  <g fillRule="nonzero">
                    <path d="M15.165 9.584L15.712 9l.373.325c.04.026.08.039.12.039a.165.165 0 0 0 .133-.065c.066-.078.066-.182-.014-.247l-.506-.429-.52-.441c-.08-.065-.186-.065-.252.013-.067.078-.067.182.013.247l.373.324-.546.598a4.911 4.911 0 0 0-2.092-.883v-.845h.04c.507 0 .906-.363.906-.818 0-.441-.413-.818-.906-.818h-1.811c-.506 0-.906.364-.906.818 0 .455.413.818.906.818h.04v.845C8.758 8.87 7 10.83 7 13.195 7 15.845 9.211 18 11.929 18c2.717 0 4.928-2.156 4.928-4.805 0-1.442-.653-2.727-1.692-3.61zM11.023 7.26c-.307 0-.546-.195-.546-.455 0-.247.24-.454.546-.454h1.825c.306 0 .546.207.546.454 0 .247-.24.455-.546.455h-1.825zm1.412.363v.793c-.173-.013-.333-.026-.506-.026-.174 0-.347.013-.507.026v-.793h1.013zm-.506 10.026c-2.518 0-4.57-2-4.57-4.454 0-2.455 2.052-4.455 4.57-4.455 2.517 0 4.568 2 4.568 4.455 0 2.454-2.05 4.454-4.568 4.454z" />
                    <path d="M11.929 9.761c-1.913 0-3.469 1.527-3.469 3.403 0 1.876 1.556 3.403 3.469 3.403 1.912 0 3.468-1.527 3.468-3.403 0-1.876-1.556-3.403-3.468-3.403zm2.32 5.435l-.395-.401a.186.186 0 0 0-.25 0 .177.177 0 0 0 0 .245l.408.401c-.514.44-1.16.725-1.886.764v-.557a.179.179 0 0 0-.184-.18.179.179 0 0 0-.185.18v.557a3.143 3.143 0 0 1-1.886-.764l.41-.4a.177.177 0 0 0 0-.246.186.186 0 0 0-.251 0l-.396.4a3.023 3.023 0 0 1-.778-1.85h.567a.179.179 0 0 0 .185-.18.179.179 0 0 0-.185-.182h-.567c.04-.712.33-1.346.778-1.85l.396.4c.04.04.079.053.131.053a.19.19 0 0 0 .132-.052.177.177 0 0 0 0-.246l-.395-.401a3.143 3.143 0 0 1 1.886-.764v.557c0 .103.079.181.184.181a.179.179 0 0 0 .185-.181v-.557a3.143 3.143 0 0 1 1.886.764l-.41.401a.177.177 0 0 0 0 .246c.04.039.08.052.133.052a.19.19 0 0 0 .131-.052l.41-.401c.448.504.738 1.138.777 1.85h-.567a.179.179 0 0 0-.184.181c-.053.104.026.181.132.181h.567a3.023 3.023 0 0 1-.778 1.85z" />
                    <path d="M13.507 11.58a.21.21 0 0 0-.28 0l-1.09 1.115v-1.14c0-.104-.084-.182-.195-.182-.112 0-.196.078-.196.182v1.607c0 .078.042.142.126.168a.134.134 0 0 0 .07.013.26.26 0 0 0 .14-.052l1.439-1.464c.07-.078.07-.182-.014-.246z" />
                  </g>
                </svg>
              </span>
              <div className="xs-line-height-4 xs-pr3">Last Chance</div>
            </div>
            <div className="Helvetica bold rounded xs-text-8 xs-fill-white caps xs-py1\n                         xs-border border-2 xs-border-black xs-text-black xs-inline-flex">
              <span className="xs-px2">
                <svg
                  className="xs-svgfill-black xs-icon-size-2 xs-align-middle"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <title>icon-family-friendly</title>
                  <path
                    fillRule="evenodd"
                    d="M19.001 7.56a2.285 2.285 0 0 0-2.267 2.112c-.048.61.144 1.203.539 1.669.392.463.94.745 1.544.795h.1a2.23 2.23 0 0 0 1.566-.54c.463-.399.744-.953.791-1.563a2.29 2.29 0 0 0-2.273-2.472m-13.009 0a2.284 2.284 0 0 0-2.267 2.112 2.287 2.287 0 0 0 2.083 2.463h.091a2.29 2.29 0 0 0 .093-4.576m6.507 2.61a1.65 1.65 0 0 0-.136 3.291l.141.002c.396 0 .762-.135 1.06-.39a1.64 1.64 0 0 0 .569-1.124 1.646 1.646 0 0 0-1.634-1.779m9.944 7.55v-2.682c0-1.29-1.043-2.34-2.325-2.34H19.1a2.15 2.15 0 0 1-.287 0h-.923a2.335 2.335 0 0 0-2.325 2.34v2.681a.28.28 0 0 1-.279.281.28.28 0 0 1-.278-.28v-2.011c0-.93-.751-1.686-1.675-1.686h-.759a1.315 1.315 0 0 1-.216 0h-.694c-.923 0-1.674.756-1.674 1.686v2.01a.28.28 0 0 1-.279.281.28.28 0 0 1-.278-.28v-2.682c0-1.29-1.043-2.34-2.325-2.34H6.082a.615.615 0 0 0-.063.005c-.085.003-.15 0-.214-.005h-.923a2.336 2.336 0 0 0-2.325 2.34v2.681a.28.28 0 0 1-.279.281.28.28 0 0 1-.278-.28v-2.682a2.88 2.88 0 0 1 2.043-2.76l.306-.095-.286-.259a2.36 2.36 0 0 1-.223-.219 2.844 2.844 0 0 1-.67-2.077c.06-.76.41-1.45.985-1.945a2.79 2.79 0 0 1 2.063-.674c.755.06 1.442.412 1.932.991.492.58.73 1.317.67 2.077a2.849 2.849 0 0 1-.932 1.893l-.237.215.305.095c.85.267 1.542.925 1.848 1.762l.098.266.2-.199c.211-.208.461-.371.743-.485l.248-.1-.183-.195a2.19 2.19 0 0 1-.599-1.683c.09-1.143 1.045-2.038 2.176-2.038a2.176 2.176 0 0 1 1.682.776 2.204 2.204 0 0 1-.08 2.944l-.185.196.25.1c.282.113.532.276.743.485l.201.199.097-.266a2.902 2.902 0 0 1 1.857-1.764l.306-.095-.286-.26a2.298 2.298 0 0 1-.223-.218 2.843 2.843 0 0 1-.67-2.077c.06-.76.41-1.45.985-1.945a2.793 2.793 0 0 1 2.064-.674c.754.06 1.44.412 1.93.991.493.58.731 1.317.671 2.077a2.843 2.843 0 0 1-.934 1.892l-.237.215.305.096A2.88 2.88 0 0 1 23 15.038v2.681a.28.28 0 0 1-.279.281.28.28 0 0 1-.278-.28z"
                  />
                </svg>
              </span>
              <div className="xs-line-height-4 xs-pr3">Family Friendly</div>
            </div>
            <br />
            <br />
            <div className="Helvetica bold xs-text-8 xs-line-height-9 xs-border rounded border-2 xs-border-black \n                xs-text-white xs-fill-black xs-px3 xs-py2 caps xs-inline-block xs-relative xs-align-middle">
              Free
            </div>
            <div className="Helvetica bold rounded xs-text-8 xs-fill-black caps xs-py1\n                         xs-border border-2 xs-border-black xs-text-black xs-inline-flex">
              <span>
                <svg
                  className="xs-svgfill-white xs-icon-size-2 xs-align-middle"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <title>icon-offer</title>
                  <g fillRule="evenodd">
                    <path d="M16.578 7.386v2.839c0 .28-.11.542-.308.74l-5.691 5.671a.221.221 0 0 1-.312 0l-3.814-3.8a.218.218 0 0 1 0-.31l5.692-5.671c.199-.198.462-.307.743-.307h2.847c.32 0 .599.179.742.44m.322-.218a1.233 1.233 0 0 0-1.064-.61h-2.847c-.385 0-.746.15-1.018.42l-5.692 5.672a.602.602 0 0 0 0 .858l3.814 3.8a.609.609 0 0 0 .862 0l5.691-5.671c.272-.271.422-.631.422-1.014V7.388c0-.084-.009-.166-.025-.245" />
                    <path d="M13.688 10.01a.686.686 0 1 1 0-1.371.686.686 0 0 1 0 1.371m0-1.828a1.143 1.143 0 1 0 0 2.286 1.143 1.143 0 0 0 0-2.286" />
                  </g>
                </svg>
              </span>
              <div className="xs-line-height-4 xs-pr3 xs-text-white">Offer</div>
            </div>
            <div className="Helvetica bold rounded xs-text-8 xs-fill-black caps xs-py1\n                         xs-border border-2 xs-border-black xs-text-black xs-inline-flex">
              <span>
                <svg
                  className="xs-svgfill-white xs-icon-size-2 xs-align-middle"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <title>icon-new</title>
                  <path
                    fillRule="nonzero"
                    d="M12.5 16.402l1.704 1.15c.05.035.115.044.173.026a.194.194 0 0 0 .124-.118l.678-1.898 2.079-.037a.199.199 0 0 0 .155-.078.185.185 0 0 0 .029-.166l-.606-1.92 1.659-1.21a.188.188 0 0 0 .077-.151.188.188 0 0 0-.077-.15l-1.659-1.21.606-1.921a.185.185 0 0 0-.03-.166.199.199 0 0 0-.154-.078l-2.079-.037-.678-1.898a.193.193 0 0 0-.124-.118.203.203 0 0 0-.173.025L12.5 7.598l-1.704-1.151a.203.203 0 0 0-.173-.025.194.194 0 0 0-.124.118L9.82 8.438l-2.079.037a.199.199 0 0 0-.155.078.185.185 0 0 0-.029.166l.605 1.92-1.658 1.21a.188.188 0 0 0-.077.15c0 .06.029.116.077.152l1.659 1.21-.606 1.92a.185.185 0 0 0 .03.166.199.199 0 0 0 .154.078l2.079.037.678 1.898c.02.056.066.1.124.118a.202.202 0 0 0 .173-.025l1.704-1.151zM14.316 18a.636.636 0 0 1-.357-.109l-1.459-.985-1.459.985a.645.645 0 0 1-.55.08.616.616 0 0 1-.397-.377l-.58-1.625-1.78-.031a.634.634 0 0 1-.492-.248.588.588 0 0 1-.093-.53l.519-1.644-1.42-1.036A.598.598 0 0 1 6 12c0-.188.093-.367.248-.48l1.42-1.036-.519-1.645a.588.588 0 0 1 .092-.53.634.634 0 0 1 .493-.247l1.78-.031.58-1.626a.617.617 0 0 1 .397-.376.645.645 0 0 1 .55.08l1.459.985 1.459-.985a.646.646 0 0 1 .55-.08.617.617 0 0 1 .397.376l.58 1.626 1.78.031a.634.634 0 0 1 .493.248c.114.152.148.35.092.53l-.518 1.644 1.42 1.036A.598.598 0 0 1 19 12a.598.598 0 0 1-.248.48l-1.42 1.036.519 1.645a.588.588 0 0 1-.092.529.633.633 0 0 1-.493.248l-1.78.031-.58 1.625a.617.617 0 0 1-.59.406z"
                  />
                </svg>
              </span>
              <div className="xs-line-height-4 xs-pr3 xs-text-white">New</div>
            </div>
            <div className="Helvetica bold rounded xs-text-8 xs-fill-black caps xs-py1\n                         xs-border border-2 xs-border-black xs-text-black xs-inline-flex">
              <span>
                <svg
                  className="xs-svgfill-white xs-icon-size-2 xs-align-middle"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <title>icon-last-chance</title>
                  <g fillRule="nonzero">
                    <path d="M15.165 9.584L15.712 9l.373.325c.04.026.08.039.12.039a.165.165 0 0 0 .133-.065c.066-.078.066-.182-.014-.247l-.506-.429-.52-.441c-.08-.065-.186-.065-.252.013-.067.078-.067.182.013.247l.373.324-.546.598a4.911 4.911 0 0 0-2.092-.883v-.845h.04c.507 0 .906-.363.906-.818 0-.441-.413-.818-.906-.818h-1.811c-.506 0-.906.364-.906.818 0 .455.413.818.906.818h.04v.845C8.758 8.87 7 10.83 7 13.195 7 15.845 9.211 18 11.929 18c2.717 0 4.928-2.156 4.928-4.805 0-1.442-.653-2.727-1.692-3.61zM11.023 7.26c-.307 0-.546-.195-.546-.455 0-.247.24-.454.546-.454h1.825c.306 0 .546.207.546.454 0 .247-.24.455-.546.455h-1.825zm1.412.363v.793c-.173-.013-.333-.026-.506-.026-.174 0-.347.013-.507.026v-.793h1.013zm-.506 10.026c-2.518 0-4.57-2-4.57-4.454 0-2.455 2.052-4.455 4.57-4.455 2.517 0 4.568 2 4.568 4.455 0 2.454-2.05 4.454-4.568 4.454z" />
                    <path d="M11.929 9.761c-1.913 0-3.469 1.527-3.469 3.403 0 1.876 1.556 3.403 3.469 3.403 1.912 0 3.468-1.527 3.468-3.403 0-1.876-1.556-3.403-3.468-3.403zm2.32 5.435l-.395-.401a.186.186 0 0 0-.25 0 .177.177 0 0 0 0 .245l.408.401c-.514.44-1.16.725-1.886.764v-.557a.179.179 0 0 0-.184-.18.179.179 0 0 0-.185.18v.557a3.143 3.143 0 0 1-1.886-.764l.41-.4a.177.177 0 0 0 0-.246.186.186 0 0 0-.251 0l-.396.4a3.023 3.023 0 0 1-.778-1.85h.567a.179.179 0 0 0 .185-.18.179.179 0 0 0-.185-.182h-.567c.04-.712.33-1.346.778-1.85l.396.4c.04.04.079.053.131.053a.19.19 0 0 0 .132-.052.177.177 0 0 0 0-.246l-.395-.401a3.143 3.143 0 0 1 1.886-.764v.557c0 .103.079.181.184.181a.179.179 0 0 0 .185-.181v-.557a3.143 3.143 0 0 1 1.886.764l-.41.401a.177.177 0 0 0 0 .246c.04.039.08.052.133.052a.19.19 0 0 0 .131-.052l.41-.401c.448.504.738 1.138.777 1.85h-.567a.179.179 0 0 0-.184.181c-.053.104.026.181.132.181h.567a3.023 3.023 0 0 1-.778 1.85z" />
                    <path d="M13.507 11.58a.21.21 0 0 0-.28 0l-1.09 1.115v-1.14c0-.104-.084-.182-.195-.182-.112 0-.196.078-.196.182v1.607c0 .078.042.142.126.168a.134.134 0 0 0 .07.013.26.26 0 0 0 .14-.052l1.439-1.464c.07-.078.07-.182-.014-.246z" />
                  </g>
                </svg>
              </span>
              <div className="xs-line-height-4 xs-pr3 xs-text-white">
                Last Chance
              </div>
            </div>
            <div className="Helvetica bold rounded xs-text-8 xs-fill-black caps xs-py1\n                         xs-border border-2 xs-border-black xs-text-black xs-inline-flex">
              <span className="xs-px2">
                <svg
                  className="xs-svgfill-white xs-icon-size-2 xs-align-middle"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <title>icon-family-friendly</title>
                  <path
                    fillRule="evenodd"
                    d="M19.001 7.56a2.285 2.285 0 0 0-2.267 2.112c-.048.61.144 1.203.539 1.669.392.463.94.745 1.544.795h.1a2.23 2.23 0 0 0 1.566-.54c.463-.399.744-.953.791-1.563a2.29 2.29 0 0 0-2.273-2.472m-13.009 0a2.284 2.284 0 0 0-2.267 2.112 2.287 2.287 0 0 0 2.083 2.463h.091a2.29 2.29 0 0 0 .093-4.576m6.507 2.61a1.65 1.65 0 0 0-.136 3.291l.141.002c.396 0 .762-.135 1.06-.39a1.64 1.64 0 0 0 .569-1.124 1.646 1.646 0 0 0-1.634-1.779m9.944 7.55v-2.682c0-1.29-1.043-2.34-2.325-2.34H19.1a2.15 2.15 0 0 1-.287 0h-.923a2.335 2.335 0 0 0-2.325 2.34v2.681a.28.28 0 0 1-.279.281.28.28 0 0 1-.278-.28v-2.011c0-.93-.751-1.686-1.675-1.686h-.759a1.315 1.315 0 0 1-.216 0h-.694c-.923 0-1.674.756-1.674 1.686v2.01a.28.28 0 0 1-.279.281.28.28 0 0 1-.278-.28v-2.682c0-1.29-1.043-2.34-2.325-2.34H6.082a.615.615 0 0 0-.063.005c-.085.003-.15 0-.214-.005h-.923a2.336 2.336 0 0 0-2.325 2.34v2.681a.28.28 0 0 1-.279.281.28.28 0 0 1-.278-.28v-2.682a2.88 2.88 0 0 1 2.043-2.76l.306-.095-.286-.259a2.36 2.36 0 0 1-.223-.219 2.844 2.844 0 0 1-.67-2.077c.06-.76.41-1.45.985-1.945a2.79 2.79 0 0 1 2.063-.674c.755.06 1.442.412 1.932.991.492.58.73 1.317.67 2.077a2.849 2.849 0 0 1-.932 1.893l-.237.215.305.095c.85.267 1.542.925 1.848 1.762l.098.266.2-.199c.211-.208.461-.371.743-.485l.248-.1-.183-.195a2.19 2.19 0 0 1-.599-1.683c.09-1.143 1.045-2.038 2.176-2.038a2.176 2.176 0 0 1 1.682.776 2.204 2.204 0 0 1-.08 2.944l-.185.196.25.1c.282.113.532.276.743.485l.201.199.097-.266a2.902 2.902 0 0 1 1.857-1.764l.306-.095-.286-.26a2.298 2.298 0 0 1-.223-.218 2.843 2.843 0 0 1-.67-2.077c.06-.76.41-1.45.985-1.945a2.793 2.793 0 0 1 2.064-.674c.754.06 1.44.412 1.93.991.493.58.731 1.317.671 2.077a2.843 2.843 0 0 1-.934 1.892l-.237.215.305.096A2.88 2.88 0 0 1 23 15.038v2.681a.28.28 0 0 1-.279.281.28.28 0 0 1-.278-.28z"
                  />
                </svg>
              </span>
              <div className="xs-line-height-4 xs-pr3 xs-text-white">
                Family Friendly
              </div>
            </div>
          </div>
        </div>
        <div id="Tags Zone" className="component">
          <h2 className="styleguide-h2">Tags Zone</h2>
          <div id="filters" className="xs-mt4 xs-overflow-scroll xs-nowrap">
            <div className="Helvetica xs-text-8 xs-border rounded xs-px3 xs-py2 caps xs-inline-block xs-relative xs-align-middle xs-border-gray-light-mid xs-fill-gray-lighter">
              Free
            </div>
            <div className="Helvetica xs-border rounded xs-px1 xs-pt1 xs-inline-block xs-relative xs-align-middle xs-border-gray-light-mid xs-fill-gray-lighter">
              <svg
                className="xs-svgfill-black xs-icon-size-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <title>icon-family-friendly</title>
                <path
                  fillRule="evenodd"
                  d="M19.001 7.56a2.285 2.285 0 0 0-2.267 2.112c-.048.61.144 1.203.539 1.669.392.463.94.745 1.544.795h.1a2.23 2.23 0 0 0 1.566-.54c.463-.399.744-.953.791-1.563a2.29 2.29 0 0 0-2.273-2.472m-13.009 0a2.284 2.284 0 0 0-2.267 2.112 2.287 2.287 0 0 0 2.083 2.463h.091a2.29 2.29 0 0 0 .093-4.576m6.507 2.61a1.65 1.65 0 0 0-.136 3.291l.141.002c.396 0 .762-.135 1.06-.39a1.64 1.64 0 0 0 .569-1.124 1.646 1.646 0 0 0-1.634-1.779m9.944 7.55v-2.682c0-1.29-1.043-2.34-2.325-2.34H19.1a2.15 2.15 0 0 1-.287 0h-.923a2.335 2.335 0 0 0-2.325 2.34v2.681a.28.28 0 0 1-.279.281.28.28 0 0 1-.278-.28v-2.011c0-.93-.751-1.686-1.675-1.686h-.759a1.315 1.315 0 0 1-.216 0h-.694c-.923 0-1.674.756-1.674 1.686v2.01a.28.28 0 0 1-.279.281.28.28 0 0 1-.278-.28v-2.682c0-1.29-1.043-2.34-2.325-2.34H6.082a.615.615 0 0 0-.063.005c-.085.003-.15 0-.214-.005h-.923a2.336 2.336 0 0 0-2.325 2.34v2.681a.28.28 0 0 1-.279.281.28.28 0 0 1-.278-.28v-2.682a2.88 2.88 0 0 1 2.043-2.76l.306-.095-.286-.259a2.36 2.36 0 0 1-.223-.219 2.844 2.844 0 0 1-.67-2.077c.06-.76.41-1.45.985-1.945a2.79 2.79 0 0 1 2.063-.674c.755.06 1.442.412 1.932.991.492.58.73 1.317.67 2.077a2.849 2.849 0 0 1-.932 1.893l-.237.215.305.095c.85.267 1.542.925 1.848 1.762l.098.266.2-.199c.211-.208.461-.371.743-.485l.248-.1-.183-.195a2.19 2.19 0 0 1-.599-1.683c.09-1.143 1.045-2.038 2.176-2.038a2.176 2.176 0 0 1 1.682.776 2.204 2.204 0 0 1-.08 2.944l-.185.196.25.1c.282.113.532.276.743.485l.201.199.097-.266a2.902 2.902 0 0 1 1.857-1.764l.306-.095-.286-.26a2.298 2.298 0 0 1-.223-.218 2.843 2.843 0 0 1-.67-2.077c.06-.76.41-1.45.985-1.945a2.793 2.793 0 0 1 2.064-.674c.754.06 1.44.412 1.93.991.493.58.731 1.317.671 2.077a2.843 2.843 0 0 1-.934 1.892l-.237.215.305.096A2.88 2.88 0 0 1 23 15.038v2.681a.28.28 0 0 1-.279.281.28.28 0 0 1-.278-.28z"
                />
              </svg>
            </div>
            <div className="Helvetica xs-border rounded xs-px1 xs-pt1 xs-inline-block xs-relative xs-align-middle xs-border-gray-light-mid xs-fill-gray-lighter">
              <svg
                className="xs-svgfill-black xs-icon-size-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <title>icon-last-chance</title>
                <g fillRule="nonzero">
                  <path d="M15.165 9.584L15.712 9l.373.325c.04.026.08.039.12.039a.165.165 0 0 0 .133-.065c.066-.078.066-.182-.014-.247l-.506-.429-.52-.441c-.08-.065-.186-.065-.252.013-.067.078-.067.182.013.247l.373.324-.546.598a4.911 4.911 0 0 0-2.092-.883v-.845h.04c.507 0 .906-.363.906-.818 0-.441-.413-.818-.906-.818h-1.811c-.506 0-.906.364-.906.818 0 .455.413.818.906.818h.04v.845C8.758 8.87 7 10.83 7 13.195 7 15.845 9.211 18 11.929 18c2.717 0 4.928-2.156 4.928-4.805 0-1.442-.653-2.727-1.692-3.61zM11.023 7.26c-.307 0-.546-.195-.546-.455 0-.247.24-.454.546-.454h1.825c.306 0 .546.207.546.454 0 .247-.24.455-.546.455h-1.825zm1.412.363v.793c-.173-.013-.333-.026-.506-.026-.174 0-.347.013-.507.026v-.793h1.013zm-.506 10.026c-2.518 0-4.57-2-4.57-4.454 0-2.455 2.052-4.455 4.57-4.455 2.517 0 4.568 2 4.568 4.455 0 2.454-2.05 4.454-4.568 4.454z" />
                  <path d="M11.929 9.761c-1.913 0-3.469 1.527-3.469 3.403 0 1.876 1.556 3.403 3.469 3.403 1.912 0 3.468-1.527 3.468-3.403 0-1.876-1.556-3.403-3.468-3.403zm2.32 5.435l-.395-.401a.186.186 0 0 0-.25 0 .177.177 0 0 0 0 .245l.408.401c-.514.44-1.16.725-1.886.764v-.557a.179.179 0 0 0-.184-.18.179.179 0 0 0-.185.18v.557a3.143 3.143 0 0 1-1.886-.764l.41-.4a.177.177 0 0 0 0-.246.186.186 0 0 0-.251 0l-.396.4a3.023 3.023 0 0 1-.778-1.85h.567a.179.179 0 0 0 .185-.18.179.179 0 0 0-.185-.182h-.567c.04-.712.33-1.346.778-1.85l.396.4c.04.04.079.053.131.053a.19.19 0 0 0 .132-.052.177.177 0 0 0 0-.246l-.395-.401a3.143 3.143 0 0 1 1.886-.764v.557c0 .103.079.181.184.181a.179.179 0 0 0 .185-.181v-.557a3.143 3.143 0 0 1 1.886.764l-.41.401a.177.177 0 0 0 0 .246c.04.039.08.052.133.052a.19.19 0 0 0 .131-.052l.41-.401c.448.504.738 1.138.777 1.85h-.567a.179.179 0 0 0-.184.181c-.053.104.026.181.132.181h.567a3.023 3.023 0 0 1-.778 1.85z" />
                  <path d="M13.507 11.58a.21.21 0 0 0-.28 0l-1.09 1.115v-1.14c0-.104-.084-.182-.195-.182-.112 0-.196.078-.196.182v1.607c0 .078.042.142.126.168a.134.134 0 0 0 .07.013.26.26 0 0 0 .14-.052l1.439-1.464c.07-.078.07-.182-.014-.246z" />
                </g>
              </svg>
            </div>
            <div className="Helvetica xs-border rounded xs-px1 xs-pt1 xs-inline-block xs-relative xs-align-middle xs-border-gray-light-mid xs-fill-gray-lighter">
              <svg
                className="xs-svgfill-black xs-icon-size-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <title>icon-offer</title>
                <g fillRule="evenodd">
                  <path d="M16.578 7.386v2.839c0 .28-.11.542-.308.74l-5.691 5.671a.221.221 0 0 1-.312 0l-3.814-3.8a.218.218 0 0 1 0-.31l5.692-5.671c.199-.198.462-.307.743-.307h2.847c.32 0 .599.179.742.44m.322-.218a1.233 1.233 0 0 0-1.064-.61h-2.847c-.385 0-.746.15-1.018.42l-5.692 5.672a.602.602 0 0 0 0 .858l3.814 3.8a.609.609 0 0 0 .862 0l5.691-5.671c.272-.271.422-.631.422-1.014V7.388c0-.084-.009-.166-.025-.245" />
                  <path d="M13.688 10.01a.686.686 0 1 1 0-1.371.686.686 0 0 1 0 1.371m0-1.828a1.143 1.143 0 1 0 0 2.286 1.143 1.143 0 0 0 0-2.286" />
                </g>
              </svg>
            </div>
            <div className="Helvetica xs-border rounded xs-px1 xs-pt1 xs-inline-block xs-relative xs-align-middle xs-border-gray-light-mid xs-fill-gray-lighter">
              <svg
                className="xs-svgfill-black xs-icon-size-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <title>icon-new</title>
                <path
                  fillRule="nonzero"
                  d="M12.5 16.402l1.704 1.15c.05.035.115.044.173.026a.194.194 0 0 0 .124-.118l.678-1.898 2.079-.037a.199.199 0 0 0 .155-.078.185.185 0 0 0 .029-.166l-.606-1.92 1.659-1.21a.188.188 0 0 0 .077-.151.188.188 0 0 0-.077-.15l-1.659-1.21.606-1.921a.185.185 0 0 0-.03-.166.199.199 0 0 0-.154-.078l-2.079-.037-.678-1.898a.193.193 0 0 0-.124-.118.203.203 0 0 0-.173.025L12.5 7.598l-1.704-1.151a.203.203 0 0 0-.173-.025.194.194 0 0 0-.124.118L9.82 8.438l-2.079.037a.199.199 0 0 0-.155.078.185.185 0 0 0-.029.166l.605 1.92-1.658 1.21a.188.188 0 0 0-.077.15c0 .06.029.116.077.152l1.659 1.21-.606 1.92a.185.185 0 0 0 .03.166.199.199 0 0 0 .154.078l2.079.037.678 1.898c.02.056.066.1.124.118a.202.202 0 0 0 .173-.025l1.704-1.151zM14.316 18a.636.636 0 0 1-.357-.109l-1.459-.985-1.459.985a.645.645 0 0 1-.55.08.616.616 0 0 1-.397-.377l-.58-1.625-1.78-.031a.634.634 0 0 1-.492-.248.588.588 0 0 1-.093-.53l.519-1.644-1.42-1.036A.598.598 0 0 1 6 12c0-.188.093-.367.248-.48l1.42-1.036-.519-1.645a.588.588 0 0 1 .092-.53.634.634 0 0 1 .493-.247l1.78-.031.58-1.626a.617.617 0 0 1 .397-.376.645.645 0 0 1 .55.08l1.459.985 1.459-.985a.646.646 0 0 1 .55-.08.617.617 0 0 1 .397.376l.58 1.626 1.78.031a.634.634 0 0 1 .493.248c.114.152.148.35.092.53l-.518 1.644 1.42 1.036A.598.598 0 0 1 19 12a.598.598 0 0 1-.248.48l-1.42 1.036.519 1.645a.588.588 0 0 1-.092.529.633.633 0 0 1-.493.248l-1.78.031-.58 1.625a.617.617 0 0 1-.59.406z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div id="Ribbon" className="component">
          <h2 className="styleguide-h2">Ribbon</h2>
          <div className="xs-block xs-relative decoration-none sm-box-shadow-light">
            <div>
              <img
                className="image"
                src="https://placeimg.com/800/450/arch"
                alt="\xA9 The Holly Bush"
              />
            </div>
            <div className="ribbon_tag xs-absolute xs-t2 xs-flex xs-items-center xs-text-center xs-text-white xs-p1">
              Words go here for the ribbon
            </div>
          </div>
          <br />
          <br />
          <div className="theme--teal">
            <div className="xs-relative xs-mb3 xs-border border-2 xs-p3 theme-border ">
              <div className>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                ut est id leo rhoncus porta eget ac neque. Orci varius natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec accumsan vitae dolor fringilla mollis.
              </div>
              <div className="ribbon_tag xs-absolute xs-tn2 xs-flex xs-items-center xs-text-center xs-text-white xs-p1 xs-text-12">
                Ribbon words go here
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
