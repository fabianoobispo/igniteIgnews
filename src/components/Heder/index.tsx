
import { SignInButton } from '../SignInButton';


import styles from './styles.module.scss';
//import { ActiveLink } from '../ActiveLink';

export function Header() {
 

    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/logo.svg" alt="Logo" />
                <nav>
                
                        <a className={styles.active}>Home</a>
                  <a>posts</a>
               



                  {/*   <ActiveLink activeClassName={styles.active } href='/'>
                        <a>Home</a>
                    </ActiveLink>
                    <ActiveLink  activeClassName={styles.active } href='/posts'> 
                        <a>posts</a>
                    </ActiveLink> */}
                    
                    
                   
                </nav>
                <SignInButton/>
            </div>
        </header>
    );
}