(function() {

    var data = [
        {
            name: 'atom-liquid-snippets',
            description: 'The atom-liquid-snippets package adds support for Shopify Liquid snippets with a set of commands found in the documentation for the package.',
            author: 'rickmurt',
            url: 'https://atom.io/packages/atom-liquid-snippets',
            downloads: 8081,
            stars: 7,
            price: 0.00,
            selector: 'p1'
        },
        {
            name: 'git-blame',
            description: 'The git-blame package allows you to toggle git-blame annotations in the gutter of the Atom editor.',
            author: 'alexcorre',
            url: 'https://atom.io/packages/git-blame',
            downloads: 255264,
            stars: 444,
            price: 0.00, 
            selector: 'p2'
        },
        {
            name: 'autoclose-html-plus',
            description: 'This package automatically closes HTML tags for you once you’ve typed the first tag.',
            author: 'binaryfunt',
            url: 'https://atom.io/packages/autoclose-html-plus',
            downloads: 15292,
            stars: 2,
            price: 0.00,
            selector: 'p3'
        }
    ];

        function Package(data) {
        this.name = data.name;
        this.description = data.description;
        this.author = data.author;
        this.url = data.url;
        this.downloads = data.downloads;
        this.stars = data.stars;
        this.selector = data.selector;

        this.getFormattedDownloads = function () {
            return this.downloads.toLocaleString();
        };

        this.getFormattedStars = function () {
            return this.stars.toLocaleString();
        };
    }

    var getTodaysDate = function() {
        var today = new Date();
        return today.toDateString();
    };

    var getEl = function (id) {
        return document.getElementById(id);
    }

    var writePackageInfo = function(package) {
        var selector = package.selector,
        nameEl = getEl(selector + '-name'),
        descEl = getEl(selector + '-description'),
        authEl = getEl(selector + '-author'),
        downloadEl = getEl(selector + '-downloads'),
        starsEl = getEl(selector + '-stars');

        nameEl.textContent = package.name;
        descEl.textContent = package.description;
        authEl.textContent = package.author;
        downloadEl.textContent = package.getFormattedDownloads();
        starsEl.textContent = package.getFormattedStars();
    }

    dateEl = getEl('date');
    dateEl.textContent = getTodaysDate();

   // var emmet = new Package(data[0]);
   // writePackageInfo(emmet);

    //var beautify = new Package(data[1]);
   // writePackageInfo(beautify);

   // var autoclose = new Package(data[2]);
   // writePackageInfo(autoclose);

    for (var i = 0; i < data.length; i++) {
        writePackageInfo(new Package(data[i]));
    }
    
}());