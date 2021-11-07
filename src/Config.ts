import { REGION } from "./utils";

export type Config = {
    isLive: boolean;
    region: REGION;

    username: string;
    password: string;
}
