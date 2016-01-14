/**
 * Created by v on 2015/8/20.
 */
/**
 * @name ejoy2d.string
 * @namespace Extended String API
 */
ejoy2d.string = function () {
    return {
        /**
         * @name ejoy2d.string.ASCII_LOWERCASE
         * @description All lowercase letters
         * @type String
         */
        ASCII_LOWERCASE: "abcdefghijklmnopqrstuvwxyz",

        /**
         * @name ejoy2d.string.ASCII_UPPERCASE
         * @description All uppercase letters
         * @type String
         */
        ASCII_UPPERCASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",

        /**
         * @name ejoy2d.string.ASCII_LETTERS
         * @description All ASCII letters
         * @type String
         */
        ASCII_LETTERS: this.ASCII_LOWERCASE + this.ASCII_UPPERCASE,
        /**
         * @function
         * @name ejoy2d.string.format
         * @description Return a string with {n} replaced with the n-th argument
         * @param {String} s The string to format
         * @param {Object} [arguments] All other arguments are substituted into the string
         * @returns {String} The formatted string
         * @example
         * var s = ejoy2d.string.format("Hello {0}", "world");
         * console.log(s); // Prints "Hello world"
         */
        format: function (s) {
            var i = 0,
            regexp,
            args = ejoy2d.makeArray(arguments);

            // drop first argument
            args.shift();

            for (i = 0; i < args.length; i++) {
                regexp = new RegExp('\\{' + i + '\\}', 'gi');
                s = s.replace(regexp, args[i]);
            }
            return s;
        },

        /**
        * @function
        * @name ejoy2d.string.startsWith
        * @description Check if a string s starts with another string subs
        * @param {String} s The string to look in
        * @param {String} subs The string to look for
        * @returns {Boolean} True if s starts with subs
        * @example
        * var s = "abc";
        * if (ejoy2d.string.startsWith(s, "a")) {
        *   console.log('Starts with a');
        * }
        */
        startsWith: function (s, subs) {
            return (s.indexOf(subs) === 0);
        },

        /**
        * @function
        * @name ejoy2d.string.endsWith
        * @description Check if a string s ends with another string subs
        * @param {String} s The string to look in
        * @param {String} subs The string to look for
        * @returns {Boolean} True if s ends with subs
        */
        endsWith: function (s, subs) {
            return (s.lastIndexOf(subs, s.length - subs.length) !== -1);
        },

        /**
        * @function
        * @name ejoy2d.string.toBool
        * @description Convert a string value to a boolean. In non-strict mode (the default), 'true' is converted to true, all other values
        * are converted to false. In strict mode, 'true' is converted to true, 'false' is converted to false, all other values will throw
        * an Exception.
        * @param {String} s The string to convert
        * @param {Boolean} [strict] In strict mode an Exception is thrown if s is not an accepted string value. Defaults to false
        * @returns {Boolean} The converted value
        */
        toBool: function (s, strict) {
            if (s === 'true') {
                return true;
            }

            if (strict) {
                if (s === 'false') {
                    return false;
                }

                throw new Error('Not a boolean string');
            }

            return false;
        }
    };
} ();

