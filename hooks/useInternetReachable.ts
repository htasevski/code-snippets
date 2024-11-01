import { useState, useEffect } from 'react';
import NetInfo, { NetInfoSubscription } from '@react-native-community/netinfo';

const useInternetReachable = (): { isInternetReachable: boolean; isLoading: boolean } => {
    const [isReachable, setIsReachable] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const unsubscribe: NetInfoSubscription = NetInfo.addEventListener(({isInternetReachable}): void => {
            if (typeof isInternetReachable !== 'boolean') {
                return;
            }

            setIsLoading(false);
            setIsReachable(isInternetReachable);
        });

        return (): void => unsubscribe();
    }, []);

    return {isInternetReachable: isReachable, isLoading};
};

export default useInternetReachable;
