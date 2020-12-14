export function seedDatabase(firebase) {
    function getUUID() {
        // eslint gets funny about bitwise
        /* eslint-disable */
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
            const piece = (Math.random() * 16) | 0;
            const elem = c === 'x' ? piece : (piece & 0x3) | 0x8;
            return elem.toString(16);
        });
        /* eslint-enable */
    }

    /* Series
      ============================================ */
    // Documentaries
    firebase.firestore().collection('series').add({
        id: getUUID(),
        title: 'The Good Doctor',
        description: "A young surgeon with Savant syndrome is recruited into the surgical unit of a prestigious hospital. The question will arise: can a person who doesn't have the ability to relate to people actually save their lives?",
        genre: 'originals',
        maturity: '18',
        slug: 'the-good-doctor',
    });
    firebase.firestore().collection('series').add({
        id: getUUID(),
        title: 'The Mandalorian',
        description: "After the fall of the Galactic Empire, lawlessness has spread throughout the galaxy. A lone gunfighter makes his way through the outer reaches, earning his keep as a bounty hunter.",
        genre: 'originals',
        maturity: '18',
        slug: 'the-mandalorian',
    });
    firebase.firestore().collection('series').add({
        id: getUUID(),
        title: "Grey's Anatomy",
        description: "Follows the personal and professional lives of a group of doctors at Seattle’s Grey Sloan Memorial Hospital.",
        genre: 'originals',
        maturity: '18',
        slug: 'greys-anatomy',
    });
    firebase.firestore().collection('series').add({
        id: getUUID(),
        title: '30 Monedas',
        description: "Father Vergara—an exorcist, boxer and ex-convict—lives in a remote village in Spain. Hoping to be lost and forgotten, Vergara’s demons catch up to him.",
        genre: 'originals',
        maturity: '18',
        slug: '30-monedas',
    });

}
