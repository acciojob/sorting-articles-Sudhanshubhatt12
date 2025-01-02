//your JS code here. If required.
 // Band names array
        const bands = [
            'The Plot in You', 
            'The Devil Wears Prada', 
            'Pierce the Veil', 
            'Norma Jean', 
            'The Bled', 
            'Say Anything', 
            'The Midway State', 
            'We Came as Romans', 
            'Counterparts', 
            'Oh, Sleeper', 
            'A Skylit Drive', 
            'Anywhere But Here', 
            'An Old Dog'
        ];

        // Function to sort the band names
        function sortBands(bands) {
            const ignoreWords = ['a', 'an', 'the'];

            // Function to remove ignored words and sort the band names
            const sortByNormalizedName = (a, b) => {
                const normalizeName = (name) => {
                    // Convert to lowercase, split into words, and filter out ignored words
                    return name.toLowerCase()
                        .split(' ')
                        .filter(word => !ignoreWords.includes(word))
                        .join(' ');
                };

                const normalizedA = normalizeName(a);
                const normalizedB = normalizeName(b);

                // Compare the normalized names
                return normalizedA.localeCompare(normalizedB);
            };

            // Sort the bands
            return bands.sort(sortByNormalizedName);
        }

        // Function to render sorted band names in the list
        function renderBands(bands) {
            const sortedBands = sortBands(bands);
            const ul = document.getElementById('band');

            // Clear existing list items
            ul.innerHTML = '';

            // Add sorted band names as list items
            sortedBands.forEach(band => {
                const li = document.createElement('li');
                li.textContent = band;
                ul.appendChild(li);
            });
        }

        // Initial rendering of sorted bands
        renderBands(bands);