import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CountryService } from './Services/CountryService';
import { Country, GeoName } from './Entities/Country';

@Component({
    selector: 'country-Detail',
    templateUrl: './Views/CountryDetailView.html',
    styleUrls: ['./CustomStyles/countryDetails.css']
    //,providers: [CountryService]
})
export class CountryDetailComponent implements OnInit {
 
    constructor(private router: ActivatedRoute, private route: Router, private countryService: CountryService) { }

    country:Country;
    capitals: GeoName[] = [];
    neighbours: GeoName[] = [];

    ngOnInit(): void 
    {
        this.loadCountryDetail(this.router.snapshot.params['countryCode']);
    }

    loadCountryDetail(countryCode:string):void
    {  
        this.countryService.getCountryDetail(countryCode).toPromise()
        .then(c => 
        {
          this.country = c[0]
          this.countryService.getCapitalPopultion(countryCode).toPromise()
          .then(cap => 
          {
            this.capitals = cap;
            let filterCapital:GeoName[] = this.capitals.filter(capital => capital.fcodeName.toLowerCase() == "capital of a political entity");
            this.country.capitalPopulation = filterCapital.length > 0 ? filterCapital[0].population : 0;

            this.countryService.getNeighbouringCountries(this.country.geonameId).toPromise()
            .then(neighbors => 
            {
              this.neighbours = neighbors.slice(0,3);
            })
          })
       }); 
    }

    navigate(countryCode:string):void
    {
      this.route.navigate(['/countries',countryCode]);
      this.loadCountryDetail(countryCode);
    }
}