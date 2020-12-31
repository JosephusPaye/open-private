# open-private

> Open a URL in private mode in your default browser from the command line on Windows

This project is part of [#CreateWeekly](https://twitter.com/JosephusPaye/status/1214853295023411200), my attempt to create something new publicly every week in 2020.

## Installation

```bash
npm install -g @josephuspaye/open-private
```

## Examples

### Open a URL in private mode

```sh
open-private https://example.com
```

**NOTE**: It's currently not possible to launch some browsers, like the original (pre-Chromium) Microsoft Edge, in private mode. When this is the case with your default browser, you will be prompted on whether to continue with a launch in normal mode or not.

### Open a URL in normal mode

```sh
open-private https://example.com -n
```

## Usage

```
  Description
    Open the given URL in private mode in your default browser

  Usage
    $ open-private <url> [options]

  Options
    -n, --nah        I've changed my mind, open the URL in the normal browser mode instead
    -v, --version    Displays current version
    -h, --help       Displays this message

  Examples
    $ open-private open-private https://example.com
    $ open-private open-private http://en.wikipedia.org -n
```

## Related

- [@josephuspaye/default-browser-win](https://github.com/JosephusPaye/default-browser-win) a version of this module for programmatic use

## Licence

[MIT](LICENCE)
