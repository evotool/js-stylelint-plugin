/* eslint-disable */

import * as postcssScss from 'postcss-scss';

const configuration = {
  files: ['*.scss', '**/*.scss'],
  plugins: ['stylelint-scss', 'stylelint-order'],
  syntax: 'scss',
  customSyntax: postcssScss,
  rules: {
    'alpha-value-notation': 'number',
    'at-rule-no-unknown': [true, { 'ignoreAtRules': ['include', 'mixin'] }],
    'block-no-empty': null,
    'declaration-block-no-redundant-longhand-properties': null,
    'declaration-block-no-shorthand-property-overrides': null,
    'font-family-no-missing-generic-family-keyword': null,
    'font-weight-notation': 'numeric',
    'function-no-unknown': null,
    'function-url-quotes': null,
    'no-descending-specificity': null,
    'no-empty-source': null,
    'no-invalid-position-at-import-rule': null,
    'order/properties-alphabetical-order': true,
    'property-no-vendor-prefix': null,
    'scss/no-global-function-names': null,
    'selector-class-pattern': null,
    'selector-pseudo-class-no-unknown': null,
    'selector-pseudo-element-no-unknown': null,
    'selector-type-no-unknown': null,

    'at-rule-allowed-list': true,
    'at-rule-disallowed-list': true,
    'at-rule-property-required-list': true,
    'color-hex-alpha': true,
    'color-named': true,
    'color-no-hex': true,
    'comment-pattern': true,
    'comment-word-disallowed-list': true,
    'declaration-no-important': true,
    'declaration-property-max-values': true,
    'declaration-property-unit-allowed-list': true,
    'declaration-property-unit-disallowed-list': true,
    'declaration-property-value-allowed-list': true,
    'declaration-property-value-disallowed-list': true,
    'declaration-property-value-no-unknown': true,
    // 'font-weight-notation': true,
    'function-allowed-list': true,
    'function-disallowed-list': true,
    'function-url-no-scheme-relative': true,
    'function-url-scheme-allowed-list': true,
    'function-url-scheme-disallowed-list': true,
    'max-nesting-depth': true,
    'media-feature-name-allowed-list': true,
    'media-feature-name-disallowed-list': true,
    'media-feature-name-unit-allowed-list': true,
    'media-feature-name-value-allowed-list': true,
    'media-feature-name-value-no-unknown': true,
    'no-unknown-animations': true,
    'no-unknown-custom-media': true,
    'no-unknown-custom-properties': true,
    'property-allowed-list': true,
    'property-disallowed-list': true,
    'rule-selector-property-disallowed-list': true,
    'selector-attribute-name-disallowed-list': true,
    'selector-attribute-operator-allowed-list': true,
    'selector-attribute-operator-disallowed-list': true,
    'selector-combinator-allowed-list': true,
    'selector-combinator-disallowed-list': true,
    'selector-disallowed-list': true,
    'selector-max-attribute': true,
    'selector-max-class': true,
    'selector-max-combinators': true,
    'selector-max-compound-selectors': true,
    'selector-max-id': true,
    'selector-max-pseudo-class': true,
    'selector-max-specificity': true,
    'selector-max-type': true,
    'selector-max-universal': true,
    'selector-nested-pattern': true,
    'selector-no-qualifying-type': true,
    'selector-pseudo-class-allowed-list': true,
    'selector-pseudo-class-disallowed-list': true,
    'selector-pseudo-element-allowed-list': true,
    'selector-pseudo-element-disallowed-list': true,
    'time-min-milliseconds': true,
    'unit-allowed-list': true,
    'unit-disallowed-list': true,

    // 'annotation-no-unknown': true, // recommended
    // 'at-rule-no-unknown': true, // recommended
    // 'block-no-empty': true, // recommended
    'color-no-invalid-hex': true, // recommended
    // 'comment-no-empty': true, // recommended
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
    // 'media-query-no-invalid': true, // recommended
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
    'at-rule-no-vendor-prefix': true, // standard
    // 'at-rule-empty-line-before': [ 'always', { except: ['blockless-after-same-name-blockless', 'first-nested'], ignore: ['after-comment'], }, ], // standard
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
    // 'import-notation': 'url', // standard
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

    'scss/at-each-key-value-single-line': true,
    'scss/at-function-named-arguments': true,
    'scss/at-import-no-partial-leading-underscore': true,
    'scss/at-import-partial-extension-allowed-list': true,
    'scss/at-import-partial-extension-blacklist': true,
    'scss/at-import-partial-extension-disallowed-list': true,
    'scss/at-import-partial-extension-whitelist': true,
    'scss/at-mixin-named-arguments': true,
    'scss/at-mixin-no-risky-nesting-selector': true,
    'scss/at-root-no-redundant': true,
    'scss/at-use-no-redundant-alias': true,
    'scss/at-use-no-unnamespaced': true,
    'scss/block-no-redundant-nesting': true,
    'scss/comment-no-loud': true,
    'scss/declaration-nested-properties': true,
    'scss/dimension-no-non-numeric-values': true,
    'scss/dollar-variable-colon-newline-after': true,
    'scss/dollar-variable-default': true,
    'scss/dollar-variable-empty-line-after': true,
    'scss/dollar-variable-first-in-block': true,
    'scss/dollar-variable-no-namespaced-assignment': true,
    'scss/double-slash-comment-inline': true,
    'scss/function-calculation-no-interpolation': true,
    'scss/function-color-relative': true,
    'scss/function-disallowed-list': true,
    'scss/function-no-unknown': true,
    'scss/map-keys-quotes': true,
    'scss/media-feature-value-dollar-variable': true,
    'scss/no-dollar-variables': true,
    'scss/no-duplicate-dollar-variables': true,
    'scss/no-unused-private-members': true,
    'scss/partial-no-import': true,
    'scss/property-no-unknown': true,
    'scss/selector-nest-combinators': true,
    'scss/selector-no-redundant-nesting-selector': true,
    'scss/selector-no-union-class-name': true,

    'annotation-no-unknown': null, // recommended-scss
    // 'at-rule-no-unknown': null, // recommended-scss
    'comment-no-empty': null, // recommended-scss
    // 'function-no-unknown': null, // recommended-scss
    'media-query-no-invalid': null, // recommended-scss
    // 'no-invalid-position-at-import-rule': [true, { ignoreAtRules: ['use', 'forward'] }], // recommended-scss
    'scss/at-extend-no-missing-placeholder': true, // recommended-scss
    'scss/at-if-no-null': true, // recommended-scss
    'scss/at-import-partial-extension': 'never', // recommended-scss
    'scss/at-rule-no-unknown': true, // recommended-scss
    'scss/comment-no-empty': true, // recommended-scss
    'scss/declaration-nested-properties-no-divided-groups': true, // recommended-scss
    'scss/dollar-variable-no-missing-interpolation': true, // recommended-scss
    'scss/function-quote-no-quoted-strings-inside': true, // recommended-scss
    'scss/function-unquote-no-unquoted-strings-inside': true, // recommended-scss
    'scss/load-no-partial-leading-underscore': true, // recommended-scss
    'scss/no-duplicate-mixins': true, // recommended-scss
    // 'scss/no-global-function-names': true, // recommended-scss
    'scss/operator-no-newline-after': true, // recommended-scss
    'scss/operator-no-newline-before': true, // recommended-scss
    'scss/operator-no-unspaced': true, // recommended-scss

    'at-rule-empty-line-before': ['always', { except: ['blockless-after-blockless', 'first-nested'], ignore: ['after-comment'], ignoreAtRules: ['else'] }], // standard-scss
    'import-notation': 'string', // standard-scss
    'scss/at-else-closing-brace-newline-after': 'always-last-in-chain', // standard-scss
    'scss/at-else-closing-brace-space-after': 'always-intermediate', // standard-scss
    'scss/at-else-empty-line-before': 'never', // standard-scss
    'scss/at-else-if-parentheses-space-before': 'always', // standard-scss
    'scss/at-function-parentheses-space-before': 'never', // standard-scss
    'scss/at-function-pattern': ['^(-?[a-z][a-z0-9]*)(-[a-z0-9]+)*$', { message: 'Expected function name to be kebab-case' }], // standard-scss
    'scss/at-if-closing-brace-newline-after': 'always-last-in-chain', // standard-scss
    'scss/at-if-closing-brace-space-after': 'always-intermediate', // standard-scss
    'scss/at-mixin-argumentless-call-parentheses': 'never', // standard-scss
    'scss/at-mixin-parentheses-space-before': 'never', // standard-scss
    'scss/at-mixin-pattern': ['^(-?[a-z][a-z0-9]*)(-[a-z0-9]+)*$', { message: 'Expected mixin name to be kebab-case' }], // standard-scss
    'scss/at-rule-conditional-no-parentheses': true, // standard-scss
    'scss/dollar-variable-colon-space-after': 'always-single-line', // standard-scss
    'scss/dollar-variable-colon-space-before': 'never', // standard-scss
    'scss/dollar-variable-empty-line-before': ['always', { except: ['after-dollar-variable', 'first-nested'], ignore: ['after-comment', 'inside-single-line-block'] }], // standard-scss
    'scss/dollar-variable-pattern': ['^(-?[a-z][a-z0-9]*)(-[a-z0-9]+)*$', { message: 'Expected variable to be kebab-case' }], // standard-scss
    'scss/double-slash-comment-empty-line-before': ['always', { except: ['first-nested'], ignore: ['between-comments', 'stylelint-commands'] }], // standard-scss
    'scss/double-slash-comment-whitespace-inside': 'always', // standard-scss
    'scss/percent-placeholder-pattern': ['^(-?[a-z][a-z0-9]*)(-[a-z0-9]+)*$', { message: 'Expected placeholder to be kebab-case' }], // standard-scss
  },
};

export default configuration;
