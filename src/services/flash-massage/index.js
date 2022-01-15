import React from 'react';
import { showMessage, hideMessage } from "react-native-flash-message";
import { theme } from '@constant/themes';

export const showMessageInDevelopment = () => {
    const message = {
        message: "Dalam Pengembangan",
        description: "Maaf atas ketidaknyaman ini. tunggu diupdate selanjutnya",
        icon: { icon: "info", position: "left" },
        titleStyle: { fontWeight: 'bold' },
        backgroundColor: theme.color.info,
        color: theme.color.white,
        type: "default"
    };


    showMessage(message);
}