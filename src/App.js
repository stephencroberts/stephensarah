import React, { Component } from 'react';
import './normalize.css';
import './app.css';

import proposal from './assets/proposal.jpg';
import sarahsName from './assets/name_sarah.png';
import arrowLeft from './assets/arrow_left.png';
import stephensName from './assets/name_stephen.png';
import arrowRight from './assets/arrow_right.png';
import date from './assets/date.png';
import ring from './assets/ring.png';

// Breakpoints are based on aspect ratios because the svg changes with width and
// height
const BP1 = 30 / 43; // .697674419
const BP2 = 133 / 139; // .956834532
const BP3 = 331 / 281; // 1.177935943
const BP4 = 383 / 263; // 1.456273764

const constrain = (x, min, max) => Math.min(max, Math.max(min, x));

const scale = (x1, y1, x2, y2, y) => {
  let min, max;
  if (x1 < x2) {
    min = x1;
    max = x2;
  } else {
    min = x2;
    max = x1;
  }

  // Solve for x values given y: (y - y2) / m + x2
  return constrain(((y - y2) / ((y2 - y1) / (x2 - x1))) + x2, min, max);
}

class App extends Component {
  constructor(props) {
    super(props);
    this.heroWrapper = null;
    this.hero = null;
    this.datePos = null;
    this.date = null;
    this.stephenPos = null;
    this.stephen = null;
    this.leftArrowPos = null;
    this.leftArrow = null;
    this.sarahPos = null;
    this.sarah = null;
    this.rightArrowPos = null;
    this.rightArrow = null;
    this.scaleHero = this.scaleHero.bind(this);
  }

  componentDidMount() {
    let timeout;
    window.addEventListener('resize', () => {
      if (timeout) window.cancelAnimationFrame(timeout);
      timeout = window.requestAnimationFrame(this.scaleHero);
    });
    this.scaleHero();
  }

  scaleHero() {
    // Set defaults
    const bg = { width: 1920, height: 1080, aspectRatio: 1920 / 1080 };
    const hero = { x: 0, minHeight: 'auto' };
    const date = { x: 535, y: 40, scale: 1 };
    const stephen = { x: 500, y: 230, scale: 0.45 };
    const leftArrow = { x: 560, scale: 0.2, rotate: 40 };
    const sarah = { x: 840, y: 280, scale: 0.4 };
    const rightArrow = { x: 930, y: 370, scale: 0.2, rotate: -10 };

    // The idea is to detect devices (iOS for instance) that report a different
    // innerHeight when the toolbar is showing which causes the rendering to be
    // off (since they render underneath the toolbar so the value doesn't match
    // reality). First I check the width to see if the browser is full screen on
    // the device, then check if the reported height difference is likely
    // because of the toolbar (177px on iOS). This should cover most cases and
    // still look decent on the ones it doesn't.
    let vh;
    const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if (window.screen
        && window.screen.width - window.innerWidth < 5
        && window.screen.height - window.innerHeight < 200) {
      vh = window.screen.height;
    } else {
      vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    }

    const vAspectRatio = vw / vh;

    // Figure out how much the svg is scaled to fit the aspect ratio
    const scaleFactor = vAspectRatio > bg.aspectRatio
      ? vw / bg.width
      : vh / bg.height;
    const scaledVw = vw / scaleFactor;

    // The background should be centered until we exceed 16:9 ratio
    if (vAspectRatio < bg.aspectRatio) {
      // Set background image to focus on us!
      hero.x = Math.max(0, 765 - scaledVw / 2);

      if (vAspectRatio < BP4) {
        // Scale date size
        const dateWidth = scaleFactor * 500;
        date.scale = constrain((vw - 40) / dateWidth, 0, 1);
        date.x =  280 + (500 - date.scale * 500/ 2);

        // Pin our names to the left/right edges
        stephen.x = constrain(hero.x + 20, 440, 550);
        sarah.x = constrain(1320 - hero.x, 820, 878);
      }
    }

    if (vAspectRatio > BP1) {
      stephen.x = scale(stephen.x, BP1, 250, BP4, vAspectRatio);
      stephen.y = scale(stephen.y, BP1, 190, BP4, vAspectRatio);
      stephen.scale = scale(stephen.scale, BP1, 0.7, BP4, vAspectRatio);
      leftArrow.x = scale(leftArrow.x, BP1, 470, BP4, vAspectRatio);
      leftArrow.scale = scale(leftArrow.scale, BP1, 0.25, BP4, vAspectRatio);
      leftArrow.rotate = scale(leftArrow.rotate, BP1, 0, BP4, vAspectRatio);
      sarah.x = scale(sarah.x, BP1, 800, BP4, vAspectRatio);
      sarah.y = scale(sarah.y, BP1, 130, BP4, vAspectRatio);
      sarah.scale = scale(sarah.scale, BP1, 0.65, BP4, vAspectRatio);
      rightArrow.x = scale(930, BP1, 900, BP4, vAspectRatio);
      rightArrow.y = scale(370, BP1, 280, BP4, vAspectRatio);
      rightArrow.scale = scale(rightArrow.scale, BP1, 0.25, BP4, vAspectRatio);
    }

    if (vAspectRatio > BP2) {
      date.scale = scale(1, BP2, 0.5, BP4, vAspectRatio);
    }

    if (vAspectRatio >= BP3) {
      date.scale = scale(0.8, BP4, 1, bg.aspectRatio, vAspectRatio);
      date.x = 300 + scaledVw / 2 + (500 - date.scale * 500) / 2;
      date.y = 350;
    }

    if (vAspectRatio >= bg.aspectRatio) {
      hero.minHeight = `${vw * 9 / 16}px`;
    }

    this.heroWrapper.style.minHeight = hero.minHeight;
    this.hero.setAttribute('viewBox', `${hero.x} 0 1920 1080`);
    this.datePos.setAttribute('x', date.x);
    this.datePos.setAttribute('y', date.y);
    this.date.setAttribute('transform', `scale(${date.scale})`);
    this.stephenPos.setAttribute('x', stephen.x);
    this.stephenPos.setAttribute('y', stephen.y);
    this.stephen.setAttribute('transform', `scale(${stephen.scale})`);
    this.leftArrowPos.setAttribute('x', leftArrow.x);
    this.leftArrow.setAttribute('transform', `scale(${leftArrow.scale}) rotate(${leftArrow.rotate})`);
    this.sarahPos.setAttribute('x',  sarah.x);
    this.sarahPos.setAttribute('y',  sarah.y);
    this.sarah.setAttribute('transform', `scale(${sarah.scale})`);
    this.rightArrowPos.setAttribute('x', rightArrow.x);
    this.rightArrowPos.setAttribute('y', rightArrow.y);
    this.rightArrow.setAttribute('transform', `scale(${rightArrow.scale}) rotate(${rightArrow.rotate})`);
  }

  render() {
    return (
      <div>
        <div className="hero" ref={e => { this.heroWrapper = e; }}>
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1920 1080"
            preserveAspectRatio="xMinYMin slice"
            ref={e => { this.hero = e; }}
          >
            <image
              xlinkHref={proposal}
              width="100%"
              height="100%"
            />

            <svg
              x="535"
              y="40"
              width="500"
              height="177"
              viewBox="0 0 500 177"
              ref={ e => { this.datePos = e; }}
            >
              <image
                className="hero__date"
                xlinkHref={date}
                width="500"
                height="177"
                ref={e => { this.date = e; }}
              />
            </svg>

            <svg
              x="500"
              y="230"
              width="500"
              height="162"
              viewBox="0 0 500 162"
              ref={e => { this.stephenPos = e; }}
            >
              <image
                className="hero__stephen"
                xlinkHref={stephensName}
                width="500"
                height="162"
                transform="scale(0.45)"
                ref={e => { this.stephen = e; }}
              />
            </svg>

            <svg
              x="560"
              y="320"
              width="341"
              height="345"
              viewBox="0 0 341 345"
              overflow="visible"
              ref={e => { this.leftArrowPos = e; }}
            >
              <image
                className="hero__left-arrow"
                xlinkHref={arrowLeft}
                width="341"
                height="345"
                transform="scale(0.2) rotate(40)"
                ref={e => { this.leftArrow = e; }}
              />
            </svg>

            <svg
              x="840"
              y="280"
              width="500"
              height="178"
              viewBox="0 0 500 178"
              ref={e => { this.sarahPos = e; }}
            >
              <image
                className="hero__sarah"
                xlinkHref={sarahsName}
                width="500"
                height="178"
                transform="scale(0.40)"
                ref={e => { this.sarah = e; }}
              />
            </svg>

            <svg
              x="930"
              y="370"
              width="284"
              height="345"
              viewBox="0 0 284 345"
              overflow="visible"
              ref={e => { this.rightArrowPos = e; }}
            >
              <image
                className="hero__right-arrow"
                xlinkHref={arrowRight}
                width="284"
                height="345"
                transform="scale(0.2) rotate(-10)"
                ref={e => { this.rightArrow = e; }}
              />
            </svg>

            <svg
              x="800"
              y="680"
              width="500"
              height="333"
              viewBox="0 0 500 333"
            >
              <image
                className="hero__ring"
                xlinkHref={ring}
                width="500"
                height="333"
                transform="scale(0.3)"
              />
            </svg>

          </svg>
          <div className="snowflakes" aria-hidden="true">
            <div className="snowflake">
            ❅
            </div>
            <div className="snowflake">
            ❆
            </div>
            <div className="snowflake">
            ❅
            </div>
            <div className="snowflake">
            ❆
            </div>
            <div className="snowflake">
            ❅
            </div>
            <div className="snowflake">
            ❆
            </div>
            <div className="snowflake">
              ❅
            </div>
            <div className="snowflake">
              ❆
            </div>
            <div className="snowflake">
              ❅
            </div>
            <div className="snowflake">
              ❆
            </div>
            <div className="snowflake">
              ❅
            </div>
            <div className="snowflake">
              ❆
            </div>
          </div>
        </div>
        <article className="content">
          <p>More <strong><em>amazing</em></strong> website coming soon, but here are the important details for now:</p>
          <h3>Ceremony & Reception</h3>
          <p>Our wedding is on Saturday, September 7 at 4:00 p.m. at Our Savior's Way Lutheran Church, 43115 Waxpool Road, Ashburn, Virginia  20148.</p>
          <p>Dinner and dance to follow at Clyde's Willow Creek Farm, 42920 Broadlands Boulevard, Broadlands, Virginia.</p>
          <h3>Accomodations</h3>
          <p>Accommodations for the Meyer/Roberts Wedding are at Embassy Suites Hotel and Homewood Suites Hotel, available from 9/5 until 9/8. They are located at 44610 and 44620 Waxpool Road, Ashburn, VA  20147</p>

          <p>They are the hotels closest to the church and the reception venue.  Both hotels offer free shuttle service between the hotel and Dulles Airport.</p>

          <p>The hotels are next door to each other and are connected by an enclosed walkway. The group rates are $109. Each hotel offers the same amenities, including complimentary breakfast. The code for the Meyer/Roberts group rate is MRW.</p>

          <p>The special room rate will only be available until August 6th or until the group block is sold-out, whichever comes first.</p>

          <p>Here is the link for Embassy Suites:</p>

          <a href="https://embassysuites.hilton.com/en/es/groups/personalized/W/WASNLES-MRW-20190905/index.jhtml?WT.mc_id=POG">https://embassysuites.hilton.com/en/es/groups/personalized/W/WASNLES-MRW-20190905/index.jhtml?WT.mc_id=POG</a>

          <p>Here is the link for Homewood Suites:</p>

          <a href="https://homewoodsuites.hilton.com/en/hw/groups/personalized/W/WASLDHW-MRW-20190905/index.jhtml?WT.mc_id=POG">https://homewoodsuites.hilton.com/en/hw/groups/personalized/W/WASLDHW-MRW-20190905/index.jhtml?WT.mc_id=POG</a>
        </article>
        <div className="footer">
          Copyright © 2019 Stephen Roberts
        </div>
      </div>
    );
  }
}

export default App;
