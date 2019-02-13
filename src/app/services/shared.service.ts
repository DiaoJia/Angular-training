import { BehaviorSubject } from 'rxjs';
import { Injectable } from "@angular/core";

@Injectable()
export class SharedService {
		public isLoading = new BehaviorSubject<boolean>(false);
		constructor() {
		}
}
