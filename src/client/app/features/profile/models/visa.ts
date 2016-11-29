import { Country } from './country';

export interface Visa {
    ID: number;
    Number: string;
    Type: string;
    Status: string;
    Comments: string;
    FilePath: string;
    Country: Country;
}
