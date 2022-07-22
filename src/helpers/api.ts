
import { env, axios, crypto} from './commom';
const apiKey = env.API_KEY;
const apiSecret = env.SECRET_KEY;

async function apiWithKey(path: string, data: any, method: string = "GET") {
    const timestamp = Date.now();
    const signature = crypto.createHmac('sha256', apiSecret)
        .update(`${new URLSearchParams({ ...data, timestamp }).toString()}`)
        .digest('hex');

    const newData = { ...data, timestamp, signature };
    const qs = `?${new URLSearchParams(newData).toString()}`;

    try {
        const response = await axios({
            method,
            url: `${path}${qs}`,
            headers: { 'X-MBX-APIKEY': apiKey }
        });

        return response.data;
    } catch (err) {
        console.log(err);
    }
}

async function api(path: string, data: any, method = "GET") {
    try {
        const qs = data ? `?${new URLSearchParams(data).toString()}` : '';
        const response = await axios({
            method,
            url: `${path}${qs}`
        });

        return response.data;
    } catch (err) {
        console.log(err);
    }
}

module.exports = { api, apiWithKey };

