// STORYBOOK CONFIG

import { addDecorator, addParameters, configure } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { setOptions } from '@storybook/addon-options';

function importAll(req) {
    req.keys().forEach(filename => req(filename));
}

function loadStories() {
    const stories = require.context('../stories/', true, /\.js$/);
    importAll(stories);
    // require('../stories/header.js');
    // You can require as many stories as you need.
}

// Option defaults:
setOptions({
    name: 'GeoCode Kit',
    url: '#',
    goFullScreen: false,
    showStoriesPanel: true,
    showAddonPanel: false,
    showSearchBox: false,
    addonPanelInRight: false,
    sortStoriesByKind: true,
    hierarchySeparator: null,
    hierarchyRootSeparator: null,
    sidebarAnimations: true,
    selectedAddonPanel: undefined, // The order of addons in the "Addon panel" is the same as you import them in 'addons.js'. The first panel will be opened by default as you run Storybook
});


addParameters({
    info: {
        inline: true,
        header: false,
        source: false
    },
});

addDecorator(withInfo);

configure(loadStories, module);
