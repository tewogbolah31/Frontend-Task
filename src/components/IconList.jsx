import styles from "../components/IconList.module.css";
import Icon from "../components/Icon";
import SecondIcon from "./SecondIcon";


import { LuMonitorDot } from "react-icons/lu";
import { IoWifiSharp } from "react-icons/io5";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { BsMic } from "react-icons/bs";
import { IoCheckmarkOutline } from "react-icons/io5";
import { IoWarningOutline } from "react-icons/io5";

function IconList({first}) {

  const firstICon = (
    <ul className={styles.groupBox}>
      <div className={styles.group}>
        <Icon text="Webcam" Icon={LuMonitorDot} />
        <Icon text='Gadget mic' Icon={BsMic} />
      </div>
      <div className={styles.group}>
        <Icon text="speed" Icon={IoWifiSharp} />
        <Icon text="Lighting" Icon={RiLightbulbFlashLine} />
      </div>
    </ul>
  );
  const secondIcon = (
    <ul className={styles.groupBox}>
      <div className={styles.group}>
        <SecondIcon text="Webcam" Icon={IoCheckmarkOutline} Span={LuMonitorDot}/>
        <SecondIcon text="Gadget  mic" Icon={IoCheckmarkOutline} Span={BsMic}/>
      </div>
      <div className={styles.group}>
        <SecondIcon text="Internet speed" Icon={IoWarningOutline} third={true} Span={IoWifiSharp}/>
        <SecondIcon text="Lighting" Icon={RiLightbulbFlashLine} fourth={true} Span={RiLightbulbFlashLine}/>
      </div>
    </ul>
  );

    return  !first ? firstICon : secondIcon;
}

export default IconList;
