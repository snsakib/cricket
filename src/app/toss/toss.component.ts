import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-toss",
  templateUrl: "./toss.component.html",
  styleUrls: ["./toss.component.css"]
})
export class TossComponent implements OnInit {
  teams = [localStorage.getItem("team1"), localStorage.getItem("team2")];

  constructor(private router: Router) {}

  onSelectTeam(team) {
    localStorage.setItem('battingTeam', team);
    console.log('batting: ' + localStorage.getItem('battingTeam'));
  }

  startMatch() {
    const date = new Date();
    const uuid = `${this.teams[0]}-${this.teams[1]}-${date}`;
    this.router.navigate([`/play/${uuid}`]);
  }

  ngOnInit() {}
}
