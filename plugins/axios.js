export default function({ $axios }) {
    $axios.onRequest(config => {
        config.headers.common['CSRF-Token'] = document.cookie.replace(
            /(?:(?:^|.*;\s*)X-CSRF-TOKEN\s*\=\s*([^;]*).*$)|^.*$/,
            '$1'
        );
    });
}
