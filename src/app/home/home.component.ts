import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent {
  teams = [];

  onSelectCountry(countryName) {
    if (this.teams.length < 2) {
      this.teams.push(countryName);
    }
    console.log(this.teams);
  }

  setTeams() {
    localStorage.setItem('team1', this.teams[0]);
    localStorage.setItem('team2', this.teams[1]);
  }
}
