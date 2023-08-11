import React from "react";
import { useState, useEffect } from "react";
import "./tab.scss";

const Tab = ({
  children,
  callback,
}: {
  children: React.ReactNode;
  callback: (index: number) => void;
}) => {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    // If the user select a tab, the cursor is animated to move to the selected tab
    const cursor = document.querySelector(".tab__cursor") as HTMLElement;
    const tabItems = document.querySelectorAll(
      ".tab__item"
    ) as NodeListOf<HTMLElement>;

    cursor.style.width = `${tabItems[activeTab].offsetWidth}px`;
    cursor.style.left = `${tabItems[activeTab].offsetLeft}px`;

    tabItems.forEach((tabItem, index) => {
      tabItem.addEventListener("click", () => {
        setActiveTab(index);
        callback(index);
      });
    });

    // If the user resize the window, the cursor is animated to move to the selected tab
    window.addEventListener("resize", () => {
      cursor.style.width = `${tabItems[activeTab].offsetWidth}px`;
      cursor.style.left = `${tabItems[activeTab].offsetLeft}px`;
    });

    // If the user scroll, the cursor is animated to move to the selected tab
    window.addEventListener("scroll", () => {
      cursor.style.width = `${tabItems[activeTab].offsetWidth}px`;
      cursor.style.left = `${tabItems[activeTab].offsetLeft}px`;
    });

    // If the user select a tab, the cursor is animated to move to the selected tab
    cursor.style.width = `${tabItems[activeTab].offsetWidth}px`;
    cursor.style.left = `${tabItems[activeTab].offsetLeft}px`;

    // remove event listener when the component unmount
    return () => {
      tabItems.forEach((tabItem, index) => {
        tabItem.removeEventListener("click", () => {
          setActiveTab(index);
          callback(index);
        });
      });

      window.removeEventListener("resize", () => {
        cursor.style.width = `${tabItems[activeTab].offsetWidth}px`;
        cursor.style.left = `${tabItems[activeTab].offsetLeft}px`;
      });

      window.removeEventListener("scroll", () => {
        cursor.style.width = `${tabItems[activeTab].offsetWidth}px`;
        cursor.style.left = `${tabItems[activeTab].offsetLeft}px`;
      });
    };
  }, [activeTab]);

  return (
    <div className="tab">
      <div className="tab__cursor"></div>
      {children}
    </div>
  );
};

const TabItem = ({ children }: { children: React.ReactNode }) => {
  return <div className="tab__item">{children}</div>;
};

Tab.Item = TabItem;

export default Tab;
