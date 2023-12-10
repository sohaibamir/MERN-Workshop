import React from 'react'
import { Link } from 'react-router-dom';
import styles from './header.module.css';
import { useLanguage } from '../../Context/languageContext';
import CustomButton from '../CustomButton';

const Header = () => {

    const {language, changeLanguage} = useLanguage()

    return (

        <div className={styles.headerContainer}>
            <Link to='/books'>{language.books}</Link>
            <Link to='/records'>{language.records}</Link>
            <Link to='/students'>{language.students}</Link>
            <div className={styles.language} >
                <CustomButton onClick={() => changeLanguage('en')} btnLabel="English"  />
                <CustomButton onClick={() => changeLanguage('ur')} btnLabel="Urdu" />
            </div>
        </div>
    )
}

export default Header;