import { Share, ShareAction } from 'react-native';
import { folderName } from '../../../config/mediaConfig';
import { Toaster } from '../toaster/toaster';
import {
    createFileName,
    downloadAsync,
    getMimeType,
    getDirectoryPermissions,
    createFileAsync,
    readAsStringAsync,
    writeAsStringAsync,
    isIos,
    isAndroid,
} from "../shared/helpers/osCheck";

export const handleDownloadFile = async (
    name: string,
    extension: string,
    url: string,
    t: (data: string) => string
): Promise<string | void | undefined> => {
    try {
        const fileName: string = createFileName(name, extension);
        const {uri} = await downloadAsync(url, fileName);

        if (isIos()) {
            return downloadIOS(uri);
        }

        if (isAndroid()) {
            const {directoryUri, granted} = await getDirectoryPermissions(folderName);
            return granted
                ? downloadAndroid(extension, directoryUri, uri, fileName)
                : Toaster(t('enableDownloadPermissions'));
        }
    } catch (error: any) {
        throw error?.message || error?.response;
    }
};

const downloadIOS = async (uri: string): Promise<string | undefined> => {
    const result: ShareAction = await Share.share({url: uri});
    if (result.action !== Share.dismissedAction) {
        return uri;
    }
};

const downloadAndroid = async (
    extension: string,
    directoryUri: string,
    uri: string,
    fileName: string
): Promise<string> => {
    const type: {} = extension && getMimeType(extension);
    const createdFile: string = await createFileAsync(directoryUri, fileName, type[0]);
    const fileString: string = await readAsStringAsync(uri);
    await writeAsStringAsync(createdFile, fileString);
    return uri;
};
