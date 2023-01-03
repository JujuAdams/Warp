// get the command line arguments
import { mergeDeep } from '#util/deep_merge';
import trace from '#util/logging';
import chalk from 'chalk';
import semver from 'semver';
import minimist from 'minimist';
const args = minimist(process.argv.slice(2));

/**
 * @typedef {Object} Config
 * @property {object} meta
 * @property {string} meta.game_name
 * @property {string} meta.game_version
 * @property {string} meta.warp_version
 * @property {string} meta.compatible_game_versions
 * @property {string} meta.server
 * 
 * @property {object} lobby
 * @property {number} lobby.max_players
 * @property {boolean} lobby.addIntoPlayOnFull
 * @property {boolean} lobby.closeOnLeave
 * 
 * @property {object} room
 * @property {string} room.rooms_path
 * @property {boolean} room.warn_on_unknown_entity
 * @property {string} room.starting_room
 * @property {number} room.rest_timeout
 * 
 * @property {number} tps
 * 
 * @property {boolean} timestamps_enabled
 * @property {boolean} ws_enabled
 * @property {boolean} db_enabled
 * @property {boolean} shell_enabled
 * @property {boolean} rooms_enabled
 * @property {boolean} entities_enabled
 * @property {boolean} ssl_enabled
 * 
 * @property {string} ssl_cert_path
 * @property {string} ssl_key_path
 * 
 * @property {string} env_name
 * @property {boolean} necessary_login
 * @property {boolean} verbose_lag
 * 
 * @property {number} ping_interval
 * @property {number} mm_process_interval
 * 
 * @property {string} db
 * 
 * @property {string} ip
 * @property {number} port
 * @property {number} ws_port
 */

const common_config = {
    meta: {
        game_name: 'OnlineGame',
        game_version: 'v1.0.0',
        warp_version: 'v5.0.0',

        compatible_game_versions: '>=1.0.0',

        server: 'unknown'
    },

    // some fundamental lobby settings
    lobby: {
        max_players: 100,
        addIntoPlayOnFull: false,    // true - add all the players into play at the same time once the lobby is filled,
                                    // false - add them one by one immediately as they join
        closeOnLeave: false // close the lobby if a player leaves
    },

    room: {
        // .yy room loading
        rooms_path: '../Client/rooms', // (overriden in prod config)
        warn_on_unknown_entity: true,

        starting_room: 'Test Room',
        rest_timeout: 5    // (seconds) - prevents rooms from processing entities
                            // when no players are present for a certain amount of time
                            // set to -1 to disable this feature
    },

    tps: 60, // tickrate

    // Disable some of the features that you don't need in your game
    // true = enabled, false = disabled
    timestamps_enabled: true, // send timestamps with each packet (there is a client-side config as well)
    ws_enabled: true, // websocket server?
    db_enabled: true, // MongoDB support
    shell_enabled: false, // console that allows code execution while running the game (best set in prod/dev configs)
    rooms_enabled: true, // disables lobbies being split into rooms (sub-lobbies with entities)
    entities_enabled: true, // disables loading/spawning entities
    ssl_enabled: false, // SSL support. false by default (best set in the prod/dev configs)
    verbose_lag: false,
    
    necessary_login: false,

    ping_interval: 5 * 1000,
    mm_process_interval: 1 * 1000 // matchmaking: attempt to create new matches every X ms
}

const prod_config = {
    meta: {
        server: 'production'
    },
    env_name: 'prod',
    ip: '0.0.0.0', // you need to replace this with your domain if using ssl for it to work
    port: parseInt(args.port) || 1337,
    ws_port: parseInt(args.ws_port) || 3000,


    room: {
        rooms_path: './rooms'
    },

    ssl_enabled: false,
    ssl_cert_path: '/etc/letsencrypt/live/example.com/cert.pem',
    ssl_key_path: '/etc/letsencrypt/live/example.com/privkey.pem',

    db: args.db || 'mongodb://127.0.0.1:27017/online-game', // by default it uses the same db name for dev/prod, but
                                                             // you can add a postfix at the end of the name to separate them
    shell_enabled: false,
    verbose_lag: false,

    initial_lobbies: 3 // number of lobbies to create on start
}


const dev_config = {
    meta: {
        server: 'development'
    },
    env_name: 'dev',
    ip: '127.0.0.1',
    //ip: '192.168.1.1', // you can put your machine's local ip here for LAN play
    port: parseInt(args.port) || 1338,
    ws_port: parseInt(args.ws_port) || 3001,

    ssl_enabled: false,
    ssl_cert_path: '',
    ssl_key_path: '',

    db: args.db || 'mongodb://127.0.0.1:27017/online-game',
    
    shell_enabled: true,
    verbose_lag: true,

    initial_lobbies: 1
}


type CONFIG = typeof common_config & typeof dev_config;

declare global {
    namespace NodeJS {
        interface Global {
            config: CONFIG;
        }
    }
}


const default_config = dev_config;
const env = args.env || 'dev'


/**
 * @type {Config}
 */
const config:CONFIG = mergeDeep({}, common_config);

if (env === 'production' || env === 'prod' || args.prod) {
    mergeDeep(config, prod_config);
}
else if (env === 'development' || env === 'dev' || args.dev) {
    mergeDeep(config, dev_config);
}
else {
    mergeDeep(config, default_config);
}


trace(chalk.blueBright('Config loaded! environment: ' + config.env_name));

global.config = config;
export default config;