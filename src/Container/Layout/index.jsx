import {Section} from "../Section"
import {SectionCard} from "../SectionCard"
import Styles from "./styles.module.scss"
export const Layout = () => {

  return (
    <div className={Styles["Layout"]}>

      <div className={Styles["SectionCard"]}><SectionCard/></div>
      <div className={Styles["Section-main"]}><Section/></div>
    </div>
  )
  
}
