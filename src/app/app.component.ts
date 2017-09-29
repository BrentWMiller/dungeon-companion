import { Component, OnInit } from '@angular/core';

import { DungeonService } from './services/dungeon.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	providers: [DungeonService]
})
export class AppComponent {

	class: any;

	constructor(private dungeonService: DungeonService) {}
	
	ngOnInit() {
		this.getClass(2);
	}

	public async getClass(id) {
		this.dungeonService.getClass(id)
			.subscribe((response) => {
				this.class = response;
				console.log(this.class);
			});
	}
}
