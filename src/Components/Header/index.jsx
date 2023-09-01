import Styles from "./styles.module.scss"
import Yuran from "../../assets/yuran.jpeg"
import CampaignIcon from '@mui/icons-material/Campaign';
import AddCommentIcon from '@mui/icons-material/AddComment';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';
export const Header = () => {
  return (
    <div className={Styles['Header']}>
      
    <div className={Styles["Header-nav"]}>
      <div className={Styles['Header-img']}>
      <img src={Yuran} alt="Yuran" />
      </div>
        <div  className={Styles['Header-btn']}>
          <button>
            <span><CampaignIcon style={{fontSize: "20px"}}/></span>
          </button>
          <button>
            <span><RadioButtonCheckedIcon style={{fontSize: "20px"}}/></span>
          </button>
          <button>
            <span><AddCommentIcon style={{fontSize: "20px"}}/></span>
          </button>
          <button>
            <span><MoreVertIcon style={{fontSize: "20px"}}/></span>
          </button>
    </div>
      </div>

      <div className={Styles["Header-container"]}>
        <form >
          <div className={Styles["Form-Search"]}><button><SearchIcon style={{fontSize: "18px"}}/></button></div>
          <input type="text" placeholder="Pesquisar ou criar uma nova conversa"/>
        </form>
        <div className={Styles["Header-filter"]}><button><FilterListIcon style={{fontSize: "20px"}}/></button></div>
      </div>
      </div>
  )
}
