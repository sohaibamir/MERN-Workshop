import React from 'react';
import styles from './home.module.css';
import Header from '../../Components/Header';
import { useLanguage } from '../../Context/languageContext';

const Home = () => {

    const {language, changeLanguage} = useLanguage()

    return (
        <>
            <Header />
            <div className={styles.homeContainer}>
                <h1>{language.welcome}</h1>
            </div>
        </>
    )
}

export default Home;