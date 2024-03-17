const ENTORNO = 'local';

const local = {
    url: '//localhost',
    port: '8080',
}


export function getServerURL() {

    switch (ENTORNO) {
        case 'local':
            return `${local.url}:${local.port}/v0/`;
            break;

    }
}