import { AxiosResponse } from "axios";

export enum ResponseStatus {
    'OK' = 200,
    'NOT_FOUND' = 404,
    'FORBIDDEN' = 403,
    'SERVER_ERROR' = 500,
}


export default function ReturnedResponse (data: AxiosResponse) {
    if(data?.status === ResponseStatus.OK) {
        return data.data
    }

    return [];
}