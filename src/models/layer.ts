import { Filter } from './filter';


export class Layer {
id: number;
naziv: string;
vrsta: string;
redosled: number;
pojedinacnaKO = false;
legend: string;
checked = false;
fillColor: string;
fillOpacity: number;
fillPattern: string;
strokeColor: string;
strokeOpacity: number;
filteri: Filter[];
enabledLegend = true;
preserveFitToBounds = false;
leaflet_fill_pattern : any
}
