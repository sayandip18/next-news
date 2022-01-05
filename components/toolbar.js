import { useRouter } from 'next/router';
import styles from '../styles/Toolbar.module.css';

export const ToolBar = () => {
    const router = useRouter();

    return(
        <div className={styles.main}>
            <div onClick={() => router.push('/')}>Home</div>
            <div onClick={() => router.push('/feed/1')}>Feed</div>
            <div onClick={() => router.push('eom')}>EOM</div>
            <div onClick={() => (window.location.href = 'https://twitter.com/ryangosling')}>Twitter</div>
        </div>
    )
};