import Styles from "./styles.module.scss"
import Yuran from "../../assets/yuran.jpeg"
import CampaignIcon from '@mui/icons-material/Campaign';
import AddCommentIcon from '@mui/icons-material/AddComment';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
export const Header = () => {
  return (
    <div className={Styles['Header']}>
      
    <div className={Styles['Header-img']}> 
    <img src={Yuran} alt="Yuran" /> 
    </div>
      <div  className={Styles['Header-btn']}>
        <button>
          <span><CampaignIcon style={{fontSize: "24px"}}/></span>
        </button>
        <button>
          <span><RadioButtonCheckedIcon style={{fontSize: "24px"}}/></span>
        </button>
        <button>
          <span><AddCommentIcon style={{fontSize: "24px"}}/></span>
        </button>
        <button>
          <span><MoreVertIcon style={{fontSize: "24px"}}/></span>
        </button>
      </div>
      </div>
  )
}
