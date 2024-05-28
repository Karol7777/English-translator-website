import { useState } from '#app'
export const useSelectedLanguage = () => useState('selected-language', () => "pl");
export const useAvailableLanguage = () => useState('available-language', () => [
    'pl',
    'en',
]);