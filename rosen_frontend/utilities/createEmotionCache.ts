import createCache from '@emotion/cache';

const isBrowser = typeof document !== 'undefined';

// On the client side, Create a meta tag at the top of the <head> and set it as insertionPoint.
// This assures that MUI styles are loaded first.
// It allows developers to easily override MUI styles with other styling solutions, like CSS modules.

//createEmotionCache.ts: (allow custom styles on top of MUI styles)
//It allows developers to easily override MUI styles with other styling solutions, like CSS modules.
export default function createEmotionCache() {
    let insertionPoint: any;

    if (isBrowser) {
        const emotionInsertionPoint = document.querySelector('meta[name="emotion-insertion-point"]');
        insertionPoint = emotionInsertionPoint ?? undefined;
    }

    return createCache({ key: 'mui-style', insertionPoint });
}


//or
//prepend: true moves MUI styles to the top of the <head> so they are loaded first.
// It allows developers to easily override MUI styles with other styling solutions, like CSS modules.

// import createCache from '@emotion/cache';
//
// const createEmotionCache = () => {
//     return createCache({ key: 'css', prepend: true });
// };
//
// export default createEmotionCache;