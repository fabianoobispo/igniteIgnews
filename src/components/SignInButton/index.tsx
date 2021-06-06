import styles from './styles.module.scss';
import {FaGithub} from 'react-icons/fa';
import {FiX} from 'react-icons/fi';
//import { signIn, signOut, useSession } from 'next-auth/client'

export function SignInButton() {
    //const [session] = useSession();

    //return estatico 
    const session = true;
    return session ? (
        <button
        type="button"
        className={styles.SignInButton}
      
        >
        
            <FaGithub
            color="#04d361"
            />
            Fabiano bispo
            <FiX 
            color="#737380"
            className={styles.closeIncon}
            />
        </button>
    ) : (
        <button
        type="button"
        className={styles.SignInButton}
        
        >
            <FaGithub
            color="#eba417"
            />
            Sign in with GitHub
        </button>
    );




  /*   return session ? (
        <button
        type="button"
        className={styles.SignInButton}
        onClick={() => signOut()}
        >
        
            <FaGithub
            color="#04d361"
            />
            {session.user.name}
            <FiX 
            color="#737380"
            className={styles.closeIncon}
            />
        </button>
    ) : (
        <button
        type="button"
        className={styles.SignInButton}
        onClick={() => signIn('github')}
        >
            <FaGithub
            color="#eba417"
            />
            Sign in with GitHub
        </button>
    ); */
}