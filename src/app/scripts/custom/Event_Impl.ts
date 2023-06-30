import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import _ from "lodash";
import { Observable } from 'rxjs';
import { EntityApiService } from '../apperyio/apperyio';
import { ApperyioHelperService } from '../apperyio/apperyio_helper';
import { ApperyioConfigService } from '../apperyio/config_service';
/*
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/


@Injectable()
class Event_Impl {
  constructor(private entityAPI: EntityApiService, private Apperyio: ApperyioHelperService, private http: HttpClient, private ConfigService: ApperyioConfigService) {}
  public date = new Date();
  
  execute() {
    return new Observable((observer) => {
      try {
        (async () => {
          let srvName = await this.Apperyio.getGSNameByImpl(this);
          if (!srvName) {
              observer.error("Service was not found");
              return;
          }
          let service = this.entityAPI.get(srvName),
              echo = service.echo,
              defaults = service.request.data,
              request,
              response;
          if (_.isUndefined(echo)) {
            const day = this.date.getDate().toString().padStart(2, '0');
      
            const month = this.date.getMonth().toString().padStart(2, '0');
      
            const year = this.date.getFullYear();
      
            const stringfiedDate = `${day}06${year}`

            console.log({stringfiedDate});
      
            const fetch25Data = async () => fetch('https://dedoduro.com.br/api/list/1/25062023');
    
            const fetchTodayData = async () => fetch(`https://dedoduro.com.br/api/list/1/${stringfiedDate}`);
            
            const data = await fetchTodayData();
            
            const bodyDataParsed = await data.json();

            const events = bodyDataParsed.events.reduce((acc, { persons, ...data }) => {
              const newEventNames = persons.reduce((accumulator: string, { name }, index, array: any[]) => {
                const nameAlreadyInNames = accumulator.includes(name);

                if(nameAlreadyInNames) return accumulator;

                const nameQuantity = array.filter(item => item.name === name).length;

                const arrayOnlyContainsName = array.length === nameQuantity;

                if(arrayOnlyContainsName) return `${nameQuantity} ${name}`;

                const newName = index === (array.length -1) ? name : `${nameQuantity > 1 ? (`${nameQuantity} ${name}`) : name}, `

                return accumulator + newName
              } , '')

              const newEvent = { 
                ...data, 
                names:  newEventNames
              }

              return [...acc, newEvent]
            }, [])
            
            console.log({events});
      
            observer.next({events});
            observer.complete();
          } else {
              try {
                  echo = JSON.parse(echo);
              } catch (e) {
                  console.log('JSON parse error');
                  observer.error(e);
              }

              observer.next(echo);
              observer.complete();
          }
      })()
      } catch (e) {
        console.log('Execute error');
        observer.error(e);
      }
    })
  }
}

/*
    Service class should be exported as ExportedClass
*/
export { Event_Impl as ExportedClass };
