import { useState } from "react";

import Tab from "./Tab";
import TabContent from "./TabContent";
import DifferentContent from "./DifferentContent";
import { IContent } from "../interfaces/IContent";

export default function Tabbed({ content }: Props) {
  const [activeTab, setActiveTab] = useState(0);

  console.log(<DifferentContent />);
  console.log(DifferentContent());

  const tabContent = content.at(activeTab);

  return (
    <div>
      <div className="tabs">
        <Tab num={0} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={1} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={2} activeTab={activeTab} onClick={setActiveTab} />

        <Tab num={3} activeTab={activeTab} onClick={setActiveTab} />
      </div>

      {tabContent ? <TabContent item={tabContent} /> : <DifferentContent />}
    </div>
  );
}

interface Props {
  content: IContent[];
}
