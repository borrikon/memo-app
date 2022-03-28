import Button from '@mui/material/Button';
import styles from './styles.css';

function MainPage(){
    return(
        <div className={styles.greeting}>
            <Button>Hello</Button>
            <h1>Hello memo App</h1>
        </div>
    )
}

export default MainPage;