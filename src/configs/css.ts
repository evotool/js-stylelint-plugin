/* eslint-disable */

const configuration = {
  files: ['*.css', '**/*.css'],
  plugins: ['stylelint-order'],
  rules: {
    'alpha-value-notation': 'number',
    'at-rule-no-unknown': [true, { 'ignoreAtRules': ['include', 'mixin'] }],
    'block-no-empty': null,
    'color-no-hex': null,
    'declaration-block-no-redundant-longhand-properties': null,
    'declaration-block-no-shorthand-property-overrides': null,
    'declaration-no-important': null, // ?
    'declaration-property-value-no-unknown': null, // ?
    'font-family-no-missing-generic-family-keyword': null,
    'font-weight-notation': 'numeric',
    'function-no-unknown': null,
    'function-url-quotes': null,
    'no-descending-specificity': null,
    'no-empty-source': null,
    'no-invalid-position-at-import-rule': null,
    'no-unknown-custom-properties': null, // ?
    'property-no-vendor-prefix': null,
    'selector-class-pattern': null,
    'selector-no-qualifying-type': null, // ?
    'selector-pseudo-class-no-unknown': null,
    'selector-pseudo-element-no-unknown': null,
    'selector-type-no-unknown': null,

    'order/properties-alphabetical-order': true,

    'at-rule-allowed-list': null,
    'at-rule-disallowed-list': null,
    'at-rule-property-required-list': null,
    'color-hex-alpha': null,
    'color-named': null,
    'comment-pattern': null,
    'comment-word-disallowed-list': null,
    'declaration-property-max-values': null,
    'declaration-property-unit-allowed-list': null,
    'declaration-property-unit-disallowed-list': null,
    'declaration-property-value-allowed-list': null,
    'declaration-property-value-disallowed-list': null,
    'function-allowed-list': null,
    'function-disallowed-list': null,
    'function-url-scheme-allowed-list': null,
    'function-url-scheme-disallowed-list': null,
    'max-nesting-depth': null,
    'media-feature-name-allowed-list': null,
    'media-feature-name-disallowed-list': null,
    'media-feature-name-unit-allowed-list': null,
    'media-feature-name-value-allowed-list': null,
    'property-allowed-list': null,
    'property-disallowed-list': null,
    'rule-selector-property-disallowed-list': null,
    'selector-attribute-name-disallowed-list': null,
    'selector-attribute-operator-allowed-list': null,
    'selector-attribute-operator-disallowed-list': null,
    'selector-combinator-allowed-list': null,
    'selector-combinator-disallowed-list': null,
    'selector-disallowed-list': null,
    'selector-max-attribute': null,
    'selector-max-class': null,
    'selector-max-combinators': null,
    'selector-max-compound-selectors': null,
    'selector-max-id': null,
    'selector-max-pseudo-class': null,
    'selector-max-specificity': null,
    'selector-max-type': null,
    'selector-max-universal': null,
    'selector-nested-pattern': null,
    'selector-pseudo-class-allowed-list': null,
    'selector-pseudo-class-disallowed-list': null,
    'selector-pseudo-element-allowed-list': null,
    'selector-pseudo-element-disallowed-list': null,
    'time-min-milliseconds': null,
    'unit-allowed-list': null,
    'unit-disallowed-list': null,

    // 'color-no-hex': true,
    // 'declaration-no-important': true,
    // 'declaration-property-value-no-unknown': true,
    // 'font-weight-notation': true,
    'function-url-no-scheme-relative': true,
    'media-feature-name-value-no-unknown': true,
    'no-unknown-animations': true,
    'no-unknown-custom-media': true,
    // 'no-unknown-custom-properties': true,
    // 'selector-no-qualifying-type': true,

    'annotation-no-unknown': true, // recommended
    // 'at-rule-no-unknown': true, // recommended
    // 'block-no-empty': true, // recommended
    'color-no-invalid-hex': true, // recommended
    'comment-no-empty': true, // recommended
    'custom-property-no-missing-var-function': true, // recommended
    'declaration-block-no-duplicate-custom-properties': true, // recommended
    'declaration-block-no-duplicate-properties': [true, { ignore: ['consecutive-duplicates-with-different-syntaxes'] }], // recommended
    // 'declaration-block-no-shorthand-property-overrides': true, // recommended
    'font-family-no-duplicate-names': true, // recommended
    // 'font-family-no-missing-generic-family-keyword': true, // recommended
    'function-calc-no-unspaced-operator': true, // recommended
    'function-linear-gradient-no-nonstandard-direction': true, // recommended
    // 'function-no-unknown': true, // recommended
    'keyframe-block-no-duplicate-selectors': true, // recommended
    'keyframe-declaration-no-important': true, // recommended
    'media-feature-name-no-unknown': true, // recommended
    'media-query-no-invalid': true, // recommended
    'named-grid-areas-no-invalid': true, // recommended
    // 'no-descending-specificity': true, // recommended
    'no-duplicate-at-import-rules': true, // recommended
    'no-duplicate-selectors': true, // recommended
    // 'no-empty-source': true, // recommended
    'no-invalid-double-slash-comments': true, // recommended
    // 'no-invalid-position-at-import-rule': true, // recommended
    'no-irregular-whitespace': true, // recommended
    'property-no-unknown': true, // recommended
    'selector-anb-no-unmatchable': true, // recommended
    // 'selector-pseudo-class-no-unknown': true, // recommended
    // 'selector-pseudo-element-no-unknown': true, // recommended
    // 'selector-type-no-unknown': [true, { ignore: ['custom-elements'] }], // recommended
    'string-no-newline': true, // recommended
    'unit-no-unknown': true, // recommended

    // 'alpha-value-notation': ['percentage', { exceptProperties: ['opacity', 'fill-opacity', 'flood-opacity', 'stop-opacity', 'stroke-opacity'] }], // standard
    'at-rule-empty-line-before': ['always', { except: ['blockless-after-same-name-blockless', 'first-nested'], ignore: ['after-comment'] }], // standard
    'at-rule-no-vendor-prefix': true, // standard
    'color-function-notation': 'modern', // standard
    'color-hex-length': 'short', // standard
    'comment-empty-line-before': ['always', { except: ['first-nested'], ignore: ['stylelint-commands'] }], // standard
    'comment-whitespace-inside': 'always', // standard
    'custom-media-pattern': ['^([a-z][a-z0-9]*)(-[a-z0-9]+)*$', { message: (name: string) => `Expected custom media query name "${name}" to be kebab-case` }], // standard
    'custom-property-empty-line-before': ['always', { except: ['after-custom-property', 'first-nested'], ignore: ['after-comment', 'inside-single-line-block'] }], // standard
    'custom-property-pattern': ['^([a-z][a-z0-9]*)(-[a-z0-9]+)*$', { message: (name: string) => `Expected custom property name "${name}" to be kebab-case` }], // standard
    // 'declaration-block-no-redundant-longhand-properties': true, // standard
    'declaration-block-single-line-max-declarations': 1, // standard
    'declaration-empty-line-before': ['always', { except: ['after-declaration', 'first-nested'], ignore: ['after-comment', 'inside-single-line-block'] }], // standard
    'font-family-name-quotes': 'always-where-recommended', // standard
    'function-name-case': 'lower', // standard
    // 'function-url-quotes': 'always', // standard
    'hue-degree-notation': 'angle', // standard
    'import-notation': 'url', // standard
    'keyframe-selector-notation': 'percentage-unless-within-keyword-only-block', // standard
    'keyframes-name-pattern': ['^([a-z][a-z0-9]*)(-[a-z0-9]+)*$', { message: (name: string) => `Expected keyframe name "${name}" to be kebab-case` }], // standard
    'length-zero-no-unit': [true, { ignore: ['custom-properties'] }], // standard
    'lightness-notation': 'percentage', // standard
    'media-feature-name-no-vendor-prefix': true, // standard
    'media-feature-range-notation': 'context', // standard
    'number-max-precision': 4, // standard
    // 'property-no-vendor-prefix': true, // standard
    'rule-empty-line-before': ['always-multi-line', { except: ['first-nested'], ignore: ['after-comment'] }], // standard
    'selector-attribute-quotes': 'always', // standard
    // 'selector-class-pattern': ['^([a-z][a-z0-9]*)(-[a-z0-9]+)*$', { message: (selector: string) => `Expected class selector "${selector}" to be kebab-case` }], // standard
    'selector-id-pattern': ['^([a-z][a-z0-9]*)(-[a-z0-9]+)*$', { message: (selector: string) => `Expected id selector "${selector}" to be kebab-case` }], // standard
    'selector-no-vendor-prefix': true, // standard
    'selector-not-notation': 'complex', // standard
    'selector-pseudo-element-colon-notation': 'double', // standard
    'selector-type-case': 'lower', // standard
    'shorthand-property-no-redundant-values': true, // standard
    'value-keyword-case': 'lower', // standard
    'value-no-vendor-prefix': [true, { ignoreValues: ['box', 'inline-box'] }], // standard
  },
};

export default configuration;
