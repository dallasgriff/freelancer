import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
	moduleId: module.id,
	selector: 'proposal-list',
	templateUrl: 'proposal-list.component.html'
})
export class ProposalListComponent {
	proposalOne: Proposal = new Proposal(15, 'WeekMeal', 'http://portfolio.dallasgriffiths.com', 'Ruby', 150, 120, 15, 'financedbg@gmail.com')
	proposalTwo: Proposal = new Proposal(99, 'i.beat.tbi', 'http://portfolio.dallasgriffiths.com', 'Ruby', 150, 120, 15, 'dallasgriff@gmail.com')
	proposalThree: Proposal = new Proposal(300, 'Doula', 'http://portfolio.dallasgriffiths.com', 'Ruby', 150, 120, 15, 'clanofgriffs@gmail.com')

	proposals: Proposal[] = [
		this.proposalOne,
		this.proposalTwo,
		this.proposalThree
	]
}
