import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-play",
  templateUrl: "./play.component.html",
  styleUrls: ["./play.component.css"]
})
export class PlayComponent implements OnInit {
  displayedColumns: string[] = ["over", "run"];
  dataSource;
  teams = [localStorage.getItem("team1"), localStorage.getItem("team2")];
  battingTeam = localStorage.getItem("battingTeam");
  totalRun = 0;

  constructor() {}

  ngOnInit() {}

  newBall() {
    let oldScores = localStorage.getItem('scores');
    if(oldScores.length > 1) {
      return oldScores[oldScores.length - 1] + 0.1;
    } else {
      return 0.1;
    }
  }

  newScore() {
    // scores[scores.length - 1].over + 0.1
    console.log('new score');
  }

  score() {
    let scores = JSON.parse(localStorage.getItem("scores")) || [];
    let newScore = { over: this.newBall(), run: this.newScore() };
    scores.push(newScore);
    localStorage.setItem("scores", JSON.stringify(scores));
    this.dataSource = scores;
    console.log(scores);
  }
}
