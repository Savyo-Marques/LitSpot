import React from 'react';
import { NativeBaseProvider } from 'native-base';

import ListBook from './listaLivros/ListBook.js';

export default function App() {
    return (
        <NativeBaseProvider>
            <ListBook />
        </NativeBaseProvider>
    );
}
