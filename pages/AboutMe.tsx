import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AboutMe } from "../../shared/interfaces/user/aboutMe";
import AccordionMiron from '../../components/accordion/AccordionMiron';
import AccordionMironItem from '../../components/accordion/AccordionMironItem';
import ListItemDot from '../../components/list/listItem/ListItemDot';
import { LocalizationContext } from '../../services/localization/localization';
import { toLower } from '../../shared/helpers';
import { aboutMe, aboutMeError, aboutMeSuccess } from '../../store/aboutMe';
import { RootState } from '../../store/configureStore';
import styles from './style';

const AboutMe: React.FC<AboutMeProps> = (props: AboutMeProps) => {
    const {t} = useContext(LocalizationContext);
    const dispatch = useDispatch();
    const aboutMeData: AboutMe = useSelector((state: RootState) => state.aboutMe.payload);
    const {isPreferProfileChanged} = useSelector((state: RootState) => state.allProfiles);

    useEffect((): void => {
        getAboutMeData();
    }, []);

    useEffect((): void => {
        if (isPreferProfileChanged) {
            getAboutMeData();
        }
    }, [isPreferProfileChanged]);

    const getAboutMeData = async (): Promise<void> => {
        try {
            const {data} = await dispatch(aboutMe());
            data?.profileId && dispatch(aboutMeSuccess(data));
        } catch (error: any) {
            dispatch(aboutMeError(error));
        }
    };

    return (
        <View style={styles.container}>
            {!!aboutMeData.length && (
                <AccordionMiron>
                    {aboutMeData.map((item: any) => {
                        return (
                            <AccordionMironItem title={t(item.title)} key={item.title}>
                                {!!item.data &&
                                    item.data.map((label: any) => {
                                        let val = toLower(label);
                                        return <ListItemDot item={t(val)} key={label}/>;
                                    })}
                            </AccordionMironItem>
                        );
                    })}
                </AccordionMiron>
            )}
        </View>
    );
};

export default AboutMe;
