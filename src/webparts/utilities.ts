
export class utilities {
    public static getCurrentTime(): string {
        let date = new Date();
        let value = date.getHours() + ':' +
            date.getMinutes() + ':' +
            date.getSeconds() + '.' +
            date.getMilliseconds();
        return value;
    }

    public static logger(message: string): void {
        console.log(this.getCurrentTime() + ' ' + message);
    }

    public static isEnvironmentProduction():boolean{
        return true;
    }
}