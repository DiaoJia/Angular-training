import { SharedService } from "./../../services/shared.service";
import { Injectable, Injector } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse
} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  private requests: HttpRequest<any>[] = [];

  constructor(private sharedService: SharedService) {}

  removeRequest(req: HttpRequest<any>) {
    const i = this.requests.indexOf(req);
    if (i > -1) {
      this.requests.splice(i, 1);
    }
    this.sharedService.isLoading.next(this.requests.length > 0);
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (
      req.method === "GET" ||
      req.method === "DELETE" ||
      req.method === "POST"
    ) {
      this.requests.push(req);
      this.sharedService.isLoading.next(true);
      return Observable.create(observer => {
        const subscription = next.handle(req).subscribe(
          event => {
            if (event instanceof HttpResponse) {
              this.removeRequest(req);
              observer.next(event);
            }
          },
          err => {
            this.removeRequest(req);
            observer.error(err);
          },
          () => {
            this.removeRequest(req);
            observer.complete();
          }
        );
        return () => {
          this.removeRequest(req);
          subscription.unsubscribe();
        };
      });
    }
  }
}
