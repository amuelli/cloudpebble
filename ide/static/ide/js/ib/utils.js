(function() {
    /**
     * Represents a position
     * @param {Number} [x=0] x coordinate
     * @param {Number} [y=0] y coordinate
     * @constructor
     */
    IB.Pos = function(x, y) {
        this.x = x || 0;
        this.y = y || 0;
    };

    /**
     * Represents a size
     * @param {Number} [w=0] width
     * @param {Number} [h=0] height
     * @constructor
     */
    IB.Size = function(w, h) {
        this.w = w || 0;
        this.h = h || 0;
    };

    IB.Colour = function(name, css, display) {
        this.name = name;
        this.css = css;
        this.display = display;

        this.toString = function() {
            return this.name;
        };
    };

    IB.ColourModes = {
        Colour: 0,
        Monochrome: 1
    };
    IB.colourMode = null;

    IB.ColourMap = {
        GColorClear: new IB.Colour('GColorClear', 'rgba(0, 0, 0, 0)', gettext('Transparent'))
    };
    _.each(IB.FullColourDescriptionMap, function(colour) {
        var gcolour = _.findWhere(colour.literals, {'id': 'define'}).value;
        IB.ColourMap[gcolour] = new IB.Colour(gcolour, colour.html, colour.name);
    });

    IB.ColourClear = IB.ColourMap['GColorClear'];
    IB.ColourWhite = IB.ColourMap['GColorWhite'];
    IB.ColourBlack = IB.ColourMap['GColorBlack'];

    IB.MonochromeMap = {
        GColorWhite: IB.ColourWhite,
        GColorBlack: IB.ColourBlack,
        GColorClear: IB.ColourClear
    };

    /**
     * Escapes a string by replacing sequences that are illegal in C.
     * @param {string} string
     * @returns {string}
     */
    IB.escapeCString = function(string) {
        return string
            .replace("\\", "\\\\")
            .replace("\"", "\\\"")
            .replace("\n", "\\\n")
    };
})();
