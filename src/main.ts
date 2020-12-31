#!/usr/bin/env node

import sade from 'sade';
import { red } from 'kleur';
import { prompt } from 'enquirer';
import { KnownBrowser, launch } from '@josephuspaye/default-browser-win';

const pkg = require('../package.json');

const prog = sade('open-private <url>', true)
  .version(pkg.version)
  .describe('Open the given URL in private mode in your default browser')
  .option(
    '-n, --nah',
    "I've changed my mind, open the URL in the normal browsing mode instead"
  )
  .example('open-private https://example.com')
  .example('open-private http://en.wikipedia.org -n')
  .action(async (url, options) => {
    const isPrivate = options?.nah ? false : true;
    try {
      await launch(url, {
        private: isPrivate,
        async onUnableToOpenPrivately(browser: KnownBrowser) {
          const { proceed } = await prompt<{ proceed: boolean }>({
            type: 'confirm',
            name: 'proceed',
            message: `Your default browser, ${browser.name}, cannot be launched privately. Launch normally?`,
          });

          return proceed;
        },
      });
    } catch (err) {
      if (err?.message) {
        console.error(
          red(
            `unable to launch URL in default browser${
              isPrivate ? ' privately' : ''
            }: ${err.message}`
          )
        );
      }
    }
  });

prog.parse(process.argv);
