# Changelog

All notable changes to this project will be documented in this file.

[Unreleased]

## [1.5.0] - 2025-08-01

### Added

- New `getLocale` function that centralizes locale configuration retrieval
- New `mapLanguage` function for mapping regional language variants to base languages
- Named exports for `languageMapper` and `locales` objects for better modularity

### Changed

- Refactored DateHandler constructor to use the new `getLocale` function instead of direct locale mapping
- Refactored `setLanguage` method to use the new `getLocale` function for better consistency
- Improved locale resolution system with dedicated functions for better maintainability
- Updated test imports to use named exports from locales module

### Improved

- Enhanced code organization by centralizing locale logic in dedicated functions
- Better separation of concerns in locale management system

## [1.4.1] - 2025-07-31

### Fixed

- Language mapper support for country-specific locale codes (es-AR, es-NI, es-CL, es-PE, es-GT, en-US)
- Test coverage for derived Spanish language variants

### Changed

- Refactored Portuguese locale configuration to reduce code duplication between pt and pt-BR
- Enhanced locale resolution to support country-specific language codes that map to base languages

## [1.4.0] - 2025-05-09

### Removed

- process env for logError

### Added

- flag debug in config instance

### Changed

- execute logError if debug is true

## [1.3.0] - 2025-02-19

### Changed

- Export and import for helpers

## [1.2.0] - 2025-01-24

### Removed

- word hours only for en locale

## [1.1.0] - 2025-01-21

### Changed

- Dates format with translation
- Refactor for class methods

## [1.0.2] - 2025-01-16

### Fixed

- command test:ci in github actions

## [1.0.1] - 2025-01-16

### Fixed

- command test:ci

## [1.0.0] - 2025-01-16

### Added

- Class DateHandler
- Methods isValid, format
- unit test
- ci/cd tools
