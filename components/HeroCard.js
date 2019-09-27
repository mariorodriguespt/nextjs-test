import React from "react";

class HeroCard extends React.Component {
  render() {
    return (
      <div className="v5-zone zone_Leaderbox xs-relative xs-pb5 xs-hover--scale-image">
        <a
          href="#"
          className="xs-absolute xs-block xs-cover xs-overflow-hidden"
        >
          <div className="image_wrapper aspect-ratio-16-9">
            <img
              className="xs-height-fit xs-object-fit-cover"
              src="https://placeimg.com/640/480/nature"
              width="100%"
              height="100%"
              alt="dsdsimg"
            />
          </div>
        </a>
        <div className="v5HeroTile br-row">
          <div className="xs-mb2 xs-pt5">
            <a href="/#">
              <h1 className="FranklinGothic xs-col-12 sm-col-7 xs-fill-red xs-hover--fill-red-dark xs-text-white xs-text-3 xs-line-height-4 sm-text-2\n             sm-line-height-2 md-text-1 md-line-height-1 xs-inline-block\n             bold xs-p2 xs-box-shadow-dark xs-relative">
                The ultimate guide to Christmas in London
              </h1>
            </a>
          </div>
          <a
            href="#"
            className="Helvetica bold xs-px6 xs-py2 xs-text-8 xs-line-height-9 xs-fill-cyan xs-border squared xs-border-cyan xs-text-white\n                 caps xs-letter-spacing-2 xs-hide sm-inline-block xs-box-shadow-dark\n                 decoration-none xs-mb9 xs-relative xs-hover--fill-cyan-dark xs-hover--border-cyan-dark"
          >
            MORE
          </a>
        </div>
      </div>
    );
  }
}

export default HeroCard;
