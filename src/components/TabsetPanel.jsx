import React, { useState } from "react";
import earing from "../assets/earing-eme.png";
import ring from "../assets/sapphire.png";
import necklace from "../assets/necklace_ruby.png";
import pendant from "../assets/pendant-emerald.png";

const TabsetPanel = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ["Stones", "Rudraskha", "Face Roller"];

  const content = [
    // Content for Tab 1
    <div className="grid grid-cols-6 gap-4 tab-data">
      <div className="jewelry-list-p item">
        <a
          target="_blank"
          href="https://www.gempundit.com/channel-set-baguette-diamond-emerald-gold-engagement-ring-er27"
        >
          <img src={ring} alt="Emerald Ring" className="zoom-effect" />
          <span className="titlebsestselling">
            <h3>Emerald Ring</h3>
          </span>
        </a>
      </div>
      <div className="jewelry-list-p item">
        <a target="_blank" href="https://www.gempundit.com/another-ring">
          <img src={ring} alt="Another Ring" />
          <span className="titlebsestselling">
            <h3>Another Ring</h3>
          </span>
        </a>
      </div>
      <div className="jewelry-list-p item">
        <a target="_blank" href="https://www.gempundit.com/another-ring">
          <img src={necklace} alt="Another Ring" />
          <span className="titlebsestselling">
            <h3>Another Ring</h3>
          </span>
        </a>
      </div>
      <div className="jewelry-list-p item">
        <a target="_blank" href="https://www.gempundit.com/another-ring">
          <img src={earing} alt="Another Ring" />
          <span className="titlebsestselling">
            <h3>Another Ring</h3>
          </span>
        </a>
      </div>
      <div className="jewelry-list-p item">
        <a target="_blank" href="https://www.gempundit.com/another-ring">
          <img src={pendant} alt="Another Ring" />
          <span className="titlebsestselling">
            <h3>Another Ring</h3>
          </span>
        </a>
      </div>
      <div className="jewelry-list-p item">
        <a target="_blank" href="https://www.gempundit.com/third-ring">
          <img src={ring} alt="Third Ring" />
          <span className="titlebsestselling">
            <h3>Third Ring</h3>
          </span>
        </a>
      </div>
    </div>,

    // Content for Tab 2
    <div className="grid grid-cols-6 gap-4 tab-data">
      <div className="jewelry-list-p item">
        <a
          target="_blank"
          href="https://www.gempundit.com/channel-set-baguette-diamond-emerald-gold-engagement-ring-er27"
        >
          <img src={ring} alt="Emerald Ring" />
          <span className="titlebsestselling">
            <h3>Engagement Ring</h3>
          </span>
        </a>
      </div>
      <div className="jewelry-list-p item">
        <a target="_blank" href="https://www.gempundit.com/another-ring">
          <img src={ring} alt="Another Ring" />
          <span className="titlebsestselling">
            <h3>Another Ring</h3>
          </span>
        </a>
      </div>
      <div className="jewelry-list-p item">
        <a target="_blank" href="https://www.gempundit.com/another-ring">
          <img src={necklace} alt="Another Ring" />
          <span className="titlebsestselling">
            <h3>Another Ring</h3>
          </span>
        </a>
      </div>
      <div className="jewelry-list-p item">
        <a target="_blank" href="https://www.gempundit.com/another-ring">
          <img src={earing} alt="Another Ring" />
          <span className="titlebsestselling">
            <h3>Another Ring</h3>
          </span>
        </a>
      </div>
      <div className="jewelry-list-p item">
        <a target="_blank" href="https://www.gempundit.com/another-ring">
          <img src={pendant} alt="Another Ring" />
          <span className="titlebsestselling">
            <h3>Another Ring</h3>
          </span>
        </a>
      </div>
      <div className="jewelry-list-p item">
        <a target="_blank" href="https://www.gempundit.com/third-ring">
          <img src={ring} alt="Third Ring" />
          <span className="titlebsestselling">
            <h3>Third Ring</h3>
          </span>
        </a>
      </div>
    </div>,

    // Content for Tab 3
    <div className="grid grid-cols-6 gap-4 tab-data">
      <div className="jewelry-list-p item">
        <a
          target="_blank"
          href="https://www.gempundit.com/channel-set-baguette-diamond-emerald-gold-engagement-ring-er27"
        >
          <img src={ring} alt="Emerald Ring" />
          <span className="titlebsestselling">
            <h3>Emerald Gold</h3>
          </span>
        </a>
      </div>
      <div className="jewelry-list-p item">
        <a target="_blank" href="https://www.gempundit.com/another-ring">
          <img src={ring} alt="Another Ring" />
          <span className="titlebsestselling">
            <h3>Another Ring</h3>
          </span>
        </a>
      </div>
      <div className="jewelry-list-p item">
        <a target="_blank" href="https://www.gempundit.com/another-ring">
          <img src={necklace} alt="Another Ring" />
          <span className="titlebsestselling">
            <h3>Another Ring</h3>
          </span>
        </a>
      </div>
      <div className="jewelry-list-p item">
        <a target="_blank" href="https://www.gempundit.com/another-ring">
          <img src={earing} alt="Another Ring" />
          <span className="titlebsestselling">
            <h3>Another Ring</h3>
          </span>
        </a>
      </div>
      <div className="jewelry-list-p item">
        <a target="_blank" href="https://www.gempundit.com/another-ring">
          <img src={pendant} alt="Another Ring" />
          <span className="titlebsestselling">
            <h3>Another Ring</h3>
          </span>
        </a>
      </div>
      <div className="jewelry-list-p item">
        <a target="_blank" href="https://www.gempundit.com/third-ring">
          <img src={ring} alt="Third Ring" />
          <span className="titlebsestselling">
            <h3>Third Ring</h3>
          </span>
        </a>
      </div>
    </div>,
  ];

  return (
    <div className="p-4 tabset mb-20">
      <ul className="flex  tab-menu">
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={`mr-1 p-2 cursor-pointer ${
              activeTab === index ? " border-b-2" : ""
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </li>
        ))}
      </ul>

      <div className="tab-content">{content[activeTab]}</div>
      <button className="view-all">View All</button>
    </div>
  );
};

export default TabsetPanel;
