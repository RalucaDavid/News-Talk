
import { Text } from '@mantine/core';
import { Dictionary } from '../../dictionaries/en';
import { FaRegNewspaper } from "react-icons/fa6";
import classes from './navigation-bar.module.css';

const NavigationBar = () => {
    return (
        <div className={classes.navBar}>
            <FaRegNewspaper className={classes.icon} />
            <Text lineClamp={2} className={classes.title}>
                {Dictionary.newsTalk}
            </Text>
        </div>
    );
};

export default NavigationBar;