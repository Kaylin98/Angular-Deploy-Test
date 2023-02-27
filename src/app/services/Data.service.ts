import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs";

export class DataService {

    constructor(private url: string, private http: HttpClient){
    }

    getAll(){
        return this.http.get(this.url);
    }

    create(resource){
        return this.http.post(this.url, resource)
    }

    update(resource){
        return this.http.put(this.url + '/' + resource.id, resource)
    }

    delete(id : number){
        return this.http.delete(this.url + '/' + id)
        // .pipe(
        //     catchError(this.handleError)
        // );
    }

    private handleError(error: Response){
        if (error.status === 404){
          console.log(error)
          //return throwError(() => new NotFoundError(error));
        }
       // return throwError(() => new AppError(error));
      }
}