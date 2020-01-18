import { Injectable } from "@angular/core";
import * as data from "../data/data.json";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor() {}

  getData() {
    return new Promise((resolve, reject) => {
      resolve(data);
    });
  }
}
