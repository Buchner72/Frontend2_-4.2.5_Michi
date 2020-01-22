import { Pipe, PipeTransform } from "@angular/core";

const PADDING = "000000";

@Pipe({ name: "currencynumber" })
export class CurrencyNumberPipe implements PipeTransform {

    private DECIMAL_SEPARATOR: string;
    private THOUSANDS_SEPARATOR: string;

    constructor() {
        // TODO comes from configuration settings
        this.DECIMAL_SEPARATOR = ",";
        this.THOUSANDS_SEPARATOR = ".";
    }

    transform(value: number | string, fractionSize: number = 2): string {
        if (value != null) {
            let [integer, fraction = ""] = (value || "").toString().split(this.DECIMAL_SEPARATOR);

            fraction = fractionSize > 0 ? this.DECIMAL_SEPARATOR + (fraction + PADDING).substring(0, fractionSize) : "";

            integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, this.THOUSANDS_SEPARATOR);

            return integer + fraction;
        }
        return "";
    }

    parse(value: string, fractionSize: number = 2): string {
        if (value != null) {
            let [integer, fraction = ""] = (value || "").split(this.DECIMAL_SEPARATOR);

            integer = integer.replace(this.THOUSANDS_SEPARATOR, "");

            fraction = parseInt(fraction, 10) > 0 && fractionSize > 0 ? this.DECIMAL_SEPARATOR + (fraction + PADDING).substring(0, fractionSize) : "";

            return integer + fraction;
        }
        return "";
    }
}