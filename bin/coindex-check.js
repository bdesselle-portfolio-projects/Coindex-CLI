const program = require('commander');
const check = require('../commands/check');

program
    .command('price')
    .description('Check price of cryptos')
    .option('--coin <type>', 'Add specific crypto ticker symbols in CSV format', 'BTC,ETH,LTC,ZEC,XTZ')
    .option('--cur <currency>', 'Change the currency', 'USD')
    .action((cmd) => check.price(cmd));

program.parse(process.argv);