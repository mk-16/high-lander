export type WeatherAPIResponse = {
    current: SpeedAndTemperature
}

export type SpeedAndTemperature = {
    wind_speed_10m: number;
    temperature_2m: number;
}

export function WeatherAPIResponseGuard(target: unknown): target is WeatherAPIResponse {
    if (typeof target != "object" || !target)
        return false;

    const current = Reflect.ownKeys(target).includes('current') ? target['current' as keyof typeof target] : undefined;
    const keys = Reflect.ownKeys(current ?? {});
    return keys.includes('wind_speed_10m') || keys.includes('temperature_2m');
}

export type WeatherAPIResponeCallback = (value: unknown) => unknown
export class ParsedWeatherResponse {
    windSpeed: number = 8;
    temperature: number = 26;
}