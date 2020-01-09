import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent {
  teams = [];

  constructor(private router: Router) {}

  onSelectCountry(countryName) {
    if (this.teams.length < 2) {
      this.teams.push(countryName);
    }
    console.log(this.teams);
  }

  setTeams() {
    if (this.teams.length === 2) {
      localStorage.setItem("team1", this.teams[0]);
      localStorage.setItem("team2", this.teams[1]);
      this.router.navigate(['/toss']);
    }
  }
}
