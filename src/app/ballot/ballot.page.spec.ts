import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NavController } from '@ionic/angular';
import { of } from 'rxjs';

import { BallotPage } from './ballot.page';
import {
  CarShowsService,
  createCarShowsServiceMock,
  testCarShows
} from '../services/car-shows';

import { createNavControllerMock } from '../../../test/mocks';

describe('BallotPage', () => {
  let component: BallotPage;
  let fixture: ComponentFixture<BallotPage>;
  let carShows;
  let navController;

  beforeEach(async(() => {
    carShows = createCarShowsServiceMock();
    carShows.getCurrent.and.returnValue(of(testCarShows[1]));
    navController = createNavControllerMock();
    TestBed.configureTestingModule({
      declarations: [BallotPage],
      providers: [
        { provide: CarShowsService, useValue: carShows },
        { provide: NavController, useValue: navController }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BallotPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('exists', () => {
    expect(component).toBeTruthy();
  });

  describe('initialization', () => {
    it('gets the current car show', () => {
      expect(carShows.getCurrent).toHaveBeenCalledTimes(1);
    });

    it('creates the votes array', () => {
      const expectedVotes = testCarShows[1].classes.map(c => ({
        carShowClassId: c.id,
        name: c.name,
        description: c.description
      }));
      expect(component.votes).toEqual(expectedVotes);
    });
  });

  describe('save ballot', () => {
    it('presents a loading spinner', async () => {});
    it('saves the ballot', async () => {});
    it('dismisses the spinner', async () => {});
    it('navigates back', async () => {});
  });

  describe('close', () => {
    it('navigates to the ballots page', () => {
      component.close();
      expect(navController.goBack).toHaveBeenCalledTimes(1);
    });
  });
});
